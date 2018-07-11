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
import * as React from 'react';
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
        if (this.props.isLogged) {
            return (React.createElement("div", null,
                React.createElement("span", null, "Tou are logged in"),
                React.createElement("br", null),
                React.createElement("button", { onClick: function (e) { return _this.props.Logout(); } }, "Logout")));
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
}(React.PureComponent));
export { ViewComponent };
//# sourceMappingURL=component.js.map