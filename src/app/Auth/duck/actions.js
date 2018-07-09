export var ActionTypes;
(function (ActionTypes) {
    ActionTypes["LOGIN"] = "[Auth] login";
    ActionTypes["LOGOUT"] = "[Auth] logout";
})(ActionTypes || (ActionTypes = {}));
export function login(username, password) {
    return {
        type: ActionTypes.LOGIN,
        payload: {
            username: username,
            password: password
        }
    };
}
export function logout() {
    return {
        type: ActionTypes.LOGOUT,
        payload: {}
    };
}
//# sourceMappingURL=actions.js.map