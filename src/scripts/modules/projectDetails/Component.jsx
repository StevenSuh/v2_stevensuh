import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import * as defs from './defs';
import { ProjectDetailsType } from 'src/scripts/shared/defs';

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
    background: {
      classes: bgClasses,
      style: bgStyle,
    },
    bodyElements,
    logo: {
      classes: logoClasses,
      src: logoSrc,
    },
  } = project;

  return (
    <div className={style.project_detail_wrapper}>
      <div
        className={classNames(style.project_detail_bg, ...bgClasses)}
        id={defs.DETAILS_BG}
        style={bgStyle}
      >
        <img
          alt={`${projectName} logo`}
          className={classNames(style.project_detail_logo, ...logoClasses)}
          src={logoSrc}
        />
      </div>
      <div className={style.project_detail_body}>
        {bodyElements.map(
          ({
            classes,
            classesMobile,
            content,
            src,
            srcMobile,
            tagName: $TagName,
          }, index) => (
            <$TagName
              className={classNames(...(isDesktop ? classes : classesMobile))}
              key={index}
              src={isDesktop ? src : srcMobile}
            >
              {content}
            </$TagName>
          ),
        )}
      </div>
      <div className={style.project_detail_bg}>
      </div>
      <div className={style.project_detail_bg}>
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
