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
import { emptyMovieDetails } from './models';
var ViewComponent = /** @class */ (function (_super) {
    __extends(ViewComponent, _super);
    function ViewComponent(props) {
        return _super.call(this, props) || this;
    }
    ViewComponent.prototype.componentDidMount = function () {
        this.props.GetMovie(this.props.match.params.id);
    };
    ViewComponent.prototype.componentWillUnmount = function () {
        this.props.Reset();
    };
    ViewComponent.prototype.render = function () {
        var movie = this.props.movie || emptyMovieDetails;
        return (React.createElement("section", { className: "movie" },
            React.createElement("h3", null, movie.Title),
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement("span", null, "Director\u00A0:\u00A0"),
                    React.createElement("span", null, movie.Director)),
                React.createElement("li", null,
                    React.createElement("span", null, "Date\u00A0:\u00A0"),
                    React.createElement("span", null, movie.Released)),
                React.createElement("li", null,
                    React.createElement("span", null, "Poster"),
                    React.createElement("img", { src: movie.Poster, alt: 'Poster' })))));
    };
    return ViewComponent;
}(React.Component));
export { ViewComponent };
//# sourceMappingURL=component.js.map