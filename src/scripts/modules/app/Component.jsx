import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import AboutMe from './components/aboutMe';
import Header from 'src/scripts/shared/header';
import MainAnimation from './components/mainAnimation';
import ProjectRow from './components/projectRow';

import {
  onScrollLanding,
} from './effects';
import * as defs from './defs';
import * as sharedDefs from 'src/scripts/shared/defs';

import style from './style.module.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isScrolledHeader: false,
    };

    this.onScrollLanding = onScrollLanding.bind(this);
  }

  componentWillMount() {
    window.addEventListener('scroll', this.onScrollLanding);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScrollLanding);
  }

  render() {
    const { onSetCurrentProject } = this.props;

    return (
      <div className={classNames(style.landing_page, style.hidden)}>
        <Header />
        <MainAnimation />
        <div
          className={classNames(style.project_wrapper, style.reveal)}
          id={defs.PROJECT_WRAPPER}
        >
          <AboutMe />
          <div
            className={style.project_container}
            id={defs.PROJECT_CONTAINER}
          >
            {sharedDefs.PROJECTS.map(project => (
              <ProjectRow
                key={project.id}
                onChangeProjectView={this.onChangeProjectView}
                onSetCurrentProject={onSetCurrentProject}
                project={project}
              />
            ))}
          </div>
        </div>
        <div className={style.filler} />
        <div className={style.filler} />
      </div>
    );
  };
}

App.propTypes = {
  onSetCurrentProject: PropTypes.func.isRequired,
};

export default App;
