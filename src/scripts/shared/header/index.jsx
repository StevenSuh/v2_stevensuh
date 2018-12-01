import React from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames';

import {
  HEADER,
  HEADER_BG,
  HEADER_LOGO,
} from 'src/scripts/shared/defs';
import style from './style.module.css';
import sharedStyle from 'src/scripts/shared/style.module.css';

const Header = () => (
  <header
    className={style.header}
    id={HEADER}
  >
    <div className={sharedStyle.container}>
      <Link
        className={classNames(style.logo, sharedStyle.hover)}
        id={HEADER_LOGO}
        to="/"
      >
        S
      </Link>
    </div>
    <div className={style.headerAboveBg} id={HEADER_BG} />
    <div className={style.headerBelowBg} />
  </header>
);

export default Header;
