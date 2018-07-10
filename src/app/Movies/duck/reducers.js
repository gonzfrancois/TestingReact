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
    movies: []
};
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case ActionTypes.GET_ALL_SUCCESS: {
            var movies = action.payload.movies;
            console.log("reducer", movies);
            return __assign({}, state, { movies: movies });
            console.log("state", state);
        }
        case ActionTypes.GET_ALL_FAILURE: {
            return __assign({}, state, { movies: [] });
        }
        default:
            return state;
    }
}
//# sourceMappingURL=reducers.js.map