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
    movie: undefined
};
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case ActionTypes.GET_BY_ID_SUCCESS: {
            var movie = action.payload.movie;
            return __assign({}, state, { movie: movie });
        }
        case ActionTypes.GET_BY_ID_FAILURE: {
            return __assign({}, state, { movie: undefined });
        }
        default:
            return state;
    }
}
//# sourceMappingURL=reducers.js.map