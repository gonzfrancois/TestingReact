import { combineReducers } from 'redux';
import * as authReducer from '../app/Auth/duck/reducers';
export var initialState = {
    user: authReducer.initialState
};
export var reducer = combineReducers({
    user: authReducer.reducer
});
//# sourceMappingURL=rootReducer.js.map