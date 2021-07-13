import * as React from 'react';
import { useDispatch } from 'react-redux';
import { deleteAllOptions, deleteOption } from '../redux/optionsSlice';
import style from '../styles/components/Selector.module.scss';

function Selector({ options }: { options: string[] }) {
  console.log(options);
  const active = options.length ? style.active : '';
  const dispatch = useDispatch();

  const handleDeleteAll = () => {
    dispatch(deleteAllOptions());
  };

  const Types = () => {
    const handleClick = (option: string) => {
      console.log(option);
      dispatch(deleteOption(option));
    };

    return (
      <>
        {options.map((option) => {
          return (
            <>
              <div className={`${style.option}`} key={option}>
                <div className={`${style.text}`}>{option}</div>
                <div
                  className={`${style.delete}`}
                  onClick={(e) => handleClick(option)}
                >
                  X
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div className={`${style.container} ${active}`}>
      <Types />
      <span className={`${style.clear}`} onClick={handleDeleteAll}>
        Clear
      </span>
    </div>
  );
}

export default Selector;
