import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { ProjectDetailsType } from 'src/scripts/shared/defs';
import sharedStyle from 'src/scripts/shared/style.module.css';
import style from './style.module.css';

const ProjectDetails = ({
  isDesktop,
  match: {
    params: { projectName },
    url,
  },
  project = null,
}) => {
  if (!project || !url.startsWith(project.type)) {
    return <Redirect to="/" />;
  }

  const {
    background,
    backgroundImg,
    backgroundImgClass,
    backgroundImgMobile,
    fontFamily,
    name,
  } = project;

  return (
    <div className={style.project_detail_wrapper}>
      <div
        className={classNames(style.project_detail_title_container)}
        style={{
          fontFamily,
        }}
      >
        <h1>
          {name}
        </h1>
      </div>
      <div
        className={style.project_detail_bg}
        style={{
          background,
        }}
      >
        {isDesktop ?
          backgroundImg && (
            <img
              alt={`${projectName} background`}
              className={classNames(style.project_detail_bg_img, ...backgroundImgClass)}
              src={backgroundImg}
            />
          ) :
          backgroundImgMobile && (
            <img
              alt={`${projectName} background`}
              className={classNames(style.project_detail_bg_img, ...backgroundImgClass)}
              src={backgroundImgMobile}
            />
          )
        }
      </div>
      <div className={style.project_detail_bg}>
      </div>
    </div>
  );
};

ProjectDetails.propTypes = {
  isDesktop: PropTypes.bool.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      projectName: PropTypes.string.isRequired,
    }).isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  project: ProjectDetailsType.isRequired,
};

export default ProjectDetails;
