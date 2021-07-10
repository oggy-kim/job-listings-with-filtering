import * as React from 'react';
import style from '../styles/components/Selector.module.scss';

function Selector() {
  return (
    <div className={`${style.container}`}>
      <span>Frontend</span>
      <span>Frontend</span>
      <span>Frontend</span>
      <span>Clear</span>
    </div>
  );
}

export default Selector;
