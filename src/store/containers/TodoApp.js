import { connect } from 'react-redux';
import TodoListComponent from './TodoList';
import TodoInputComponent from './TodoInput';
import TodoCounterComponent from './TodoCounter';
import * as React from 'react';
var AppTodo = function () {
    return (React.createElement("section", { className: "todoapp" },
        React.createElement(TodoCounterComponent, null),
        React.createElement("header", { className: "header" },
            React.createElement(TodoInputComponent, null)),
        React.createElement(TodoListComponent, null)));
};
var TodoAppComponent = connect()(AppTodo);
export default TodoAppComponent;
//# sourceMappingURL=TodoApp.js.map