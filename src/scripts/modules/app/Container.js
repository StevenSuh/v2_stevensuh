import { connect } from 'react-redux';

import App from './Component';

import * as actions from './actions';

export const mapStateToProps = ({ app, shared }) => ({
  activeFilter: app.get('activeFilter'),
  isDesktop: shared.get('isDesktop'),
});

export default connect(
  mapStateToProps,
  {
    onSetActiveFilter: actions.setActiveFilter,
    onSetCurrentProject: actions.setCurrentProject,
  },
)(App);
