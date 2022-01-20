import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import ContactMe from 'src/scripts/shared/contactMe';

import AboutMe from './components/aboutMe';
import MainAnimation from './components/mainAnimation';

import style from './style.module.css';

const App = ({ isDesktop }) => (
  <div className={classNames(style.landing_page)}>
    <MainAnimation isDesktop={isDesktop} />
    <div className={classNames(style.project_wrapper)}>
      <AboutMe />
    </div>
    <ContactMe />
  </div>
);

App.propTypes = {
  isDesktop: PropTypes.bool.isRequired,
};

export default App;
