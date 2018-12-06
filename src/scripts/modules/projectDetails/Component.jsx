import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import * as defs from './defs';
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
    background: {
      classes: bgClasses,
      img: {
        classes: bgImgClasses,
        src: bgImgSrc,
        srcMobile: bgImgMobileSrc,
      },
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
        className={classNames(style.project_detail_bg)}
        id={defs.DETAILS_BG}
        style={bgStyle}
      >
        {isDesktop ? (
          bgImgSrc && (
            <img
              alt={`${projectName} background`}
              className={classNames(style.project_detail_bg_img, ...bgImgClasses)}
              src={bgImgSrc}
            />
          )
        ) : (
          bgImgMobileSrc && (
            <img
              alt={`${projectName} background`}
              className={classNames(style.project_detail_bg_img, ...bgImgClasses)}
              src={bgImgMobileSrc}
            />
          )
        )}
        <div className={classNames(style.project_detail_bg_overlay, ...bgClasses)} />
      </div>
      <div className={classNames(style.project_detail_title_container)}>
        <span>
          <img
            alt={`${projectName} logo`}
            className={classNames(style.project_detail_title_img, ...logoClasses)}
            src={logoSrc}
          />
        </span>
      </div>
      <div className={style.project_detail_body}>
        {bodyElements.map(
          ({
            classes,
            content,
            src,
            tagName: $TagName,
          }, index) => (
            <$TagName
              className={classNames(...classes)}
              key={index}
              src={src}
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
