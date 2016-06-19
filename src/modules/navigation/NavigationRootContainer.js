import { connect } from 'react-redux';
import NavigationRoot from './NavigationRoot';
import { push, pop } from './actions';

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    navigation: state.navigation,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    pushRoute: route => dispatch(push(route)),
    popRoute: () => dispatch(pop()),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationRoot);
