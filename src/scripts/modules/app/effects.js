import * as defs from './defs';
import * as sharedDefs from 'src/scripts/shared/defs';

import headerStyle from 'src/scripts/shared/header/style.module.css';
import style from './style.module.css';

export const changeInputFactory = (type, el) => {
  const list = defs.inputList[type];
  let index = 0;

  return () => {
    index = (index + 1) % list.length;

    if (type === defs.inputDefs.ALPHABETS) {
      el.textContent = list[index];
    }
    if (type === defs.inputDefs.COLORS) {
      el.style.color = list[index];
    }
    if (type === defs.inputDefs.PUNC) {
      el.textContent = list[index];
    }
  };
};

export const reset = (list) => {
  for (let i = 0; i < list.length; i++) {
    list[i].classList.add(style.hidden);
    list[i].classList.remove(style.slow_color);
  }
};

export const resetEl = (el, letter, intervals) => {
  el.style.color = null;
  el.textContent = letter;
  el.classList.add(style.slow_color);

  intervals.forEach(interval => clearInterval(interval));
};

export const doOneStep = (elems, index) => {
  if (index < defs.TEXT_TO_ANIMATE.length) {
    const currHeader = elems.headerList[index];
    const displayText = currHeader.textContent;

    let currDuration = defs.PER_DURATION - (defs.DECREMENT * index);
    const intervals = [];

    currHeader.classList.remove(style.hidden);

    if (/^[a-z0-9]+$/i.test(displayText)) {
      const changeInputColor = changeInputFactory(defs.inputDefs.COLORS, currHeader);
      intervals.push(setInterval(changeInputColor, defs.COLOR_DURATION));

      const changeInputAlphabet = changeInputFactory(defs.inputDefs.ALPHABETS, currHeader);
      intervals.push(setInterval(changeInputAlphabet, defs.TEXT_DURATION));

      setTimeout(resetEl, currDuration, currHeader, displayText, intervals);
    } else {
      currDuration = 0;
    }

    setTimeout(doOneStep, currDuration, elems, index + 1);
  } else {
    setTimeout(
      () => {
        elems.wrapper.style.width = '0px';
        elems.container.classList.remove(style.blink);
      },
      defs.PER_DURATION * defs.TEXT_TO_ANIMATE.length,
    );
    setTimeout(
      startAnimation,
      (defs.PER_DURATION * defs.TEXT_TO_ANIMATE.length) + defs.TRANSITION_DURATION + defs.PER_DURATION,
      elems,
    );
  }
};

export const startAnimation = (elems) => {
  const expectedWidth = elems.main.clientWidth + defs.MAIN_WRAPPER_PADDING_WIDTH;

  elems.container.classList.add(style.blink);

  reset(elems.headerList);

  setTimeout(() => elems.wrapper.style.width = expectedWidth + 'px', defs.BLINK_DURATION);
  setTimeout(
    doOneStep,
    defs.BLINK_DURATION + defs.TRANSITION_DURATION + defs.PER_DURATION,
    elems,
    0,
  );
};

export const onScrollProjectFactory = ({
  id,
  name,
}) => {
  return function() {
    const header = document.getElementById(sharedDefs.HEADER);
    const logo = document.getElementById(sharedDefs.HEADER_LOGO);
    const project = document.getElementById(`${id}-wrapper`);

    const { isScrolledProject } = this.state;

    const projectPosition = project.getBoundingClientRect().top + header.clientHeight;

    if (!header || !logo || !project) {
      return;
    }

    if (!isScrolledProject) {
      if (projectPosition <= (project.clientHeight / 2) &&
          projectPosition >= -(project.clientHeight / 2)) {
        project.classList.add(style.reveal);

        this.setState({
          isScrolledProject: true,
        });
      }
    } else {
      if (projectPosition > (project.clientHeight / 2) ||
          projectPosition < -(project.clientHeight / 2)) {
        project.classList.remove(style.reveal);

        this.setState({
          isScrolledProject: false,
        });
      }
    }
  };
};

export const onScrollLanding = function() {
  const header = document.getElementById(sharedDefs.HEADER);
  const logo = document.getElementById(sharedDefs.HEADER_LOGO);
  const projects = document.getElementById(defs.PROJECT_WRAPPER);

  const currentPosition = window.scrollY;

  if (!header || !logo || !projects) {
    return;
  }

  if (currentPosition < (window.innerHeight * 2)) {
    logo.style.backgroundColor = null;
    logo.style.color = null;
  }

  if (currentPosition >= window.innerHeight) {
    header.classList.add(headerStyle.scrolledTwo);
  } else if (currentPosition >= (window.innerHeight - 120)) {
    header.classList.add(headerStyle.scrolled);
    header.classList.remove(headerStyle.scrolledTwo);
  } else if (currentPosition >= (window.innerHeight / 2)) {
    header.classList.remove(headerStyle.scrolled);
    header.classList.remove(headerStyle.scrolledTwo);
  } else {
    header.classList.remove(headerStyle.scrolled);
    header.classList.remove(headerStyle.scrolledTwo);
  }
};
