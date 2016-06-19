import { connect } from 'react-redux';
import NavigationRoot from './NavigationRoot';
import { push, pop } from './actions';
import { loginUser } from '../auth/actions';

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    navigation: state.navigation,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    loginUser: (details) => dispatch(loginUser(details)),
    pushRoute: route => dispatch(push(route)),
    popRoute: () => dispatch(pop()),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationRoot);
