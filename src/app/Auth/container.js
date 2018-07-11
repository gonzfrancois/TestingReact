import { connect } from 'react-redux';
import * as AuthComponent from './duck';
var mapStateToProps = function (state) { return ({
    isLogged: state.userState.isLogged
}); };
var mapDispatchToProps = function (dispatch) { return ({
    Login: function (username, password) { return dispatch(AuthComponent.login(username, password)); },
    Logout: function () { return dispatch(AuthComponent.logout()); }
}); };
var Auth = connect(mapStateToProps, mapDispatchToProps)(AuthComponent.ViewComponent);
export default Auth;
//# sourceMappingURL=container.js.map