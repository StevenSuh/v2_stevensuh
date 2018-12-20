import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import {
  HEADER,
  HEADER_LOGO,
  PROJECT_DETAILS,
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

  componentDidMount() {
    this.updateThemeColor(this.props);
  }

  componentDidUpdate() {
    this.updateThemeColor(this.props);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onChangeIsDesktop);
    window.removeEventListener('scroll', this.onScrollLanding);
  }

  onChangeIsDesktop() {
    const { onChangeIsDesktop } = this.props;
    onChangeIsDesktop(utils.isDesktop());
  }

  updateThemeColor(props) {
    const { location: { pathname } } = props;

    const themeMeta = document.querySelector('[name="theme-color"]');
    let themeColor = '#000000';

    if (pathname !== '/') {
      const projectName = pathname.slice(pathname.lastIndexOf('/') + 1);
      themeColor = PROJECT_DETAILS[projectName].theme;
    }
    themeMeta.content = themeColor;
  }

  render() {
    const { location: { pathname } } = this.props;
    const projectName = pathname.slice(pathname.lastIndexOf('/') + 1);

    const headerStyle = pathname === '/' ? {}
      : PROJECT_DETAILS[projectName].headerStyle;

    return (
      <header
        className={classNames(style.header)}
        id={HEADER}
      >
        <div className={style.header_container}>
          <Link
            className={classNames(style.logo, sharedStyle.hover)}
            id={HEADER_LOGO}
            style={headerStyle}
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
