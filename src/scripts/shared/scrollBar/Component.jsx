import React from 'react';
import PropTypes from 'prop-types';

import { onScrollBar } from './effects';
import style from './style.module.css';

class ScrollBar extends React.Component {
  constructor(props) {
    super(props);

    const { pathname } = this.props;

    this.state = {
      barPercentage: 0,
      isLanding: pathname === '/',
    };

    this.onScrollBar = onScrollBar.bind(this);
  }

  componentWillMount() {
    const { isLanding } = this.state;
    if (!isLanding) {
      window.addEventListener('scroll', this.onScrollBar);
    }
  }

  componentWillUnmount() {
    const { isLanding } = this.state;
    if (!isLanding) {
      window.removeEventListener('scroll', this.onScrollBar);
    }
  }

  render() {
    const {
      barPercentage,
      isLanding,
    } = this.state;

    if (isLanding) {
      return null;
    }

    return (
      <div
        className={style.scrollBar}
        style={{ transform: `scaleX(${barPercentage})` }}
      />
    );
  }
}

ScrollBar.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default ScrollBar;
