import React from 'react';

import Bracket from 'src/assets/bracket.png';
import ExpandMore from 'src/assets/baseline-expand_more-24px.svg';

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

  render() {
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
              {defs.TEXT_TO_ANIMATE.split('').map((text, index) => (
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

export default MainAnimation;
