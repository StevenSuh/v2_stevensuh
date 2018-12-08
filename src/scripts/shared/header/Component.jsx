import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import {
  HEADER,
  HEADER_LOGO,
} from 'src/scripts/shared/defs';
import sharedStyle from 'src/scripts/shared/style.module.css';
import * as utils from 'src/scripts/shared/utils';

import { onScrollLanding } from './effects';
import style from './style.module.css';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeIsDesktop = this.onChangeIsDesktop.bind(this);
    this.onScrollLanding = onScrollLanding.bind(this);
  }

  componentWillMount() {
    window.addEventListener('resize', this.onChangeIsDesktop);
    window.addEventListener('scroll', this.onScrollLanding);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onChangeIsDesktop);
    window.removeEventListener('scroll', this.onScrollLanding);
  }

  onChangeIsDesktop() {
    const { onChangeIsDesktop } = this.props;
    onChangeIsDesktop(utils.isDesktop());
  }

  render() {
    const { location: { pathname } } = this.props;

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
}

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  onChangeIsDesktop: PropTypes.func.isRequired,
};

export default Header;
