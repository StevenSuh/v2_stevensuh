import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Header from 'src/scripts/shared/header';
import MainAnimation from './components/mainAnimation';
import ProjectRow from './components/projectRow';

import {
  onScrollHeader,
  onScrollProjects,
} from './effects';
import * as defs from './defs';
import * as sharedDefs from 'src/scripts/shared/defs';

import sharedStyle from 'src/scripts/shared/style.module.css';
import style from './style.module.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      isScrolledHeader: false,
      isScrolledProjects: false,
    };

    this.onScrollHeader = onScrollHeader.bind(this);
    this.onScrollProjects = onScrollProjects.bind(this);
  }

  componentDidMount() {
    setTimeout(
      this.setState.bind(this),
      defs.INITIAL_DURATION,
      {
        ...this.state,
        isLoading: false,
      },
    );
  }

  componentWillMount() {
    window.addEventListener('scroll', this.onScrollHeader);
    window.addEventListener('scroll', this.onScrollProjects);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScrollHeader);
    window.removeEventListener('scroll', this.onScrollProjects);
  }

  render() {
    const { onSetCurrentProject } = this.props;

    return (
      <div className={style.landing_page}>
        <Header isLanding={true} />
        <MainAnimation />
        <div className={classNames(style.about_me)}>
          <div className={sharedStyle.container}>
            <h2 className={style.about_h2}>
              {'My name is '}
              <a
                className={classNames(style.about_h2_my_name, sharedStyle.hover)}
                href="/assets/StevenSuh_Resume.pdf"
                target="_blank"
              >
                Steven
              </a>
              {'.'}
              <br />
              <br />
              {"I'm a software engineer intern at "}
              <Link
                className={classNames(style.affirm_a, sharedStyle.hover)}
                to="/work/affirm"
              >
                Affirm
              </Link>
              {'.'}
              <br />
              <br />
              {'I was previously at '}
              <Link
                className={classNames(style.amazon_a, sharedStyle.hover)}
                to="/work/amazon"
              >
                Amazon
              </Link>
              {' and '}
              <Link
                className={classNames(style.golinks_a, sharedStyle.hover)}
                to="/work/golinks"
              >
                GoLinks
              </Link>
              {'.'}
            </h2>
          </div>
        </div>
        <div id={defs.PROJECT_WRAPPER}>
          <ProjectRow
            onSetCurrentProject={onSetCurrentProject}
            project={sharedDefs.PROJECTS[0]}
          />
          <ProjectRow
            onSetCurrentProject={onSetCurrentProject}
            project={sharedDefs.PROJECTS[1]}
          />
        </div>
      </div>
    );
  };
}

App.propTypes = {
  onSetCurrentProject: PropTypes.func.isRequired,
};

export default App;
