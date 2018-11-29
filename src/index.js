import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import App from 'scripts/modules/app/Container';
import store from 'scripts/config/setup';

import './style.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route default path="/" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
