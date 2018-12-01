import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { ProjectType } from 'src/scripts/shared/defs';
import style from 'src/scripts/modules/app/style.module.css';

class ProjectRow extends React.Component {
  render() {
    const {
      onSetCurrentProject,
      project: {
        background,
        backgroundImg,
        backgroundImgClass = [],
        color,
        description,
        id,
        logoImg,
        logoImgClass = [],
        name,
        textClass = [],
        type,
      },
    } = this.props;

    return (
      <div
        className={style.project_row_wrapper}
        id={id}
        onClick={() => onSetCurrentProject(id)}
        style={{
          background,
          color,
        }}
      >
        <div className={style.project_row_container}>
          <div className={classNames(style.project_row_text_wrapper, ...textClass)}>
            <h1 className={style.project_row_h1}>
              {type}/{name}
            </h1>
            <p className={style.project_row_p}>
              {description}
            </p>
            <p className={style.project_row_p}>
              learn more
            </p>
          </div>
        </div>
        <img
          alt={`${name} background`}
          className={classNames(style.project_row_bg_img, ...backgroundImgClass)}
          src={backgroundImg}
        />
        <img
          alt={`${name} logo`}
          className={classNames(style.project_row_img, ...logoImgClass)}
          src={logoImg}
        />
      </div>
    );
  }
};

ProjectRow.propTypes = {
  onSetCurrentProject: PropTypes.func.isRequired,
  project: ProjectType.isRequired,
};

export default ProjectRow;
