import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { onScrollProjectFactory } from 'src/scripts/modules/app/effects';
import { ProjectType } from 'src/scripts/shared/defs';
import sharedStyle from 'src/scripts/shared/style.module.css';
import style from 'src/scripts/modules/app/style.module.css';

class ProjectRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isScrolledProject: false,
    };

    const { project } = this.props;
    this.onScrollProject = onScrollProjectFactory(project).bind(this);
  }

  componentWillMount() {
    const { project } = this.props;
    const { background, id } = project;
    document.documentElement.style.setProperty(`--${id}-bg`, background);

    window.addEventListener('scroll', this.onScrollProject);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScrollProject);
  }

  render() {
    const {
      onSetCurrentProject,
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
          onClick={() => onSetCurrentProject(id)}
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
        <br />
        <div className={classNames(style.project_row_container)}>
          <div
            className={classNames(style.project_row_text_wrapper, ...textClass)}
            id={`${id}-text`}
          >
            <p className={style.project_row_p}>
              {type}/{name}
            </p>
            <h1 className={style.project_row_h1}>
              {description}
            </h1>
          </div>
        </div>
      </div>
    );
  }
};

ProjectRow.propTypes = {
  onSetCurrentProject: PropTypes.func.isRequired,
  project: ProjectType.isRequired,
};

export default ProjectRow;
