import PropTypes from 'prop-types';

import style from './style.module.css';

export const CURSOR = 'cursor-element';
export const HEADER = 'header-element';
export const HEADER_BG = 'header-bg-element';
export const HEADER_LOGO = 'header-logo-element';
export const HEADER_PROJECT = 'header-project-element';
export const HEADER_PROJECT_TEXT = 'header-project-text-element';
export const ACTIVE_PROJECT = 'project-active';

export const MIN_DESKTOP_WIDTH = 864;

export const AFFIRM = 'work-affirm';
export const AMAZON = 'work-amazon';
export const FOODGO = 'project-foodgo';
export const GOLINKS = 'work-golinks';
export const NONE = 'project-none';

export const ProjectType = PropTypes.shape({
  background: PropTypes.string.isRequired,
  backgroundImg: PropTypes.string,
  backgroundImgClass: PropTypes.arrayOf(PropTypes.string),
  boxShadow: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.oneOf([AFFIRM, AMAZON, FOODGO, GOLINKS, NONE]).isRequired,
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
    boxShadow: '0 0 20px 2px rgba(15, 160, 234, 0.1)',
    description: 'Retail Engineering',
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
    boxShadow: '0 0 20px 2px rgba(255, 170, 0, 0.4)',
    description: 'Hardlines Customer Experience',
    id: AMAZON,
    logoImg: 'assets/amazon.png',
    logoImgClass: [style.amazon_img],
    name: 'Amazon',
    type: '/work',
  },
  {
    background: 'linear-gradient(154deg, #008fe2 0%, #00b29c 100%)',
    backgroundImgClass: [style.golink_bg_img],
    boxShadow: '0 0 20px 2px rgba(0, 178, 156, 0.4)',
    description: 'Productivity SaaS App',
    id: GOLINKS,
    logoImg: 'assets/golinks.png',
    logoImgClass: [style.golinks_img],
    name: 'GoLinks',
    type: '/work',
  },
  {
    background: 'rgb(255, 138, 128)',
    backgroundImgClass: [style.foodgo_bg_img],
    boxShadow: '0 0 20px 2px rgba(255, 138, 128, 0.4)',
    description: 'Restaurant Deciding App',
    id: FOODGO,
    logoImg: 'assets/foodgo.png',
    logoImgClass: [style.foodgo_img],
    name: 'foodgo',
    type: '/project',
  },
];
