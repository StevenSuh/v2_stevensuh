import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { ProjectType } from 'src/scripts/shared/defs';
import style from 'src/scripts/modules/app/style.module.css';
import sharedStyle from 'src/scripts/shared/style.module.css';

const ProjectRow = ({
  onSetCurrentProject,
  project: {
    background = null,
    backgroundImg = null,
    classImg = [],
    color = null,
    id,
    name,
    type,
  },
}) => (
  <div
    className={style.project_row_wrapper}
    onClick={() => onSetCurrentProject(id)}
    style={{
      background,
      color,
    }}
  >
    <div className={style.project_row_container}>
      <h1 className={style.project_row_h1}>
        Project: {name} + {type}
      </h1>
    </div>
    {backgroundImg && (
      <img
        alt={`${name}`}
        className={classNames(style.project_row_img, ...classImg)}
        src={backgroundImg}
      />
    )}
  </div>
);

ProjectRow.propTypes = {
  onSetCurrentProject: PropTypes.func.isRequired,
  project: ProjectType.isRequired,
};

export default ProjectRow;
