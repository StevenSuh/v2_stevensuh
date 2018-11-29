import * as defs from './defs';
import style from './style.module.css';

const changeInputFactory = (type, el) => {
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

const reset = (list) => {
  list.forEach(item => {
    item.classList.add(style.hidden);
    item.classList.remove(style.slow_color);
  });
};

export const startAnimation = () => {
  const container = document.getElementById(defs.MAIN_CONTAINER);
  const main = document.getElementById(defs.MAIN_TEXT);
  const wrapper = document.getElementById(defs.MAIN_WRAPPER);

  container.classList.add(style.blink);
  wrapper.style.height = main.clientHeight + 'px';

  const headerList = main.children;
  reset(headerList);

  setTimeout(() => wrapper.style.width = expectedWidth + 'px', blink);
  setTimeout(changeHeader, blink + transition + duration, 0);
};
