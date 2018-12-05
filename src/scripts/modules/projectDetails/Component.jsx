import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import * as sharedDefs from 'src/scripts/shared/defs';
import sharedStyle from 'src/scripts/shared/style.module.css';
import style from './style.module.css';

const ProjectDetails = ({
  match: {
    params: { projectName },
    url,
  },
}) => {
  const projectDetails = sharedDefs.PROJECT_DETAILS;
  if (!projectDetails[projectName]) {
    return <Redirect to="/" />;
  }

  const project = projectDetails[projectName];
  if (!url.startsWith(project.type)) {
    return <Redirect to="/" />;
  }

  const {
    background,
    backgroundImg = null,
    backgroundImgClass = [],
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
        {backgroundImg && (
          <img
            alt={`${projectName} background`}
            className={classNames(style.project_detail_bg_img, ...backgroundImgClass)}
            src={backgroundImg}
          />
        )}
      </div>
      <div className={style.project_detail_bg}>
      </div>
    </div>
  );
};

export default ProjectDetails;
