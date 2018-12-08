import * as actionTypes from './action_types';

export const closeModal = () => ({
  type: `${window.location.pathname}/${actionTypes.onCloseModal}`,
});

export const openModal = () => ({
  type: `${window.location.pathname}/${actionTypes.onOpenModal}`,
});

export const changeModalImgSrc = src => dispatch => {
  dispatch({
    type: `${window.location.pathname}/${actionTypes.onChangeModalImgSrc}`,
    value: src,
  });
  dispatch(openModal());
};
