import React from 'react';

import classNames from 'classnames';

import style from '../style.module.css';
import sharedStyle from 'src/scripts/shared/style.module.css';

const Header = () => (
  <header className={style.header}>
    <div className={sharedStyle.container}>
      <a id="logo" className={classNames(style.logo, sharedStyle.hover)}>S</a>
      <nav className={style.nav}>
        <a className={style.nav_item}>
          <span>{'>'}</span>
          {' resume'}
        </a>
      </nav>
    </div>
  </header>
);

export default Header;
