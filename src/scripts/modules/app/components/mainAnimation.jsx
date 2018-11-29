import React from 'react';

import { startAnimation } from '../effects';

import * as defs from '../defs';
import style from '../style.module.css';

class MainAnimation extends React.Component {
  componentDidMount() {
    startAnimation();
  }

  render() {
    return (
      <div>
        <div
          className={style.main_container}
          id={defs.MAIN_CONTAINER}
        >
          <span className={style.left}>{'〔'}</span>
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
          <span className={style.right}>{'〕'}</span>
        </div>
        <div className={style.scroll_down}>_</div>
      </div>
    );
  }
}

export default MainAnimation;
