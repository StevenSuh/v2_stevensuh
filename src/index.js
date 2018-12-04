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

import store from 'src/scripts/config/setup';

import * as sharedDefs from 'src/scripts/shared/defs';

import './style.css';

window.onload = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Route
          render={({ location }) => (
            <TransitionGroup className="transition-group">
              <CSSTransition
                appear
                classNames="reveal"
                key={location.key}
                timeout={200}
              >
                <div className="transition-group">
                  <Header />
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
      </Router>
    </Provider>,
    document.getElementById('root'),
  );
};
