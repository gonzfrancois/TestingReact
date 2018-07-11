import { combineReducers } from 'redux';
import * as authReducer from '../app/Auth/duck/reducers';
import * as moviesReducer from '../app/Movies/duck/reducers';
import * as movieReducer from './MovieDetails/duck/reducers';
export var initialState = {
    userState: authReducer.initialState,
    moviesState: moviesReducer.initialState,
    movieState: movieReducer.initialState
};
export var reducer = combineReducers({
    userState: authReducer.reducer,
    moviesState: moviesReducer.reducer,
    movieState: movieReducer.reducer
});
//# sourceMappingURL=rootReducer.js.map