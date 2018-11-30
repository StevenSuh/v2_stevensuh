import React from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames';

import { HEADER } from 'src/scripts/shared/defs';
import style from './style.module.css';
import sharedStyle from 'src/scripts/shared/style.module.css';

const Header = ({ isLanding }) => (
  <header
    className={style.header}
    id={HEADER}
  >
    <div className={sharedStyle.container}>
      <Link
        className={classNames(style.logo, sharedStyle.hover)}
        id="logo"
        to="/"
      >
        S
      </Link>
      <nav className={style.nav}>
        {isLanding && (
          <a
            className={style.nav_item}
            href="/assets/StevenSuh_Resume.pdf"
            target="_blank"
          >
            <span>{'>'}</span>
            {' resume'}
          </a>
        )}
      </nav>
    </div>
  </header>
);

export default Header;
