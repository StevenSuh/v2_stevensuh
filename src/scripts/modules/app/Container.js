import { connect } from 'react-redux';

import App from './Component';

import * as actions from './actions';

export default connect(
  null,
  {
    onSetCurrentProject: actions.setCurrentProject,
  },
)(App);
