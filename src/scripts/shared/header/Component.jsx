import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { onScrollLanding } from './effects';
import * as utils from 'src/scripts/shared/utils';

import {
  HEADER,
  HEADER_LOGO,
} from 'src/scripts/shared/defs';
import style from './style.module.css';
import sharedStyle from 'src/scripts/shared/style.module.css';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeIsDesktop = this.onChangeIsDesktop.bind(this);
    this.onScrollLanding = onScrollLanding.bind(this);
  }

  onChangeIsDesktop() {
    this.props.onChangeIsDesktop(utils.isDesktop());
  }

  componentWillMount() {
    window.addEventListener('resize', this.onChangeIsDesktop);
    window.addEventListener('scroll', this.onScrollLanding);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onChangeIsDesktop);
    window.removeEventListener('scroll', this.onScrollLanding);
  }

  render() {
    const { pathname } = this.props.location;

    return (
      <header
        className={classNames(style.header, pathname === '/' ? style.landing : '')}
        id={HEADER}
      >
        <div className={style.header_container}>
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
};

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  onChangeIsDesktop: PropTypes.func.isRequired,
};

export default Header;
