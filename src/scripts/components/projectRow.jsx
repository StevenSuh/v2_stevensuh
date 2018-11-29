import React from 'react';
import PropTypes from 'prop-types';

const ProjectRow = ({ name }) => (
  <div>Project row: {name}</div>
);

ProjectRow.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ProjectRow;
