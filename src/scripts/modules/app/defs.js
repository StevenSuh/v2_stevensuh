import { isDesktop } from 'src/scripts/shared/utils';

export const INITIAL_DURATION = 500;

export const inputDefs = {
  ALPHABETS: 'alphabets',
  COLORS: 'colors',
};
export const inputList = {
  [inputDefs.ALPHABETS]: ['a', 'd', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'o', 'p', 't', 'x', 'y'],
  [inputDefs.COLORS]: ['#3cba54', '#f4c20d', '#db3236', '#4885ed'],
};

export const FILTER_ALL = '/all';
export const FILTER_PROJECT = '/project';
export const FILTER_WORK = '/work';

export const LANDING_PAGE = 'landing-page';
export const MAIN_CONTAINER = 'main-container';
export const MAIN_LEFT = 'main-left';
export const MAIN_RIGHT = 'main-right';
export const MAIN_TEXT = 'main-text';
export const MAIN_WRAPPER = 'main-wrapper';
export const PROJECT_CONTAINER = 'project-container';
export const PROJECT_WRAPPER = 'project-wrapper';
export const SCROLL_DOWN = 'scroll-down';

export const getTextToAnimate = () => isDesktop() ? 'steven.suh' : 'steven';

export const MAIN_WRAPPER_PADDING_WIDTH = 40;
export const BLINK_DURATION = 1000;
export const TRANSITION_DURATION = 500;
export const PER_DURATION = 500;
export const COLOR_DURATION = 100;
export const TEXT_DURATION = 50;
export const DECREMENT = 10;
