import * as React from 'react';
import type { RootState } from 'src/redux';

import style from '../styles/components/Item.module.scss';

function Item(props: RootState['list']) {
  console.log(props);
  const {
    company,
    contract,
    featured,
    id,
    languages,
    level,
    location,
    logo,
    position,
    postedAt,
    role,
    tools,
  } = props;

  const options = [].concat(role, level, languages);

  const NewIcon = () => {
    return <span className={`${style.icon} ${style.new}`}>NEW!</span>;
  };

  const FeaturedIcon = () => {
    return <span className={`${style.icon} ${style.featured}`}>FEATURED</span>;
  };

  const Types = () => {
    return (
      <div className={`${style.options}`}>
        {options.map((option) => {
          return <button className={`${style.option}`}>{option}</button>;
        })}
      </div>
    );
  };

  return (
    <div className={`${style.container} ${featured ? style.featured : ''}`}>
      <img className={`${style.img}`} src={logo} />
      <div className={`${style.jobdiscription}`}>
        <div className={`${style.firstcontainer}`}>
          <span className={`${style.firstline}`}>{company}</span>
          {props.new && <NewIcon />}
          {props.featured && <FeaturedIcon />}
        </div>
        <div className={`${style.position}`}>{position}</div>
        <div className={`${style.info}`}>
          <span>{postedAt}</span> ・ <span>{contract}</span> ・{' '}
          <span>{location}</span>
        </div>
      </div>
      <Types />
    </div>
  );
}

export default Item;