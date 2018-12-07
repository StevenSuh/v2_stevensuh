import Immutable from 'immutable';

import * as actionTypes from './action_types';

export const initialState = Immutable.fromJS({
  isModalOpen: false,
  modalImgSrc: '',
});

export default (scope) => (state = initialState, action) => {
  switch (action.type) {
    case `${scope}/${actionTypes.onChangeModalImgSrc}`: {
      return state.set('modalImgSrc', action.value);
    }
    case `${scope}/${actionTypes.onCloseModal}`: {
      return state.set('isModalOpen', false);
    }
    case `${scope}/${actionTypes.onOpenModal}`: {
      return state.set('isModalOpen', true);
    }
    default: {
      return state;
    }
  }
};
