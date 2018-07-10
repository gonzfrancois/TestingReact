import { createSelector } from 'reselect';
var getUserState = (function (state) { return state.user; });
export var getTodos = createSelector([getUserState], function (s) { return s.todos; });
//# sourceMappingURL=selectors.js.map