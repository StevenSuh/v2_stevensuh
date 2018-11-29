import Immutable from 'immutable';

import * as actionTypes from './action_types';

export const initialState = Immutable.fromJS({
  currentProject: '',
});

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.setCurrentProject: {
      return state.set('currentProject', action.value);
    }
    default: {
      return state;
    }
  }
};
