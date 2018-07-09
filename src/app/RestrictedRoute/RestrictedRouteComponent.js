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
import * as React from "react";
import { Redirect, Route } from "react-router-dom";
var PrivateRouteComponent = /** @class */ (function (_super) {
    __extends(PrivateRouteComponent, _super);
    function PrivateRouteComponent(props) {
        return _super.call(this, props) || this;
    }
    PrivateRouteComponent.prototype.render = function () {
        console.log("render private route", this.props);
        var Component = this.props.component;
        var isLogged = this.props.isLogged;
        if (!Component) {
            return null;
        }
        if (isLogged) {
            var loc = this.props.location;
            if (loc !== undefined && loc !== null) {
                console.log(loc);
            }
            return React.createElement(Route, { component: Component });
        }
        var redirectProps = {
            to: {
                pathname: "/login",
                state: { from: this.props.location }
            }
        };
        return React.createElement(Redirect, __assign({}, redirectProps));
    };
    return PrivateRouteComponent;
}(React.Component));
export default PrivateRouteComponent;
//# sourceMappingURL=RestrictedRouteComponent.js.map