import { connect } from 'react-redux';

import ProjectDetails from './Component';

import * as actions from './actions';

export const mapStateToProps = ({
  [window.location.pathname]: { details },
  shared,
}) => ({
  isDesktop: shared.get('isDesktop'),
  isModalOpen: details.get('isModalOpen'),
  modalImgSrc: details.get('modalImgSrc'),
});

export default connect(
  mapStateToProps,
  {
    onChangeModalImgSrc: actions.changeModalImgSrc,
    onCloseModal: actions.closeModal,
  },
)(ProjectDetails);
