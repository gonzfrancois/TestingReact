import { combineReducers } from 'redux'
import * as authReducer from '../app/Auth/duck/reducers'
import * as moviesReducer from '../app/Movies/duck/reducers'
import * as movieReducer from '../app/Movies/Movie/duck/reducers'


export interface State {
    user: authReducer.State
    moviesList: moviesReducer.State
    selectedMovie: movieReducer.State
}

export const initialState: State = {
    user: authReducer.initialState,
    moviesList: moviesReducer.initialState,
    selectedMovie: movieReducer.initialState,

}

export const reducer = combineReducers({
    user: authReducer.reducer,
    moviesList: moviesReducer.reducer,
    selectedMovie: movieReducer.reducer
})