import React from 'react';
import PropTypes from 'prop-types';

import { PROJECT_DETAILS } from 'src/scripts/shared/defs';

import { onScrollBar } from './effects';
import style from './style.module.css';

class ScrollBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { barPercentage: 0 };
    this.onScrollBar = onScrollBar.bind(this);
  }

  componentWillMount() {
    const { pathname } = this.props;
    if (pathname !== '/') {
      window.addEventListener('scroll', this.onScrollBar);
    }
  }

  componentWillUnmount() {
    const { pathname } = this.props;
    if (pathname !== '/') {
      window.removeEventListener('scroll', this.onScrollBar);
    }
  }

  render() {
    const { barPercentage } = this.state;
    const { pathname } = this.props;

    if (pathname === '/') {
      return null;
    }

    const projectName = pathname.slice(pathname.lastIndexOf('/') + 1);

    const headerStyle = pathname === '/' ? {}
      : PROJECT_DETAILS[projectName].headerStyle;

    return (
      <div
        className={style.scrollBar}
        style={{
          ...headerStyle,
          transform: `scaleX(${barPercentage})`,
        }}
      />
    );
  }
}

ScrollBar.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default ScrollBar;
