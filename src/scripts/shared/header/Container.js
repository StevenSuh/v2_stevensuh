import { connect } from 'react-redux';

import Header from './Component';

import * as sharedActions from 'src/scripts/shared/actions';

export const mapStateToProps = ({ shared }) => ({
  isDesktop: shared.get('isDesktop'),
});

export default connect(
  mapStateToProps,
  {
    onChangeIsDesktop: sharedActions.changeIsDesktop,
  },
)(Header);
