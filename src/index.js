import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import {Provider} from 'react-redux';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import App from 'src/scripts/modules/app/Container';
import Header from 'src/scripts/shared/header/Container';
import ProjectDetails from 'src/scripts/modules/projectDetails/Container';
import ScrollBar from 'src/scripts/shared/scrollBar/Component';
import ScrollToTop from 'src/scripts/hoc/scrollToTop';
import withTracker from 'src/scripts/hoc/withTracker';

import store from 'src/scripts/config/setup';

import * as sharedDefs from 'src/scripts/shared/defs';

import './style.css';

/* eslint-disable react/jsx-filename-extension */
window.onload = () => {
  ReactGA.initialize('UA-107494314-1');
  ReactGA.pageview(window.location.pathname + window.location.search);

  ReactDOM.render(
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop>
          <Route
            render={({location}) => (
              <TransitionGroup className="transition-group">
                <CSSTransition
                  appear
                  classNames="reveal"
                  timeout={200}
                  unmountOnExit
                >
                  <Header location={location} />
                </CSSTransition>
                <CSSTransition
                  appear
                  classNames="reveal"
                  key={`${location.key}-main`}
                  timeout={200}
                  unmountOnExit
                >
                  <div className="transition-group">
                    <ScrollBar pathname={location.pathname} />
                    <Switch key={location.key} location={location}>
                      <Route component={withTracker(App)} exact path="/" />
                      {sharedDefs.TYPES.map(type => (
                        <Route
                          exact
                          key={type}
                          path={`${type}/:projectName`}
                          render={props => {
                            const ProjectDetailsWithTracker = withTracker(
                              ProjectDetails
                            );

                            return (
                              <ProjectDetailsWithTracker
                                project={
                                  sharedDefs.PROJECT_DETAILS[
                                    props.match.params.projectName
                                  ]
                                }
                                {...props}
                              />
                            );
                          }}
                        />
                      ))}
                      <Redirect to="/" />
                    </Switch>
                  </div>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </ScrollToTop>
      </Router>
    </Provider>,
    document.getElementById('root')
  );
};
/* eslint-disable react/jsx-filename-extension */
