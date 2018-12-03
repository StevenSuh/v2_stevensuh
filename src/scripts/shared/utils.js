import { MIN_DESKTOP_WIDTH } from './defs';

export const isDesktop = () => window.innerWidth >= MIN_DESKTOP_WIDTH;
