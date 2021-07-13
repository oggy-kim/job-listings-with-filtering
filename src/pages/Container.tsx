import * as React from 'react';
import Header from '../components/Header';
import style from '../styles/pages/Container.module.scss';
import Selector from '../components/Selector';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../redux';
import getJobList from '../api/getJobList';
import { filteredList, getList } from '../redux/listSlice';
import Item from '../components/Item';

function Container() {
  const list = useSelector((state: RootState) => state.list);
  const options = useSelector((state: RootState) => state.options);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const fetchJobList = async () => {
      const { data } = await getJobList();
      dispatch(getList(data));
    };
    fetchJobList();
  }, []);
  const Items = React.useCallback(
    ({ list }) => {
      const renderList = list.filter(({ role, level, languages }) => {
        const itemOptions = [role, level, ...languages];
        return options.every((option) => itemOptions.includes(option));
      });

      return (
        <>
          {renderList.map((item) => {
            return <Item key={item.id} {...item} />;
          })}
        </>
      );
    },
    [options],
  );

  return (
    <>
      <Header />
      <div className={`${style.container}`}>
        <Selector options={options} />
        <Items list={list} />
      </div>
    </>
  );
}

export default Container;
