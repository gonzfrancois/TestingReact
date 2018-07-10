var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import * as React from 'react';
import { Redirect, Route } from 'react-router';
var ProtectedRouteComponent = /** @class */ (function (_super) {
    __extends(ProtectedRouteComponent, _super);
    function ProtectedRouteComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProtectedRouteComponent.prototype.render = function () {
        var redirectPath = '';
        if (!this.props.isAuthenticated) {
            redirectPath = this.props.authenticationPath;
        }
        if (redirectPath) {
            var renderComponent = function () { return (React.createElement(Redirect, { to: { pathname: redirectPath } })); };
            return React.createElement(Route, __assign({}, this.props, { component: renderComponent, render: undefined }));
        }
        else {
            return React.createElement(Route, __assign({}, this.props));
        }
    };
    return ProtectedRouteComponent;
}(Route));
export default ProtectedRouteComponent;
//# sourceMappingURL=ProtectedRouteComponent.js.map