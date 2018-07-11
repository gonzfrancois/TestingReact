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
import { Link } from 'react-router-dom';
var ViewComponent = /** @class */ (function (_super) {
    __extends(ViewComponent, _super);
    function ViewComponent(props) {
        return _super.call(this, props) || this;
    }
    ViewComponent.prototype.render = function () {
        return (React.createElement("section", { className: "navBar" },
            React.createElement("h2", null, "Navbar"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement(Link, { to: "/login" }, "Login")),
                React.createElement("li", null,
                    React.createElement(Link, { to: "/movies" }, "Movies")))));
    };
    return ViewComponent;
}(React.Component));
export { ViewComponent };
//# sourceMappingURL=component.js.map