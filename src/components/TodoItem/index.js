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
var TodoItem = /** @class */ (function (_super) {
    __extends(TodoItem, _super);
    function TodoItem(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    TodoItem.prototype.render = function () {
        var _this = this;
        var todo = this.props.todo;
        return (React.createElement("li", { key: todo.id, onClick: function (e) { return _this.props.onClick(todo.id); } },
            React.createElement("span", null, todo.title),
            React.createElement("span", null, "\u00A0-\u00A0"),
            React.createElement("span", null,
                "checked : ",
                todo.completed ? 'oui' : 'non'),
            React.createElement("span", null, Math.random())));
    };
    return TodoItem;
}(React.Component));
export default TodoItem;
//# sourceMappingURL=index.js.map