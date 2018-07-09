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
var TodoInput = /** @class */ (function (_super) {
    __extends(TodoInput, _super);
    function TodoInput(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            newTodo: ''
        };
        _this._handleChange = _this._handleChange.bind(_this);
        return _this;
    }
    TodoInput.prototype.componentDidMount = function () {
        for (var i = 0; i <= 20; i++) {
            this.props.onSubmit('title' + i);
        }
    };
    TodoInput.prototype._handleChange = function (value) {
        this.setState({ newTodo: value });
    };
    TodoInput.prototype._submit = function () {
        this.props.onSubmit(this.state.newTodo);
        this._clearInput();
    };
    TodoInput.prototype._clearInput = function () {
        this.setState({ newTodo: '' });
    };
    TodoInput.prototype.render = function () {
        var _this = this;
        var newTodo = this.state.newTodo;
        return (React.createElement("div", null,
            React.createElement("input", { className: "new-todo", placeholder: "What needs to be done?", value: newTodo, onChange: function (e) { return _this._handleChange(e.target.value); }, onKeyPress: function (e) {
                    if (e.key === 'Enter') {
                        _this._submit();
                    }
                } }),
            React.createElement("span", null,
                " - ",
                Math.random())));
    };
    return TodoInput;
}(React.Component));
export default TodoInput;
//# sourceMappingURL=index.js.map