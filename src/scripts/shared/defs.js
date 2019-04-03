import PropTypes from 'prop-types';

import appStyle from 'src/scripts/modules/app/style.module.css';
import detailsStyle from 'src/scripts/modules/projectDetails/style.module.css';
import style from './style.module.css';

import {
  BLOG,
  // BLOG_ALL,
  TYPE_BLOG,
} from './blogDefs';

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

export const VINEGAR = 'project-vinegar';
export const VINEGAR_NAME = 'vinegar';

export const NONE = 'project-none';

export const TYPE_PROJECT = '/project';
export const TYPE_WORK = '/work';
export const TYPES = [TYPE_BLOG, TYPE_PROJECT, TYPE_WORK];

export const ProjectType = PropTypes.shape({
  background: PropTypes.string.isRequired,
  backgroundImg: PropTypes.string,
  backgroundImgClass: PropTypes.arrayOf(PropTypes.string),
  backgroundImgMobile: PropTypes.string,
  description: PropTypes.string.isRequired,
  id: PropTypes.oneOf([AFFIRM, AMAZON, FOODGO, GOLINKS, ONCAREER, VINEGAR, BLOG, NONE]).isRequired,
  logoImg: PropTypes.string.isRequired,
  logoImgClass: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string.isRequired,
  textClass: PropTypes.arrayOf(PropTypes.string),
  type: PropTypes.string.isRequired,
});

export const PROJECTS = [
  {
    background: 'rgb(255, 248, 248)',
    backgroundImg: '/assets/vinegar-bg.png',
    backgroundImgClass: [appStyle.vinegar_bg_img],
    backgroundImgMobile: '/assets/vinegar-bg-mobile.png',
    description: 'Collaborative Note Taking App',
    id: VINEGAR,
    logoImg: '/assets/vinegar.png',
    logoImgClass: [appStyle.vinegar_img],
    name: VINEGAR_NAME,
    type: TYPE_PROJECT,
  },
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
  // {
  //   background: '#f6f6f6',
  //   description: 'Blog Posts',
  //   id: BLOG,
  //   name: BLOG_ALL,
  //   type: TYPE_BLOG,
  // },
];

export const BodyElementType = PropTypes.shape({
  classes: PropTypes.arrayOf(PropTypes.string),
  classesMobile: PropTypes.arrayOf(PropTypes.string),
  content: PropTypes.string,
  href: PropTypes.string,
  src: PropTypes.string,
  srcMobile: PropTypes.string,
  tagName: PropTypes.oneOf(['a', 'h2', 'img', 'li', 'Link', 'p', 'span', 'ul']).isRequired,
});

BodyElementType.defaultProps = {
  classes: [],
  classesMobile: [],
  content: null,
  href: null,
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
  pathname: PropTypes.string.isRequired,
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
  [VINEGAR_NAME]: {
    background: {
      classes: [],
      style: {
        background: 'rgb(255, 248, 248)',
      },
    },
    bodyElements: [
      {
        classes: [detailsStyle.project_detail_sub_p, detailsStyle.project_detail_sub_p_intro],
        classesMobile: [detailsStyle.project_detail_sub_p, detailsStyle.project_detail_sub_p_intro],
        content: '03/2019',
        tagName: 'p',
      },
      {
        classes: [detailsStyle.project_detail_a, style.hover],
        classesMobile: [detailsStyle.project_detail_a, style.hover],
        content: 'joinvinegar.com',
        href: 'http://joinvinegar.com',
        tagName: 'a',
      },
      {
        classes: [detailsStyle.project_detail_p],
        classesMobile: [detailsStyle.project_detail_p],
        content: 'Vinegar is a real-time, colllaborative note taking app that allows students to take notes in '
          + 'a more interactive way. The app allows real-time document editing and chat system. Vinegar also '
          + 'automatically assigns students to take notes at certain time periods, allowing others to sit back '
          + 'and relax until their turn comes around.',
        tagName: 'p',
      },
      {
        classes: [detailsStyle.project_detail_img],
        classesMobile: [detailsStyle.project_detail_img, detailsStyle.vertical],
        src: '/assets/vinegar-screenshot-1.png',
        srcMobile: '/assets/vinegar-screenshot-1-mobile.png',
        tagName: 'img',
      },
      {
        classes: [detailsStyle.project_detail_p],
        classesMobile: [detailsStyle.project_detail_p],
        content: 'My motivation behind working on Vinegar was that I wanted to practice building more software '
          + '(learning best practices on whatever technology I use, attempting to write more meaningful code, etc.). '
          + 'Along with that motivation, I just wanted to build a cool, fun app that I would like to use myself!',
        tagName: 'p',
      },
      {
        classes: [detailsStyle.project_detail_img],
        classesMobile: [detailsStyle.project_detail_img, detailsStyle.vertical],
        src: '/assets/vinegar-screenshot-2.png',
        srcMobile: '/assets/vinegar-screenshot-2-mobile.png',
        tagName: 'img',
      },
      {
        classes: [detailsStyle.project_detail_p],
        classesMobile: [detailsStyle.project_detail_p],
        content: 'Because I wanted to focus more on the product-side of things, I placed a lot of emphasis on '
          + 'ideas such as building better user/perceived experience, structuring code around product context, and '
          + 'learning more tools and ways to build features for users.',
        tagName: 'p',
      },
      {
        classes: [detailsStyle.project_detail_img],
        classesMobile: [detailsStyle.project_detail_img, detailsStyle.vertical],
        src: '/assets/vinegar-screenshot-3.png',
        srcMobile: '/assets/vinegar-screenshot-3-mobile.png',
        tagName: 'img',
      },
      {
        classes: [detailsStyle.project_detail_img],
        classesMobile: [detailsStyle.project_detail_img, detailsStyle.vertical],
        src: '/assets/vinegar-screenshot-4.png',
        srcMobile: '/assets/vinegar-screenshot-4-mobile.png',
        tagName: 'img',
      },
      {
        classes: [detailsStyle.project_detail_p, detailsStyle.project_detail_list],
        classesMobile: [detailsStyle.project_detail_p, detailsStyle.project_detail_list],
        content: 'Here is some of what I learned:',
        tagName: 'p',
      },
      {
        classes: [detailsStyle.project_detail_p, detailsStyle.project_detail_list_item,
          detailsStyle.first],
        classesMobile: [detailsStyle.project_detail_p, detailsStyle.project_detail_list_item,
          detailsStyle.first],
        content: 'Knowledge over new tools + technologies + product domain',
        tagName: 'p',
      },
      {
        classes: [detailsStyle.project_detail_p, detailsStyle.project_detail_list_item],
        classesMobile: [detailsStyle.project_detail_p, detailsStyle.project_detail_list_item],
        content: 'Deployed the app with Docker + Kubernetes on GCP',
        tagName: 'p',
      },
      {
        classes: [detailsStyle.project_detail_p, detailsStyle.project_detail_list_item,
          detailsStyle.last],
        classesMobile: [detailsStyle.project_detail_p, detailsStyle.project_detail_list_item,
          detailsStyle.last],
        content: 'In a way, built a distributed websocket system and a microservice',
        tagName: 'p',
      },
      {
        classes: [detailsStyle.project_detail_p, detailsStyle.project_detail_list],
        classesMobile: [detailsStyle.project_detail_p, detailsStyle.project_detail_list],
        content: 'Here is what I hoped to have done:',
        tagName: 'p',
      },
      {
        classes: [detailsStyle.project_detail_p, detailsStyle.project_detail_list_item,
          detailsStyle.first],
        classesMobile: [detailsStyle.project_detail_p, detailsStyle.project_detail_list_item,
          detailsStyle.first],
        content: 'Choose better stack - I stuck with Node.js to convert document/html to pdf. To do so, I '
          + 'had to use puppeteer (which downloads the entire chromium). Better choice might have been to '
          + 'to use a python library.',
        tagName: 'p',
      },
      {
        classes: [detailsStyle.project_detail_p, detailsStyle.project_detail_list_item],
        classesMobile: [detailsStyle.project_detail_p, detailsStyle.project_detail_list_item],
        content: 'Testing - unit testing, integration testing, visual regression/UI testing, etc. Any testing '
          + 'would have been a good learning/practice.',
        tagName: 'p',
      },
      {
        classes: [detailsStyle.project_detail_p, detailsStyle.project_detail_list_item,
          detailsStyle.last],
        classesMobile: [detailsStyle.project_detail_p, detailsStyle.project_detail_list_item,
          detailsStyle.last],
        content: 'Better practices - ironically, I skipped couple processes (setting up CI/CD, db migrations, more) '
          + 'because I was the only one working on Vinegar.',
        tagName: 'p',
      },
      {
        classes: [detailsStyle.project_detail_img],
        classesMobile: [detailsStyle.project_detail_img, detailsStyle.vertical],
        src: '/assets/vinegar-screenshot-5.png',
        srcMobile: '/assets/vinegar-screenshot-5-mobile.png',
        tagName: 'img',
      },
    ],
    headerStyle: {
      background: 'rgb(248, 131, 121)',
    },
    logo: {
      classes: [detailsStyle.vinegar_detail_img],
      src: '/assets/vinegar.png',
    },
    name: 'vinegar',
    pathname: '/project/vinegar',
    theme: '#f88379',
    type: TYPE_PROJECT,
  },
  [AFFIRM_NAME]: {
    background: {
      classes: [],
      style: {
        background: 'linear-gradient(to bottom right, #f4fafe, #d0ecfb)',
      },
    },
    bodyElements: [
      {
        classes: [detailsStyle.project_detail_sub_p, detailsStyle.project_detail_sub_p_intro],
        classesMobile: [detailsStyle.project_detail_sub_p, detailsStyle.project_detail_sub_p_intro],
        content: '09/2018 - 12/2018\nSan Francisco, CA',
        tagName: 'p',
      },
      {
        classes: [detailsStyle.project_detail_p],
        classesMobile: [detailsStyle.project_detail_p],
        content: 'In the fall of 2018, I got to work as a Software Engineer intern at Affirm in San Francisco. '
          + 'For the internship, I worked in Retail Engineering, which is an organization focused on building revenue '
          + 'generating products for Affirm\'s business parters and consumers.',
        tagName: 'p',
      },
      {
        classes: [detailsStyle.project_detail_p],
        classesMobile: [detailsStyle.project_detail_p],
        content: 'During my time at Affirm, I had the chance to start on merchant self-service initiative, which required '
          + 'development on two different products: merchant onboarding and merchant dashboard. As I iterated upon these '
          + 'products, I got to collaborate with designers, product managers and engineers from other organizations.',
        tagName: 'p',
      },
      {
        classes: [detailsStyle.project_detail_img, detailsStyle.imgCaption],
        classesMobile: [detailsStyle.project_detail_img, detailsStyle.imgCaption,
          detailsStyle.vertical],
        src: '/assets/affirm-screenshot-1.png',
        srcMobile: '/assets/affirm-screenshot-1-mobile.png',
        tagName: 'img',
      },
      {
        classes: [detailsStyle.project_detail_sub_p, detailsStyle.project_detail_caption],
        classesMobile: [detailsStyle.project_detail_sub_p, detailsStyle.project_detail_caption],
        content: 'Merchant onboarding reachable from affirm.com/business.',
        tagName: 'span',
      },
      {
        classes: [detailsStyle.project_detail_img, detailsStyle.imgCaption],
        classesMobile: [detailsStyle.project_detail_img, detailsStyle.imgCaption],
        src: '/assets/affirm-screenshot-2.png',
        srcMobile: '/assets/affirm-screenshot-2.png',
        tagName: 'img',
      },
      {
        classes: [detailsStyle.project_detail_sub_p, detailsStyle.project_detail_caption],
        classesMobile: [detailsStyle.project_detail_sub_p, detailsStyle.project_detail_caption],
        content: 'Merchant dashboard, which you can access after signing up.',
        tagName: 'span',
      },
      {
        classes: [detailsStyle.project_detail_p],
        classesMobile: [detailsStyle.project_detail_p],
        content: 'While picking up best practices and tooling used at Affirm, I was also able to gain a lot of business context '
          + 'behind these products, allowing me to develop more quicker and confidently. Most importantly, I had ownership over these '
          + 'products by the end of the internship.',
        tagName: 'p',
      },
      {
        classes: [detailsStyle.project_detail_p],
        classesMobile: [detailsStyle.project_detail_p],
        content: 'In conclusion, I was able to make significant contributions and work on the merchant self-service initiative, '
          + 'which is expected to bring on thousands of merchants to Affirm\'s platform in 2019.',
        tagName: 'p',
      },
      {
        classes: [detailsStyle.project_detail_img, detailsStyle.imgCaption, detailsStyle.vertical],
        classesMobile: [detailsStyle.project_detail_img, detailsStyle.imgCaption,
          detailsStyle.vertical],
        src: '/assets/affirm-pic-1.jpg',
        srcMobile: '/assets/affirm-pic-1.jpg',
        tagName: 'img',
      },
      {
        classes: [detailsStyle.project_detail_sub_p, detailsStyle.project_detail_caption],
        classesMobile: [detailsStyle.project_detail_sub_p, detailsStyle.project_detail_caption],
        content: 'My favorite spot in the office.',
        tagName: 'span',
      },
      {
        classes: [detailsStyle.project_detail_img, detailsStyle.imgCaption, detailsStyle.vertical],
        classesMobile: [detailsStyle.project_detail_img, detailsStyle.imgCaption,
          detailsStyle.vertical],
        src: '/assets/affirm-pic-2.jpg',
        srcMobile: '/assets/affirm-pic-2.jpg',
        tagName: 'img',
      },
      {
        classes: [detailsStyle.project_detail_sub_p, detailsStyle.project_detail_caption],
        classesMobile: [detailsStyle.project_detail_sub_p, detailsStyle.project_detail_caption],
        content: 'Affirm swag!!',
        tagName: 'span',
      },
      {
        classes: [detailsStyle.project_detail_h2, detailsStyle.project_detail_list],
        classesMobile: [detailsStyle.project_detail_h2, detailsStyle.project_detail_list],
        content: 'Important takeaways include:',
        tagName: 'h2',
      },
      {
        classes: [detailsStyle.project_detail_p, detailsStyle.project_detail_list_item,
          detailsStyle.first],
        classesMobile: [detailsStyle.project_detail_p, detailsStyle.project_detail_list_item,
          detailsStyle.first],
        content: 'Knowledge over various tooling + framework per use case',
        tagName: 'p',
      },
      {
        classes: [detailsStyle.project_detail_p, detailsStyle.project_detail_list_item],
        classesMobile: [detailsStyle.project_detail_p, detailsStyle.project_detail_list_item],
        content: 'Business context-driven software engineering',
        tagName: 'p',
      },
      {
        classes: [detailsStyle.project_detail_p, detailsStyle.project_detail_list_item,
          detailsStyle.last],
        classesMobile: [detailsStyle.project_detail_p, detailsStyle.project_detail_list_item,
          detailsStyle.last],
        content: 'Product execution at rapidly growing environment',
        tagName: 'p',
      },
      {
        classes: [detailsStyle.project_detail_img, detailsStyle.imgCaption],
        classesMobile: [detailsStyle.project_detail_img, detailsStyle.imgCaption],
        src: '/assets/affirm-pic-3.jpg',
        srcMobile: '/assets/affirm-pic-3.jpg',
        tagName: 'img',
      },
      {
        classes: [detailsStyle.project_detail_sub_p, detailsStyle.project_detail_caption],
        classesMobile: [detailsStyle.project_detail_sub_p, detailsStyle.project_detail_caption],
        content: '5:32pm, San Francisco.',
        tagName: 'span',
      },
    ],
    headerStyle: {
      background: '#0FA0EA',
    },
    logo: {
      classes: [detailsStyle.affirm_detail_img],
      src: '/assets/affirm.svg',
    },
    name: 'Affirm',
    pathname: '/work/affirm',
    theme: '#0FA0EA',
    type: TYPE_WORK,
  },
  [AMAZON_NAME]: {
    background: {
      classes: [],
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
        content: 'In the summer of 2018, I had the opportunity to work as a Software Development Engineer intern at Amazon. '
          + 'During my internship, I worked in Hardlines Customer Experience, which focuses on building customer-centric '
          + 'products and features within Amazon.com.',
        tagName: 'p',
      },
      {
        classes: [detailsStyle.project_detail_img, detailsStyle.imgCaption],
        classesMobile: [detailsStyle.project_detail_img, detailsStyle.imgCaption,
          detailsStyle.vertical],
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
        classesMobile: [detailsStyle.project_detail_img, detailsStyle.imgCaption,
          detailsStyle.vertical],
        src: '/assets/amazon-screenshot-2.png',
        srcMobile: '/assets/amazon-screenshot-2-mobile.png',
        tagName: 'img',
      },
      {
        classes: [detailsStyle.project_detail_sub_p, detailsStyle.project_detail_caption],
        classesMobile: [detailsStyle.project_detail_sub_p, detailsStyle.project_detail_caption],
        content: 'Save or Upgrade widget on detail page.',
        tagName: 'span',
      },
      {
        classes: [detailsStyle.project_detail_p],
        classesMobile: [detailsStyle.project_detail_p],
        content: 'As part of a product-centric team, I got to learn a lot of product-driven software engineering. During my time at Amazon, '
          + 'I worked on the widget above, which operated as a microservice architecture. While learning the architecture + business context of '
          + 'the widget, I also got to learn the advanced tooling + frameworks needed to iterate on the widget.',
        tagName: 'p',
      },
      {
        classes: [detailsStyle.project_detail_p],
        classesMobile: [detailsStyle.project_detail_p],
        content: 'More specific to my work, I had the chance to dive deeper into its selection algorithm, which I got to '
          + 'modify a lot to improve its performance and add additional features planned on the roadmap. By the end of the internship, '
          + 'with thorough A/B testing, I was able to ship my work, which is projected to output millions in revenue yearly.',
        tagName: 'p',
      },
      {
        classes: [detailsStyle.project_detail_img, detailsStyle.imgCaption, detailsStyle.vertical],
        classesMobile: [detailsStyle.project_detail_img, detailsStyle.imgCaption,
          detailsStyle.vertical],
        src: '/assets/amazon-pic-3.jpg',
        srcMobile: '/assets/amazon-pic-3.jpg',
        tagName: 'img',
      },
      {
        classes: [detailsStyle.project_detail_sub_p, detailsStyle.project_detail_caption],
        classesMobile: [detailsStyle.project_detail_sub_p, detailsStyle.project_detail_caption],
        content: 'Not so sunny picture of dog park.',
        tagName: 'span',
      },
      {
        classes: [detailsStyle.project_detail_img, detailsStyle.imgCaption, detailsStyle.vertical],
        classesMobile: [detailsStyle.project_detail_img, detailsStyle.imgCaption,
          detailsStyle.vertical],
        src: '/assets/amazon-pic-1.jpg',
        srcMobile: '/assets/amazon-pic-1.jpg',
        tagName: 'img',
      },
      {
        classes: [detailsStyle.project_detail_sub_p, detailsStyle.project_detail_caption],
        classesMobile: [detailsStyle.project_detail_sub_p, detailsStyle.project_detail_caption],
        content: 'My badge at Amazon.',
        tagName: 'span',
      },
      {
        classes: [detailsStyle.project_detail_h2, detailsStyle.project_detail_list],
        classesMobile: [detailsStyle.project_detail_h2, detailsStyle.project_detail_list],
        content: 'Some key takeaways:',
        tagName: 'h2',
      },
      {
        classes: [detailsStyle.project_detail_p, detailsStyle.project_detail_list_item,
          detailsStyle.first],
        classesMobile: [detailsStyle.project_detail_p, detailsStyle.project_detail_list_item,
          detailsStyle.first],
        content: 'How numerous organizations collaborate and function',
        tagName: 'p',
      },
      {
        classes: [detailsStyle.project_detail_p, detailsStyle.project_detail_list_item],
        classesMobile: [detailsStyle.project_detail_p, detailsStyle.project_detail_list_item],
        content: 'Importance behind business context in building a product',
        tagName: 'p',
      },
      {
        classes: [detailsStyle.project_detail_p, detailsStyle.project_detail_list_item,
          detailsStyle.last],
        classesMobile: [detailsStyle.project_detail_p, detailsStyle.project_detail_list_item,
          detailsStyle.last],
        content: 'Overall development knowledge (software testing, CI/CD, A/B testing, ...)',
        tagName: 'p',
      },
      {
        classes: [detailsStyle.project_detail_img, detailsStyle.imgCaption],
        classesMobile: [detailsStyle.project_detail_img, detailsStyle.imgCaption],
        src: '/assets/amazon-pic-2.jpg',
        srcMobile: '/assets/amazon-pic-2.jpg',
        tagName: 'img',
      },
      {
        classes: [detailsStyle.project_detail_sub_p, detailsStyle.project_detail_caption],
        classesMobile: [detailsStyle.project_detail_sub_p, detailsStyle.project_detail_caption],
        content: 'Martha Lake in the north of Seattle.',
        tagName: 'span',
      },
    ],
    headerStyle: {
      background: 'linear-gradient(to bottom right, #232F3E, #131A22)',
    },
    logo: {
      classes: [detailsStyle.amazon_detail_img],
      src: '/assets/amazon.png',
    },
    name: 'Amazon',
    pathname: '/work/amazon',
    theme: '#131A22',
    type: TYPE_WORK,
  },
  [GOLINKS_NAME]: {
    background: {
      classes: [],
      style: {
        background: 'linear-gradient(154deg, #008fe2 0%, #00b29c 100%)',
      },
    },
    bodyElements: [
      {
        classes: [detailsStyle.project_detail_sub_p, detailsStyle.project_detail_sub_p_intro],
        classesMobile: [detailsStyle.project_detail_sub_p, detailsStyle.project_detail_sub_p_intro],
        content: '03/2018 - 08/2018',
        tagName: 'p',
      },
      {
        classes: [detailsStyle.project_detail_p],
        classesMobile: [detailsStyle.project_detail_p],
        content: 'At GoLinks, I worked as a Software Engineer intern. GoLinks is a productivity SaaS product that provides '
          + 'secure, enterprise-grade, short url go/links only accessible by groups. During my time at GoLinks, I had the freedom '
          + 'to explore and work on every part of the product and startup.',
        tagName: 'p',
      },
      {
        classes: [detailsStyle.project_detail_p],
        classesMobile: [detailsStyle.project_detail_p],
        content: 'I got to work on numerous parts of the app, including unsubscribe feature, search history, front-end redesigns '
          + 'interactive navigation menu, and more. While working on the app, I also got an exposure to best software development '
          + 'practices. At GoLinks, I had the experience of learning the process of starting a company and receiving a great mentorship.',
        tagName: 'p',
      },
      {
        classes: [detailsStyle.project_detail_img, detailsStyle.imgCaption],
        classesMobile: [detailsStyle.project_detail_img, detailsStyle.imgCaption,
          detailsStyle.vertical],
        src: '/assets/golinks-screenshot-1.png',
        srcMobile: '/assets/golinks-screenshot-1-mobile.png',
        tagName: 'img',
      },
      {
        classes: [detailsStyle.project_detail_sub_p, detailsStyle.project_detail_caption],
        classesMobile: [detailsStyle.project_detail_sub_p, detailsStyle.project_detail_caption],
        content: 'GoLinks.io redesigned home page.',
        tagName: 'span',
      },
      {
        classes: [detailsStyle.project_detail_img, detailsStyle.imgCaption, detailsStyle.vertical],
        classesMobile: [detailsStyle.project_detail_img, detailsStyle.imgCaption,
          detailsStyle.vertical],
        src: '/assets/golinks-screenshot-2.png',
        srcMobile: '/assets/golinks-screenshot-2.png',
        tagName: 'img',
      },
      {
        classes: [detailsStyle.project_detail_sub_p, detailsStyle.project_detail_caption],
        classesMobile: [detailsStyle.project_detail_sub_p, detailsStyle.project_detail_caption],
        content: 'Interactive navigation menu!',
        tagName: 'span',
      },
    ],
    headerStyle: {
      background: 'linear-gradient(154deg, #009bcb 0%, #00a6b5 100%)',
    },
    logo: {
      classes: [detailsStyle.golinks_detail_img],
      src: '/assets/golinks.png',
    },
    name: 'GoLinks',
    pathname: '/work/golinks',
    theme: '#009bcb',
    type: TYPE_WORK,
  },
  [FOODGO_NAME]: {
    background: {
      classes: [],
      style: {
        background: 'rgb(255, 138, 128)',
      },
    },
    bodyElements: [
      {
        classes: [detailsStyle.project_detail_sub_p, detailsStyle.project_detail_sub_p_intro],
        classesMobile: [detailsStyle.project_detail_sub_p, detailsStyle.project_detail_sub_p_intro],
        content: '02/2018',
        tagName: 'p',
      },
      {
        classes: [detailsStyle.project_detail_a, style.hover],
        classesMobile: [detailsStyle.project_detail_a, style.hover],
        content: 'foodgo183.herokuapp.com',
        href: 'https://foodgo183.herokuapp.com',
        tagName: 'a',
      },
      {
        classes: [detailsStyle.project_detail_p],
        classesMobile: [detailsStyle.project_detail_p],
        content: 'foodgo is a web application built in Node + Firebase + React that interacts with Yelp API to help a group of '
          + 'people decide on a restaurant so no one is starving by the time they start eating!',
        tagName: 'p',
      },
      {
        classes: [detailsStyle.project_detail_img],
        classesMobile: [detailsStyle.project_detail_img, detailsStyle.vertical],
        src: '/assets/foodgo-screenshot-1.png',
        srcMobile: '/assets/foodgo-screenshot-1-mobile.png',
        tagName: 'img',
      },
      {
        classes: [detailsStyle.project_detail_img],
        classesMobile: [detailsStyle.project_detail_img, detailsStyle.vertical],
        src: '/assets/foodgo-screenshot-2.png',
        srcMobile: '/assets/foodgo-screenshot-2-mobile.png',
        tagName: 'img',
      },
      {
        classes: [detailsStyle.project_detail_img],
        classesMobile: [detailsStyle.project_detail_img, detailsStyle.vertical],
        src: '/assets/foodgo-screenshot-3.png',
        srcMobile: '/assets/foodgo-screenshot-3-mobile.png',
        tagName: 'img',
      },
      {
        classes: [detailsStyle.project_detail_img],
        classesMobile: [detailsStyle.project_detail_img, detailsStyle.vertical],
        src: '/assets/foodgo-screenshot-4.png',
        srcMobile: '/assets/foodgo-screenshot-4-mobile.png',
        tagName: 'img',
      },
      {
        classes: [detailsStyle.project_detail_img],
        classesMobile: [detailsStyle.project_detail_img, detailsStyle.vertical],
        src: '/assets/foodgo-screenshot-5.png',
        srcMobile: '/assets/foodgo-screenshot-5-mobile.png',
        tagName: 'img',
      },
    ],
    headerStyle: {
      background: 'rgb(255, 138, 128)',
    },
    logo: {
      classes: [detailsStyle.foodgo_detail_img],
      src: '/assets/foodgo.png',
    },
    name: 'foodgo',
    pathname: '/project/foodgo',
    theme: '#ff8a80',
    type: TYPE_PROJECT,
  },
  // [BLOG_ALL]: {
  //   background: {
  //     classes: [],
  //     style: {
  //       background: 'rgb(255, 138, 128)',
  //     },
  //   },
  //   bodyElements: [
  //     {
  //       classes: [detailsStyle.project_detail_sub_p, detailsStyle.project_detail_sub_p_intro],
  //       classesMobile: [detailsStyle.project_detail_sub_p, detailsStyle.project_detail_sub_p_intro],
  //       content: '02/2018',
  //       tagName: 'p',
  //     },
  //     {
  //       classes: [detailsStyle.project_detail_sub_p, detailsStyle.project_detail_sub_p_intro],
  //       classesMobile: [detailsStyle.project_detail_sub_p, detailsStyle.project_detail_sub_p_intro],
  //       content: '02/2018',
  //       tagName: 'p',
  //     },
  //     {
  //       classes: [detailsStyle.project_detail_sub_p, detailsStyle.project_detail_sub_p_intro],
  //       classesMobile: [detailsStyle.project_detail_sub_p, detailsStyle.project_detail_sub_p_intro],
  //       content: '02/2018',
  //       tagName: 'p',
  //     },
  //   ],
  //   headerStyle: {
  //     background: 'rgb(0, 0, 0)',
  //   },
  //   name: 'blog',
  //   pathname: '/blog/all',
  //   theme: '#000000',
  //   type: TYPE_BLOG,
  // },
};
