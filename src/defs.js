import PropTypes from 'prop-types';

export const AMAZON = 'amazon';
export const NONE = 'none';

export const ProjectType = PropTypes.shape({
  align: PropTypes.oneOf(['left', 'right']).isRequired,
  id: PropTypes.oneOf([AMAZON, NONE]).isRequired,
  backgroundColor: PropTypes.string,
  backgroundImg: PropTypes.string,
  color: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
});

export const PROJECTS = [
  {
    align: 'left',
    id: AMAZON,
    backgroundColor: '#0fa0ea',
    backgroundImg: 'src/assets/affirm.jpg',
    color: 'rgba(15, 160, 234, 0.25)',
    name: 'Amazon',
    type: '/work',
  }
];
