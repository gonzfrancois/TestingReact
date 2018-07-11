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
        _this._navigateToMovie = _this._navigateToMovie.bind(_this);
        return _this;
    }
    ViewComponent.prototype.componentDidMount = function () {
        this.props.GetMovies();
    };
    ViewComponent.prototype._navigateToMovie = function (id) {
        this.props.history.push(this.props.location.pathname + "/" + id);
    };
    ViewComponent.prototype.render = function () {
        var _this = this;
        var movies = this.props.movies;
        return (React.createElement("section", { className: "movies" },
            React.createElement("h3", null, "Movies"),
            React.createElement("table", null,
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", null, "Title"),
                        React.createElement("th", null, "Year"))),
                React.createElement("tbody", null, movies.map(function (movie, index) {
                    return (React.createElement("tr", { key: index, onClick: function (e) { return _this._navigateToMovie(movie.imdbID); } },
                        React.createElement("td", { key: movie.imdbID + 'title' }, movie.Title),
                        React.createElement("td", { key: movie.imdbID + 'year' }, movie.Year)));
                })))));
    };
    return ViewComponent;
}(React.Component));
export { ViewComponent };
//# sourceMappingURL=component.js.map