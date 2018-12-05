import React from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames';

import { onScrollLanding } from './effects';
import {
  HEADER,
  HEADER_LOGO,
} from 'src/scripts/shared/defs';
import style from './style.module.css';
import sharedStyle from 'src/scripts/shared/style.module.css';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.onScrollLanding = onScrollLanding.bind(this);
  }

  componentWillMount() {
    window.addEventListener('scroll', this.onScrollLanding);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScrollLanding);
  }

  render() {
    const { pathname } = this.props.location;

    return (
      <header
        className={classNames(style.header, pathname === '/' ? style.landing : '')}
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
      </header>
    );
  }
}

export default Header;
