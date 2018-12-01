import PropTypes from 'prop-types';

import style from './style.module.css';

export const CURSOR = 'cursor-element';
export const HEADER = 'header-element';
export const HEADER_BG = 'header-bg-element';
export const HEADER_LOGO = 'header-logo-element';
export const HEADER_PROJECT = 'header-project-element';
export const HEADER_PROJECT_TEXT = 'header-project-text-element';
export const ACTIVE_PROJECT = 'project-active';

export const WIDTH_TO_HEIGHT_RATIO = 2.75;

export const ABOUT = 'project-about';
export const AFFIRM = 'project-affirm';
export const AMAZON = 'project-amazon';
export const NONE = 'project-none';

export const ProjectType = PropTypes.shape({
  background: PropTypes.string.isRequired,
  backgroundImg: PropTypes.string.isRequired,
  backgroundImgClass: PropTypes.arrayOf(PropTypes.string),
  color: PropTypes.string,
  description: PropTypes.string.isRequired,
  id: PropTypes.oneOf([AFFIRM, AMAZON, NONE]).isRequired,
  logoImg: PropTypes.string.isRequired,
  logoImgClass: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string.isRequired,
  textClass: PropTypes.arrayOf(PropTypes.string),
  type: PropTypes.string.isRequired,
});

export const PROJECTS = [
  {
    background: 'linear-gradient(to bottom right, #f4fafe, #d0ecfb)',
    backgroundImg: 'assets/affirm-bg.png',
    backgroundImgClass: [style.affirm_bg_img],
    description: 'I worked in Retail engineering at Affirm, where I learned and practiced product engineering.',
    id: AFFIRM,
    logoImg: 'assets/affirm.svg',
    logoImgClass: [style.affirm_img],
    name: 'Affirm',
    textClass: [style.affirm_text],
    type: '/work',
  },
  {
    background: 'linear-gradient(to bottom right, #232F3E, #131A22)',
    backgroundImg: 'assets/amazon-bg.png',
    backgroundImgClass: [style.amazon_bg_img],
    color: '#FFFFFF',
    description: 'I worked in Hardlines Customer Experience, where I learned a lot of product engineering at a big scale.',
    id: AMAZON,
    logoImg: 'assets/amazon.png',
    logoImgClass: [style.amazon_img],
    name: 'Amazon',
    type: '/work',
  },
];
