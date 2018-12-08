import { connect } from 'react-redux';

import * as sharedActions from 'src/scripts/shared/actions';
import Header from './Component';


export const mapStateToProps = ({ shared }) => ({
  isDesktop: shared.get('isDesktop'),
});

export default connect(
  mapStateToProps,
  {
    onChangeIsDesktop: sharedActions.changeIsDesktop,
  },
)(Header);
