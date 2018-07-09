import { connect } from 'react-redux';
import AuthComponent from './AuthComponent';
import { login } from './duck/actions';
var mapStateToProps = function (state) { return ({
    isLogged: state.user.isLogged
}); };
var mapDispatchToProps = function (dispatch) { return ({
    Login: function (username, password) { return dispatch(login(username, password)); }
}); };
var Auth = connect(mapStateToProps, mapDispatchToProps)(AuthComponent);
export default Auth;
//# sourceMappingURL=AuthContainer.js.map