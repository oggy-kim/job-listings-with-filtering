import * as React from 'react';
import { useDispatch } from 'react-redux';
import { deleteAllOptions, deleteOption } from '../redux/optionsSlice';
import style from '../styles/components/Selector.module.scss';

function Selector({ options }: { options: string[] }) {
  const active = options.length ? style.active : '';
  const dispatch = useDispatch();

  const handleDeleteAll = () => {
    dispatch(deleteAllOptions());
  };

  const Types = () => {
    const handleClick = (option: string) => {
      dispatch(deleteOption(option));
    };

    return (
      <>
        {options.map((option) => {
          return (
            <>
              <div className={`${style.option}`} key={`container ${option}`}>
                <div className={`${style.text}`} key={`text ${option}`}>
                  {option}
                </div>
                <div
                  key={`delete ${option}`}
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
