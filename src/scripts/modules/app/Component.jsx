import React from 'react';
import classNames from 'classnames';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';

import AboutMe from './components/aboutMe';
import ContactMe from 'src/scripts/shared/contactMe';
import MainAnimation from './components/mainAnimation';
import ProjectRow from './components/projectRow';

import * as defs from './defs';
import * as sharedDefs from 'src/scripts/shared/defs';

import sharedStyle from 'src/scripts/shared/style.module.css';
import style from './style.module.css';

const App = ({
  activeFilter,
  isDesktop,
  onSetActiveFilter,
}) => (
  <div className={classNames(style.landing_page)}>
    <MainAnimation isDesktop={isDesktop} />
    <div className={classNames(style.project_wrapper)}>
      <AboutMe />
      <div className={classNames(sharedStyle.container, style.filter_container)}>
        <span>
          <span
            className={classNames(
              style.filter_span,
              activeFilter === defs.FILTER_ALL ? style.bold : null,
            )}
            onClick={() => onSetActiveFilter(defs.FILTER_ALL)}
          >
            all
          </span>
          {' / '}
          <span
            className={classNames(
              style.filter_span,
              activeFilter === defs.FILTER_WORK ? style.bold : null,
            )}
            onClick={() => onSetActiveFilter(defs.FILTER_WORK)}
          >
            work
          </span>
          {' / '}
          <span
            className={classNames(
              style.filter_span,
              activeFilter === defs.FILTER_PROJECT ? style.bold : null,
            )}
            onClick={() => onSetActiveFilter(defs.FILTER_PROJECT)}
          >
            project
          </span>
        </span>
      </div>
      <div>
        <TransitionGroup className={style.project_container}>
          {sharedDefs.PROJECTS
            .filter(({ type }) =>
              activeFilter === defs.FILTER_ALL ?
                true :
                activeFilter === type
            ).map(project => (
              <CSSTransition
                appear
                classNames="reveal"
                key={project.id}
                timeout={400}
                unmountOnExit
              >
                <ProjectRow
                  key={project.id}
                  isDesktop={isDesktop}
                  project={project}
                />
              </CSSTransition>
            )
          )}
        </TransitionGroup>
      </div>
    </div>
    <ContactMe />
  </div>
);

App.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  isDesktop: PropTypes.bool.isRequired,
  onSetActiveFilter: PropTypes.func.isRequired,
};

export default App;
