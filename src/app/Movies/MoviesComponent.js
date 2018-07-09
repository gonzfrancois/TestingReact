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
var Movies = /** @class */ (function (_super) {
    __extends(Movies, _super);
    function Movies(props) {
        return _super.call(this, props) || this;
    }
    Movies.prototype.render = function () {
        var _this = this;
        return (React.createElement("section", { className: "movies" },
            React.createElement("h3", { onClick: function (e) { return _this.props.Logout(); } }, "Exit")));
    };
    return Movies;
}(React.Component));
export default Movies;
//# sourceMappingURL=MoviesComponent.js.map