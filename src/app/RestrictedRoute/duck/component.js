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
import { Route } from "react-router-dom";
var ViewComponent = /** @class */ (function (_super) {
    __extends(ViewComponent, _super);
    function ViewComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            user: '',
            pwd: ''
        };
        _this._handleChangeUser.bind(_this._handleChangeUser);
        _this._handleChangePwd.bind(_this._handleChangePwd);
        _this._submit.bind(_this._submit);
        return _this;
    }
    ViewComponent.prototype._handleChangeUser = function (value) {
        this.setState({ user: value });
    };
    ViewComponent.prototype._handleChangePwd = function (value) {
        this.setState({ pwd: value });
    };
    ViewComponent.prototype._submit = function () {
        this.props.Login(this.state.user, this.state.pwd);
    };
    ViewComponent.prototype.render = function () {
        var _this = this;
        var Component = this.props.component;
        var isLogged = this.props.isLogged;
        if (!Component) {
            return null;
        }
        if (isLogged) {
            return React.createElement(Route, __assign({ component: Component }, this.props));
        }
        return (React.createElement("div", { id: "login" },
            React.createElement("label", { htmlFor: "username" }, "user name :"),
            React.createElement("input", { type: "text", id: "username", name: "firstname", value: this.state.user, onChange: function (e) { return _this._handleChangeUser(e.target.value); } }),
            React.createElement("br", null),
            React.createElement("input", { type: "text", id: "pwd", name: "pwd", value: this.state.pwd, onChange: function (e) { return _this._handleChangePwd(e.target.value); } }),
            React.createElement("button", { onClick: function (e) { return _this._submit(); } },
                React.createElement("span", null, "Submit"))));
    };
    return ViewComponent;
}(React.Component));
export default ViewComponent;
//# sourceMappingURL=component.js.map