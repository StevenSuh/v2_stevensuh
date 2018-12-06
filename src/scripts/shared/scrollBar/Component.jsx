import React from 'react';
import PropTypes from 'prop-types';

import { onScrollBar } from './effects';
import style from './style.module.css';

class ScrollBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      barPercentage: 0,
      isLanding: this.props.pathname === '/',
    };

    this.onScrollBar = onScrollBar.bind(this);
  }

  componentWillMount() {
    if (!this.state.isLanding) {
      window.addEventListener('scroll', this.onScrollBar);
    }
  }

  componentWillUnmount() {
    if (!this.state.isLanding) {
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
};

ScrollBar.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default ScrollBar;
