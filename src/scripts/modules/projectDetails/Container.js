import { connect } from 'react-redux';
import Immutable from 'immutable';

import ProjectDetails from './Component';

import * as actions from './actions';

export const mapStateToProps = ({
  [window.location.pathname]: { details } = { details: Immutable.fromJS({}) },
  shared,
}) => ({
  isDesktop: shared.get('isDesktop'),
  isModalOpen: details.get('isModalOpen') || false,
  modalImgSrc: details.get('modalImgSrc') || '',
});

export default connect(
  mapStateToProps,
  {
    onChangeModalImgSrc: actions.changeModalImgSrc,
    onCloseModal: actions.closeModal,
  },
)(ProjectDetails);
