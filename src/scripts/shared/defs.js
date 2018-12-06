import PropTypes from 'prop-types';

import style from './style.module.css';
import appStyle from 'src/scripts/modules/app/style.module.css';
import detailsStyle from 'src/scripts/modules/projectDetails/style.module.css';

export const CURSOR = 'cursor-element';
export const HEADER = 'header-element';
export const HEADER_BG = 'header-bg-element';
export const HEADER_LOGO = 'header-logo-element';
export const HEADER_PROJECT = 'header-project-element';
export const HEADER_PROJECT_TEXT = 'header-project-text-element';
export const ACTIVE_PROJECT = 'project-active';

export const MIN_DESKTOP_WIDTH = 864;

export const AFFIRM = 'work-affirm';
export const AFFIRM_NAME = 'affirm';

export const AMAZON = 'work-amazon';
export const AMAZON_NAME = 'amazon';

export const FOODGO = 'project-foodgo';
export const FOODGO_NAME = 'foodgo';

export const GOLINKS = 'work-golinks';
export const GOLINKS_NAME = 'golinks';

export const NONE = 'project-none';

export const TYPE_PROJECT = '/project';
export const TYPE_WORK = '/work';
export const TYPES = [TYPE_PROJECT, TYPE_WORK];

export const ProjectType = PropTypes.shape({
  background: PropTypes.string.isRequired,
  backgroundImg: PropTypes.string,
  backgroundImgClass: PropTypes.arrayOf(PropTypes.string),
  backgroundImgMobile: PropTypes.string,
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
    backgroundImg: '/assets/affirm-bg-details.png',
    backgroundImgClass: [appStyle.affirm_bg_img],
    backgroundImgMobile: '/assets/affirm-bg.png',
    boxShadow: '0 0 10px 1px rgba(15, 160, 234, 0.15)',
    description: 'Retail Engineering',
    id: AFFIRM,
    logoImg: '/assets/affirm.svg',
    logoImgClass: [appStyle.affirm_img],
    name: AFFIRM_NAME,
    textClass: [appStyle.affirm_text],
    type: TYPE_WORK,
  },
  {
    background: 'linear-gradient(to bottom right, #232F3E, #131A22)',
    backgroundImg: '/assets/amazon-bg-details.png',
    backgroundImgClass: [appStyle.amazon_bg_img],
    backgroundImgMobile: '/assets/amazon-bg.png',
    boxShadow: '0 0 10px 1px rgba(255, 170, 0, 0.4)',
    description: 'Hardlines Customer Experience',
    id: AMAZON,
    logoImg: '/assets/amazon.png',
    logoImgClass: [appStyle.amazon_img],
    name: AMAZON_NAME,
    type: TYPE_WORK,
  },
  {
    background: 'linear-gradient(154deg, #008fe2 0%, #00b29c 100%)',
    boxShadow: '0 0 10px 1px rgba(0, 178, 156, 0.4)',
    description: 'Software Engineer',
    id: GOLINKS,
    logoImg: '/assets/golinks.png',
    logoImgClass: [appStyle.golinks_img],
    name: GOLINKS_NAME,
    type: TYPE_WORK,
  },
  {
    background: 'rgb(255, 138, 128)',
    boxShadow: '0 0 10px 1px rgba(255, 138, 128, 0.4)',
    description: 'Restaurant Voting App',
    id: FOODGO,
    logoImg: '/assets/foodgo.png',
    logoImgClass: [appStyle.foodgo_img],
    name: FOODGO_NAME,
    type: TYPE_PROJECT,
  },
];

const BodyElementType = PropTypes.shape({
  classes: PropTypes.arrayOf(PropTypes.string),
  content: PropTypes.string,
  src: PropTypes.string,
  tagName: PropTypes.oneOf(['h2', 'img', 'p']).isRequired,
});

BodyElementType.defaultProps = {
  classes: [],
  content: null,
  src: null,
};

export const ProjectDetailsType = PropTypes.shape({
  background: PropTypes.shape({
    classes: PropTypes.arrayOf(PropTypes.string),
    img: PropTypes.shape({
      classes: PropTypes.arrayOf(PropTypes.string),
      src: PropTypes.string,
      srcMobile: PropTypes.string,
    }),
    style: PropTypes.objectOf(PropTypes.string).isRequired,
  }).isRequired,
  bodyElements: PropTypes.arrayOf(BodyElementType).isRequired,
  logo: PropTypes.shape({
    classes: PropTypes.arrayOf(PropTypes.string),
    src: PropTypes.string.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
});

ProjectDetailsType.defaultProps = {
  background: {
    classes: [],
    img: {
      classes: [],
      src: null,
      srcMobile: null,
    },
  },
  logo: {
    classes: [],
  },
};

export const PROJECT_DETAILS = {
  [AFFIRM_NAME]: {
    type: TYPE_WORK,
  },
  [AMAZON_NAME]: {
    background: {
      classes: [detailsStyle.amazon_detail_bg],
      img: {
        classes: [detailsStyle.amazon_detail_bg_img],
        src: '/assets/amazon-screenshot-1.png',
        srcMobile: '/assets/amazon-screenshot-1-mobile.png',
      },
      style: {
        background: 'linear-gradient(to bottom right, #232F3E, #131A22)',
      },
    },
    bodyElements: [
      {
        classes: [detailsStyle.project_detail_p],
        content: 'hello world',
        tagName: 'p',
      },
    ],
    logo: {
      classes: [detailsStyle.amazon_detail_img],
      src: '/assets/amazon-dark.svg',
    },
    name: 'Amazon',
    type: TYPE_WORK,
  },
  [FOODGO_NAME]: {
    type: TYPE_PROJECT,
  },
  [GOLINKS_NAME]: {
    type: TYPE_WORK,
  },
};
