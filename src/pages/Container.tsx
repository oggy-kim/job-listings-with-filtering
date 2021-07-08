import * as React from 'react';
import List from '../components/List';
import Header from '../components/Header';
import style from '../styles/pages/Container.module.scss';

function Container() {
  return (
    <div className={`${style.container}`}>
      <Header />
      <List />
    </div>
  );
}

export default Container;
