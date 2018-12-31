import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import ContactMe from 'src/scripts/shared/contactMe';
import { ProjectDetailsType } from 'src/scripts/shared/defs';

import BodyElementWrapper from './components/bodyElementWrapper';

import * as defs from './defs';
import style from './style.module.css';

const ProjectDetails = ({
  isDesktop,
  isModalOpen,
  match: {
    params: { projectName },
    url,
  },
  modalImgSrc,
  onChangeModalImgSrc,
  onCloseModal,
  project,
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
            href,
            isClosing,
            isOpening,
            src,
            srcMobile,
            tagName: TagName,
          }, index) => (
            <BodyElementWrapper
              key={parseInt(index.toString(), 10)}
              onChangeModalImgSrc={onChangeModalImgSrc}
            >
              <TagName
                className={classNames(...(isDesktop ? classes : classesMobile))}
                href={href}
                src={isDesktop ? src : srcMobile}
                target={TagName === 'a' ? '_blank' : null}
              >
                {content}
              </TagName>
            </BodyElementWrapper>
          ),
        )}
      </div>
      <ContactMe />
      <div
        className={classNames(style.project_detail_modal, isModalOpen ? style.show : '')}
        onClick={onCloseModal}
      >
        <div className={style.project_detail_modal_bg} />
        <img
          alt={`zoomed in pic of ${modalImgSrc}`}
          src={modalImgSrc}
        />
      </div>
    </div>
  );
};

ProjectDetails.propTypes = {
  isDesktop: PropTypes.bool.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      projectName: PropTypes.string.isRequired,
    }).isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  modalImgSrc: PropTypes.string.isRequired,
  onChangeModalImgSrc: PropTypes.func.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  project: ProjectDetailsType,
};

ProjectDetails.defaultProps = {
  project: null,
};

export default ProjectDetails;
