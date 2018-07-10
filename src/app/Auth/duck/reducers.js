var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { ActionTypes } from './actions';
export var initialState = {
    username: undefined,
    isLogged: false
};
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case ActionTypes.LOGIN: {
            var username = action.payload.username;
            return __assign({}, state, { username: username, isLogged: true });
        }
        case ActionTypes.LOGOUT: {
            return __assign({}, state, { username: undefined, isLogged: false });
        }
        default:
            return state;
    }
}
//# sourceMappingURL=reducers.js.map