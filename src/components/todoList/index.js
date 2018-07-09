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
import TodoItem from '../TodoItem';
var TodoList = /** @class */ (function (_super) {
    __extends(TodoList, _super);
    function TodoList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            newTodo: ''
        };
        _this._handleChange = _this._handleChange.bind(_this);
        return _this;
    }
    TodoList.prototype._handleChange = function (value) {
        this.setState({ newTodo: value });
    };
    TodoList.prototype._clearInput = function () {
        this.setState({ newTodo: '' });
    };
    TodoList.prototype._toggle = function (id) {
        this.props.onToggle(id);
    };
    TodoList.prototype.render = function () {
        var _this = this;
        console.log("render", this.state, this.props);
        var newTodo = this.state.newTodo;
        return (React.createElement("section", { className: "main" },
            React.createElement("input", { className: "toggle-all", type: "checkbox" }),
            React.createElement("ul", { className: "todo-list" }, this.props.todos.map(function (todo, index) {
                return React.createElement(TodoItem, { todo: todo, onClick: _this.props.onToggle });
            }))));
    };
    return TodoList;
}(React.Component));
export default TodoList;
//# sourceMappingURL=index.js.map