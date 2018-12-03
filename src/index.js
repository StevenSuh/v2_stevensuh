import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import App from 'src/scripts/modules/app/Container';
import store from 'src/scripts/config/setup';

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
                timeout={2000}
              >
                <Switch
                  key={location.key}
                  location={location}
                >
                  <Route exact path="/" component={App} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Router>
    </Provider>,
    document.getElementById('root'),
  );
};
