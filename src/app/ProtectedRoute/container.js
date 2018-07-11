var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { connect } from 'react-redux';
import * as ProtectedRouteComponent from './duck';
var mapStateToProps = function (state, ownProps) { return (__assign({}, ownProps, { isAuthenticated: state.userState.isLogged, authenticationPath: '/login' })); };
var ProtectedRoute = connect(mapStateToProps)(ProtectedRouteComponent.ViewComponent);
//# sourceMappingURL=container.js.map