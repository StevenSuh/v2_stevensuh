import { connect } from 'react-redux';

import App from './Component';

import * as actions from './actions';

export const mapDispatchToProps = ({ app }) => ({
  activeFilter: app.get('activeFilter'),
});

export default connect(
  mapDispatchToProps,
  {
    onSetActiveFilter: actions.setActiveFilter,
    onSetCurrentProject: actions.setCurrentProject,
  },
)(App);
