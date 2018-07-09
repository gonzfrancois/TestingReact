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
var Navbar = /** @class */ (function (_super) {
    __extends(Navbar, _super);
    function Navbar(props) {
        return _super.call(this, props) || this;
    }
    Navbar.prototype.render = function () {
        return (React.createElement("section", { className: "navBar" },
            React.createElement("h2", null, "Navbar"),
            React.createElement(Link, { to: "/movies" }, "Movies")));
    };
    return Navbar;
}(React.Component));
export default Navbar;
//# sourceMappingURL=NavbarComponent.js.map