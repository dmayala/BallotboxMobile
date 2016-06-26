import { connect } from 'react-redux';
import NavigationRoot from './NavigationRoot';
import { push, pop, popToTop, replace, resetTo } from './actions';
import { loginUser, signupUser, logOutUser } from '../auth/actions';

function mapStateToProps(state) {
  return {
    auth: state.auth,
    navigation: state.navigation,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    loginUser: (details) => dispatch(loginUser(details)),
    logOutUser: () => dispatch(logOutUser()),
    pushRoute: route => dispatch(push(route)),
    popRoute: () => dispatch(pop()),
    popToTopRoute: () => dispatch(popToTop()),
    replaceRoute: route => dispatch(replace(route)),
    resetToRoute: route => dispatch(resetTo(route)),
    signupUser: (details) => dispatch(signupUser(details)),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationRoot);
