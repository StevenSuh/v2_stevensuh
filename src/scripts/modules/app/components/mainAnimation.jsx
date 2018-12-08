import React from 'react';
import PropTypes from 'prop-types';

import Bracket from 'src/assets/bracket.png';

import { startAnimation } from 'src/scripts/modules/app/effects';
import * as defs from 'src/scripts/modules/app/defs';
import style from 'src/scripts/modules/app/style.module.css';

class MainAnimation extends React.Component {
  constructor(props) {
    super(props);

    this.onResize = this.onResize.bind(this);

    this.containerRef = React.createRef();
    this.scrollDownRef = React.createRef();
    this.textRef = React.createRef();
    this.wrapperRef = React.createRef();
  }

  componentWillMount() {
    window.addEventListener('resize', this.onResize);
  }

  componentDidMount() {
    const elems = {
      container: this.containerRef.current,
      headerList: this.textRef.current.children,
      main: this.textRef.current,
      scrollDown: this.scrollDownRef.current,
      wrapper: this.wrapperRef.current,
    };

    startAnimation(elems);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize() {
    const main = this.textRef.current;
    const wrapper = this.wrapperRef.current;

    const expectedWidth = main.clientWidth + defs.MAIN_WRAPPER_PADDING_WIDTH;

    wrapper.classList.add(style.no_transition);
    wrapper.style.width = `${expectedWidth}px`;
    setTimeout(() => wrapper.classList.remove(style.no_transition), 0);
  }

  render() {
    const { isDesktop } = this.props;

    const textToAnimate = isDesktop ? defs.TEXT_TO_ANIMATE : defs.TEXT_TO_ANIMATE_MOBILE;

    return (
      <div className={style.landing_page}>
        <div
          className={style.main_container}
          ref={this.containerRef}
        >
          <span>
            <img alt="left bracket" src={Bracket} />
          </span>
          <div
            className={style.main_wrapper}
            ref={this.wrapperRef}
          >
            <div
              className={style.main_text}
              ref={this.textRef}
            >
              {textToAnimate.split('').map((text, index) => (
                <h1
                  className={style.hidden}
                  key={parseInt(index.toString(), 10)}
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
          ref={this.scrollDownRef}
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
