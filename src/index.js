import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import App from 'src/scripts/modules/app/Container';
import Header from 'src/scripts/shared/header';
import ProjectDetails from 'src/scripts/modules/projectDetails/Component';
import ScrollToTop from 'src/scripts/hoc/scrollToTop';

import store from 'src/scripts/config/setup';

import * as sharedDefs from 'src/scripts/shared/defs';

import './style.css';

window.onload = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <ScrollToTop>
        <Route
          render={({ location }) => (
            <TransitionGroup className="transition-group">
              <CSSTransition
                appear
                classNames="reveal"
                timeout={400}
              >
                <Header location={location} />
              </CSSTransition>
              <CSSTransition
                appear
                classNames="reveal"
                key={location.key + '-main'}
                timeout={400}
              >
                <div className="transition-group">
                  <Switch
                    key={location.key}
                    location={location}
                  >
                    <Route
                      component={App}
                      exact
                      path="/"
                    />
                    {sharedDefs.TYPES.map(type => (
                      <Route
                        component={ProjectDetails}
                        exact
                        key={type}
                        path={`${type}/:projectName`}
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
    document.getElementById('root'),
  );
};
