import React from 'react';
import PropTypes from 'prop-types';

import style from 'src/scripts/modules/app/style.module.css';

const ProjectRow = ({ onSetCurrentProject }) => (
  <div
    className={style.project_row_wrapper}
    onClick={() => onSetCurrentProject('hello')}
  >
    Project row
  </div>
);

ProjectRow.propTypes = {
  onSetCurrentProject: PropTypes.func.isRequired,
};

export default ProjectRow;
