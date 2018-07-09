var nextId = 0;
export var ActionTypes;
(function (ActionTypes) {
    ActionTypes["ADD_TODO"] = "[todos] ADD_TODO";
    ActionTypes["TOGGLE_TODO"] = "[todos] TOGGLE_TODO";
})(ActionTypes || (ActionTypes = {}));
export function addTodo(title) {
    return {
        type: ActionTypes.ADD_TODO,
        payload: {
            todo: {
                id: nextId++,
                title: title,
                completed: false
            }
        }
    };
}
export function toggleTodo(todoId) {
    return { type: ActionTypes.TOGGLE_TODO, payload: { todoId: todoId } };
}
//# sourceMappingURL=index.js.map