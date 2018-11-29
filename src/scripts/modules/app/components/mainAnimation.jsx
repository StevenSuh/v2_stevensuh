import React from 'react';

import { startAnimation } from '../effects';

import * as defs from '../defs';
import style from '../style.module.css';

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

    elems.wrapper.style.height = elems.main.clientHeight + 'px';
    elems.left.style.height = (elems.main.clientHeight * 0.9) + 'px';
    elems.right.style.height = (elems.main.clientHeight * 0.9) + 'px';

    startAnimation(elems);
  }

  render() {
    return (
      <div>
        <div
          className={style.main_container}
          id={defs.MAIN_CONTAINER}
        >
          <span id={defs.MAIN_LEFT}>{'〔'}</span>
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
          <span id={defs.MAIN_RIGHT}>{'〕'}</span>
        </div>
        <div
          className={style.scroll_down}
          id={defs.SCROLL_DOWN}
        >_</div>
      </div>
    );
  }
}

export default MainAnimation;
