import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ProjectType } from 'src/scripts/shared/defs';
import sharedStyle from 'src/scripts/shared/style.module.css';
import style from 'src/scripts/modules/app/style.module.css';

class ProjectRow extends React.Component {
  componentWillMount() {
    const { project } = this.props;
    const { background, id } = project;
    document.documentElement.style.setProperty(`--${id}-bg`, background);
  }

  render() {
    const {
      project: {
        backgroundImg = null,
        backgroundImgClass = [],
        boxShadow,
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
        className={classNames(style.project_row_wrapper, style[id])}
        id={`${id}-wrapper`}
      >
        <Link
          className={classNames(style.project_row_img_container, sharedStyle.hover)}
          to={`${type}/${name}`}
        >
          {backgroundImg && (
            <div className={classNames(style.project_row_img_bg_container)}>
              <img
                alt={`${name} background`}
                className={classNames(style.project_row_bg_img, ...backgroundImgClass)}
                src={backgroundImg}
              />
            </div>
          )}
          <img
            alt={`${name} logo`}
            className={classNames(style.project_row_img, ...logoImgClass)}
            src={logoImg}
          />
          <div
            className={style.project_row_img_box_shadow}
            style={{ boxShadow }}
          />
        </Link>
        <div className={classNames(style.project_row_container)}>
          <div
            className={classNames(style.project_row_text_wrapper, ...textClass)}
            id={`${id}-text`}
          >
            <Link to={`${type}/${name}`}>
              <p className={style.project_row_p}>
                {type}/{name}
              </p>
            </Link>
            <Link to={`${type}/${name}`}>
              <h1 className={style.project_row_h1}>
                {description}
              </h1>
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

ProjectRow.propTypes = {
  project: ProjectType.isRequired,
};

export default ProjectRow;
