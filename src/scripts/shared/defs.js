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

export const ONCAREER = 'project-oncareer';
export const ONCAREER_NAME = 'oncareer';

export const NONE = 'project-none';

export const TYPE_PROJECT = '/project';
export const TYPE_WORK = '/work';
export const TYPES = [TYPE_PROJECT, TYPE_WORK];

export const ProjectType = PropTypes.shape({
  background: PropTypes.string.isRequired,
  backgroundImg: PropTypes.string,
  backgroundImgClass: PropTypes.arrayOf(PropTypes.string),
  backgroundImgMobile: PropTypes.string,
  description: PropTypes.string.isRequired,
  id: PropTypes.oneOf([AFFIRM, AMAZON, FOODGO, GOLINKS, ONCAREER, NONE]).isRequired,
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
    description: 'Hardlines Customer Experience',
    id: AMAZON,
    logoImg: '/assets/amazon.png',
    logoImgClass: [appStyle.amazon_img],
    name: AMAZON_NAME,
    type: TYPE_WORK,
  },
  {
    background: 'linear-gradient(154deg, #008fe2 0%, #00b29c 100%)',
    description: 'Software Engineer',
    id: GOLINKS,
    logoImg: '/assets/golinks.png',
    logoImgClass: [appStyle.golinks_img],
    name: GOLINKS_NAME,
    type: TYPE_WORK,
  },
  {
    background: 'rgb(255, 138, 128)',
    description: 'Restaurant Voting App',
    id: FOODGO,
    logoImg: '/assets/foodgo.png',
    logoImgClass: [appStyle.foodgo_img],
    name: FOODGO_NAME,
    type: TYPE_PROJECT,
  },
];

export const BodyElementType = PropTypes.shape({
  classes: PropTypes.arrayOf(PropTypes.string),
  classesMobile: PropTypes.arrayOf(PropTypes.string),
  content: PropTypes.string,
  src: PropTypes.string,
  srcMobile: PropTypes.string,
  tagName: PropTypes.oneOf(['h2', 'img', 'li', 'p', 'span', 'ul']).isRequired,
});

BodyElementType.defaultProps = {
  classes: [],
  classesMobile: [],
  content: null,
  src: null,
  srcMobile: null,
};

export const ProjectDetailsType = PropTypes.shape({
  background: PropTypes.shape({
    classes: PropTypes.arrayOf(PropTypes.string),
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
    background: {
      classes: [detailsStyle.affirm_detail_bg],
      style: {
        background: 'linear-gradient(to bottom right, #f4fafe, #d0ecfb)',
      },
    },
    logo: {
      classes: [detailsStyle.affirm_detail_img],
      src: '/assets/affirm.png',
    },
    name: 'Affirm',
    type: TYPE_WORK,
  },
  [AMAZON_NAME]: {
    background: {
      classes: [detailsStyle.amazon_detail_bg],
      style: {
        background: 'linear-gradient(to bottom right, #232F3E, #131A22)',
      },
    },
    bodyElements: [
      {
        classes: [detailsStyle.project_detail_sub_p, detailsStyle.project_detail_sub_p_intro],
        classesMobile: [detailsStyle.project_detail_sub_p, detailsStyle.project_detail_sub_p_intro],
        content: '06/2018 - 09/2018\nSeattle, WA',
        tagName: 'p',
      },
      {
        classes: [detailsStyle.project_detail_p],
        classesMobile: [detailsStyle.project_detail_p],
        content: 'In 2018, I was given the opportunity to work as a Software Development Engineer intern at Amazon. ' +
          'During my internship, I worked in Hardlines Customer Experience, which focuses on building customer-centric ' +
          'products and features within Amazon.com.',
        tagName: 'p',
      },
      {
        classes: [detailsStyle.project_detail_img, detailsStyle.imgCaption],
        classesMobile: [detailsStyle.project_detail_img, detailsStyle.imgCaption, detailsStyle.vertical],
        src: '/assets/amazon-screenshot-1.png',
        srcMobile: '/assets/amazon-screenshot-1-mobile.png',
        tagName: 'img',
      },
      {
        classes: [detailsStyle.project_detail_sub_p, detailsStyle.project_detail_caption],
        classesMobile: [detailsStyle.project_detail_sub_p, detailsStyle.project_detail_caption],
        content: 'Amazon.com product detail page.',
        tagName: 'span',
      },
      {
        classes: [detailsStyle.project_detail_img, detailsStyle.imgCaption],
        classesMobile: [detailsStyle.project_detail_img, detailsStyle.imgCaption, detailsStyle.vertical],
        src: '/assets/amazon-screenshot-2.png',
        srcMobile: '/assets/amazon-screenshot-2-mobile.png',
        tagName: 'img',
      },
      {
        classes: [detailsStyle.project_detail_sub_p, detailsStyle.project_detail_caption],
        classesMobile: [detailsStyle.project_detail_sub_p, detailsStyle.project_detail_caption],
        content: 'Save or Upgrade widget that my team owned.',
        tagName: 'span',
      },
      {
        classes: [detailsStyle.project_detail_p],
        classesMobile: [detailsStyle.project_detail_p],
        content: 'As part of a product-centric team, I got to learn a lot of product-driven engineering. During my time at Amazon, ' +
          'I worked on the widget above, which operated on a stack of its own. Due to its stack, I learned the entire spectrum of ' +
          'the architecture of a product and the required tooling for execution.',
        tagName: 'p',
      },
      {
        classes: [detailsStyle.project_detail_p],
        classesMobile: [detailsStyle.project_detail_p],
        content: 'More specific to our team\'s widget, I had the chance to dive deeper into its selection flow, which I got to ' +
          'modify to improve various numbers and add numerous features. By the end of the internship, I was able to ship my work, ' +
          'which was projected to output millions in revenue yearly.',
        tagName: 'p',
      },
      {
        classes: [detailsStyle.project_detail_p, detailsStyle.project_detail_list],
        classesMobile: [detailsStyle.project_detail_p, detailsStyle.project_detail_list],
        content: 'Some of the most important takeaways:',
        tagName: 'p',
      },
      {
        classes: [detailsStyle.project_detail_p, detailsStyle.project_detail_list_item],
        classesMobile: [detailsStyle.project_detail_p, detailsStyle.project_detail_list_item],
        content: 'How numerous organizations collaborate to build a product',
        tagName: 'p',
      },
      {
        classes: [detailsStyle.project_detail_p, detailsStyle.project_detail_list_item],
        classesMobile: [detailsStyle.project_detail_p, detailsStyle.project_detail_list_item],
        content: 'Importance behind business context in development',
        tagName: 'p',
      },
      {
        classes: [detailsStyle.project_detail_p, detailsStyle.project_detail_list_item, detailsStyle.last],
        classesMobile: [detailsStyle.project_detail_p, detailsStyle.project_detail_list_item, detailsStyle.last],
        content: 'Overall development knowledge (testing, CI/CD, ...)',
        tagName: 'p',
      },
      {
        classes: [detailsStyle.project_detail_img, detailsStyle.imgCaption],
        classesMobile: [detailsStyle.project_detail_img, detailsStyle.imgCaption, detailsStyle.vertical],
        src: '/assets/amazon-screenshot-2.png',
        srcMobile: '/assets/amazon-screenshot-2-mobile.png',
        tagName: 'img',
      },
      {
        classes: [detailsStyle.project_detail_sub_p, detailsStyle.project_detail_caption],
        classesMobile: [detailsStyle.project_detail_sub_p, detailsStyle.project_detail_caption],
        content: 'Some caption.',
        tagName: 'span',
      },
    ],
    logo: {
      classes: [detailsStyle.amazon_detail_img],
      src: '/assets/amazon.png',
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
