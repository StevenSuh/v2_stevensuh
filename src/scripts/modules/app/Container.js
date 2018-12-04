import { connect } from 'react-redux';

import App from './Component';

import * as actions from './actions';

export const mapStateToProps = ({ app }) => ({
  activeFilter: app.get('activeFilter'),
});

export default connect(
  mapStateToProps,
  {
    onSetActiveFilter: actions.setActiveFilter,
    onSetCurrentProject: actions.setCurrentProject,
  },
)(App);
