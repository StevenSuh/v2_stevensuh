import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Header from 'src/scripts/shared/header';
import MainAnimation from './components/mainAnimation';
import ProjectRow from './components/projectRow';

import * as defs from './defs';
import style from './style.module.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(
      this.setState.bind(this),
      defs.INITIAL_DURATION,
      { isLoading: false },
    );
  }

  render() {
    const { onSetCurrentProject } = this.props;

    return (
      <div className={style.landing_page}>
        <Header isLanding={true} />
        <MainAnimation />
        <div
          className={classNames(style.about_me, style.project_row_wrapper)}
        >
          <h1>About</h1>
        </div>
        <ProjectRow
          onSetCurrentProject={onSetCurrentProject}
        />
      </div>
    );
  };
}

App.propTypes = {
  onSetCurrentProject: PropTypes.func.isRequired,
};

export default App;
