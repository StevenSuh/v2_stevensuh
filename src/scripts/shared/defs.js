import PropTypes from 'prop-types';

import style from './style.module.css';

export const HEADER = 'header-element';

export const WIDTH_TO_HEIGHT_RATIO = 2.75;

export const AFFIRM = 'affirm';
export const AMAZON = 'amazon';
export const NONE = 'none';

export const ProjectType = PropTypes.shape({
  id: PropTypes.oneOf([AFFIRM, AMAZON, NONE]).isRequired,
  background: PropTypes.string,
  backgroundImg: PropTypes.string,
  classImg: PropTypes.arrayOf(PropTypes.string),
  color: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
});

export const PROJECTS = [
  {
    background: 'linear-gradient(to bottom right, rgba(15, 160, 234, 0.05), rgba(15, 160, 234, 0.2))',
    backgroundImg: 'assets/affirm.png',
    classImg: [style.affirm_img],
    color: '#0fa0ea',
    id: AFFIRM,
    name: 'Affirm',
    type: '/work',
  },
  {
    background: 'linear-gradient(to bottom right, #232F3E, #131A22)',
    backgroundImg: 'assets/amazon.png',
    color: '#FF9900',
    id: AMAZON,
    name: 'Amazon',
    type: '/work',
  },
];
