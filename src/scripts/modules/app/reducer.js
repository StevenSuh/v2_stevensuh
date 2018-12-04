import Immutable from 'immutable';

import * as actionTypes from './action_types';
import * as defs from './defs';

export const initialState = Immutable.fromJS({
  activeFilter: defs.FILTER_ALL,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.setActiveFilter: {
      return state.set('activeFilter', action.value);
    }
    default: {
      return state;
    }
  }
};
