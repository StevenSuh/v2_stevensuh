import Immutable from 'immutable';

import * as actionTypes from './action_types';
import * as utils from './utils';

export const initialState = Immutable.fromJS({
  isDesktop: utils.isDesktop(),
});

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.onChangeIsDesktop: {
      return state.set('isDesktop', action.value);
    }
    default: {
      return state;
    }
  }
};
