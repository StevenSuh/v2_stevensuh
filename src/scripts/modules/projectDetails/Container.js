import { connect } from 'react-redux';

import ProjectDetails from './Component';

export const mapStateToProps = ({ shared }) => ({
  isDesktop: shared.get('isDesktop'),
});

export default connect(
  mapStateToProps,
  null,
)(ProjectDetails);
