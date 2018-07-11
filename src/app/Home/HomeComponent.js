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
import Navbar from '../Navbar/container';
import Movies from '../Movies/container';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from '../Auth/container';
import RestrictedRoute from '../RestrictedRoute/container';
import MovieDetails from '../MovieDetails/container';
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home(props) {
        return _super.call(this, props) || this;
    }
    Home.prototype.render = function () {
        return (React.createElement(Router, null,
            React.createElement("section", { className: "App" },
                React.createElement("h1", null, "App"),
                React.createElement(Navbar, null),
                React.createElement(Switch, null,
                    React.createElement(Route, { path: "/", exact: true, component: function () { return React.createElement("h1", null, "Welcome"); } }),
                    React.createElement(RestrictedRoute, { exact: true, path: "/movies", component: Movies }),
                    React.createElement(RestrictedRoute, { exact: true, path: "/movies/:id", component: MovieDetails }),
                    React.createElement(Route, { path: "/login", component: Auth })))));
    };
    return Home;
}(React.Component));
export default Home;
//# sourceMappingURL=HomeComponent.js.map