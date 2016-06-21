import { connect } from 'react-redux';
import NavigationRoot from './NavigationRoot';
import { push, pop } from './actions';
import { loginUser, signupUser } from '../auth/actions';

function mapStateToProps(state) {
  return {
    authPending: state.auth.authPending,
    failureMessage: state.auth.failureMessage,
    isAuthenticated: state.auth.isAuthenticated,
    navigation: state.navigation,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    loginUser: (details) => dispatch(loginUser(details)),
    pushRoute: route => dispatch(push(route)),
    popRoute: () => dispatch(pop()),
    signupUser: (details) => dispatch(signupUser(details)),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationRoot);
