var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { connect } from 'react-redux';
import PrivateRouteComponent from './duck/component';
import { login, logout } from '../Auth/duck/actions';
var mapStateToProps = function (state, ownProps) { return (__assign({}, ownProps, { isLogged: state.userState.isLogged })); };
var mapDispatchToProps = function (dispatch) { return ({
    Login: function (username, password) { return dispatch(login(username, password)); },
    Logout: function () { return dispatch(logout()); }
}); };
var RestrictedRoute = connect(mapStateToProps, mapDispatchToProps)(PrivateRouteComponent);
export default RestrictedRoute;
//# sourceMappingURL=container.js.map