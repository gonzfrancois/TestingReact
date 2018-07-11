import { combineReducers } from 'redux'
import * as authReducer from '../app/Auth/duck/reducers'
import * as moviesReducer from '../app/Movies/duck/reducers'
import * as movieReducer from './MovieDetails/duck/reducers'


export interface State {
    userState: authReducer.State
    moviesState: moviesReducer.State
    movieState: movieReducer.State
}

export const initialState: State = {
    userState: authReducer.initialState,
    moviesState: moviesReducer.initialState,
    movieState: movieReducer.initialState

}

export const reducer = combineReducers({
    userState: authReducer.reducer,
    moviesState: moviesReducer.reducer,
    movieState: movieReducer.reducer
})