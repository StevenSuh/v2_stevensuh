import React from 'react';
import PropTypes from 'prop-types';

import Bracket from 'src/assets/bracket.png';

import { startAnimation } from 'src/scripts/modules/app/effects';
import * as defs from 'src/scripts/modules/app/defs';
import style from 'src/scripts/modules/app/style.module.css';

class MainAnimation extends React.Component {
  componentDidMount() {
    const elems = {
      container: document.getElementById(defs.MAIN_CONTAINER),
      headerList: document.getElementById(defs.MAIN_TEXT).children,
      left: document.getElementById(defs.MAIN_LEFT),
      main: document.getElementById(defs.MAIN_TEXT),
      right: document.getElementById(defs.MAIN_RIGHT),
      scrollDown: document.getElementById(defs.SCROLL_DOWN),
      wrapper: document.getElementById(defs.MAIN_WRAPPER),
    };

    startAnimation(elems);
  }

  componentWillMount() {
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.addEventListener('resize', this.onResize);
  }

  onResize() {
    const main = document.getElementById(defs.MAIN_TEXT);
    const wrapper = document.getElementById(defs.MAIN_WRAPPER);

    const expectedWidth = main.clientWidth + defs.MAIN_WRAPPER_PADDING_WIDTH;

    wrapper.classList.add(style.no_transition);
    wrapper.style.width = expectedWidth + 'px';
    setTimeout(() => wrapper.classList.remove(style.no_transition), 0);
  }

  render() {
    const { isDesktop } = this.props;

    const textToAnimate = isDesktop ? defs.TEXT_TO_ANIMATE : defs.TEXT_TO_ANIMATE_MOBILE;

    return (
      <div
        className={style.landing_page}
        id={defs.LANDING_PAGE}
      >
        <div
          className={style.main_container}
          id={defs.MAIN_CONTAINER}
        >
          <span>
            <img alt="left bracket" src={Bracket} />
          </span>
          <div
            className={style.main_wrapper}
            id={defs.MAIN_WRAPPER}
          >
            <div
              className={style.main_text}
              id={defs.MAIN_TEXT}
            >
              {textToAnimate.split('').map((text, index) => (
                <h1
                  className={style.hidden}
                  key={index}
                >
                  {text}
                </h1>
              ))}
            </div>
          </div>
          <span>
            <img
              alt="right bracket"
              className={style.main_right}
              src={Bracket}
            />
          </span>
        </div>
        <div
          className={style.scroll_down}
          id={defs.SCROLL_DOWN}
        >
          _
        </div>
      </div>
    );
  }
}

MainAnimation.propTypes = {
  isDesktop: PropTypes.bool.isRequired,
};

export default MainAnimation;
