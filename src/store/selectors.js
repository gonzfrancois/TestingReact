import { createSelector } from 'reselect';
var getTodosState = (function (state) { return state.todoList; });
export var getTodos = createSelector([getTodosState], function (s) { return s.todos; });
//# sourceMappingURL=selectors.js.map