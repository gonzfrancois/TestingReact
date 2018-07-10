var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { connect } from 'react-redux';
import ProtectedRouteComponent from './ProtectedRouteComponent';
var mapStateToProps = function (state, ownProps) { return (__assign({}, ownProps, { isAuthenticated: state.user.isLogged, authenticationPath: '/login' })); };
// const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
//     //Login: (username: string, password: string) => dispatch(login(username, password))
// });
var ProtectedRoute = connect(mapStateToProps)(ProtectedRouteComponent);
// export default ProtectedRoute
//# sourceMappingURL=ProtectedRouteContainer.js.map