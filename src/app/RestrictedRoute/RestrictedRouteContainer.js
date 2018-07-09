var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { connect } from 'react-redux';
import PrivateRouteComponent from './RestrictedRouteComponent';
var mapStateToProps = function (state, ownProps) { return (__assign({}, ownProps, { isLogged: state.user.isLogged })); };
var RestrictedRoute = connect(mapStateToProps)(PrivateRouteComponent);
export default RestrictedRoute;
//# sourceMappingURL=RestrictedRouteContainer.js.map