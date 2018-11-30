import React from 'react';
import PropTypes from 'prop-types';

import { ProjectType } from 'src/defs';
import style from 'src/scripts/modules/app/style.module.css';

const ProjectRow = ({
  onSetCurrentProject,
  project: {
    name,
  },
}) => (
  <div
    className={style.project_row_wrapper}
    onClick={() => onSetCurrentProject('hello')}
  >
    Project row: {name}
  </div>
);

ProjectRow.propTypes = {
  onSetCurrentProject: PropTypes.func.isRequired,
  project: ProjectType.isRequired,
};

export default ProjectRow;
