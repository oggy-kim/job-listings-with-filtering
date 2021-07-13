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
    fetchJobList().then((res) => {
      if (options.length) {
        dispatch(filteredList(options));
      }
    });
  }, [options]);
  const Items = React.useCallback(() => {
    return (
      <>
        {list.map((item) => {
          return <Item key={item.id} {...item} />;
        })}
      </>
    );
  }, [list]);

  return (
    <>
      <Header />
      <div className={`${style.container}`}>
        <Selector options={options} />
        <Items />
      </div>
    </>
  );
}

export default Container;
