/* eslint no-underscore-dangle: ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] }] */
import {
  combineReducers, applyMiddleware, createStore, compose,
} from 'redux';
import thunk from 'redux-thunk';

import appReducer from 'src/scripts/modules/app/reducer';
import detailsReducerFactory from 'src/scripts/modules/projectDetails/reducer';
import sharedReducer from 'src/scripts/shared/reducer';

import { PROJECT_DETAILS } from 'src/scripts/shared/defs';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducerObj = {
  app: appReducer,
  shared: sharedReducer,
};

Object.values(PROJECT_DETAILS).forEach(({ pathname }) => {
  reducerObj[pathname] = combineReducers({
    details: detailsReducerFactory(pathname),
  });
});

export default createStore(
  combineReducers(reducerObj),
  {},
  composeEnhancers(applyMiddleware(
    thunk,
  )),
);
