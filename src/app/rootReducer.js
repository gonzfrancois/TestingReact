import { combineReducers } from 'redux';
import * as authReducer from '../app/Auth/duck/reducers';
import * as moviesReducer from '../app/Movies/duck/reducers';
import * as movieReducer from '../app/Movies/Movie/duck/reducers';
export var initialState = {
    user: authReducer.initialState,
    moviesList: moviesReducer.initialState,
    selectedMovie: movieReducer.initialState,
};
export var reducer = combineReducers({
    user: authReducer.reducer,
    moviesList: moviesReducer.reducer,
    selectedMovie: movieReducer.reducer
});
//# sourceMappingURL=rootReducer.js.map