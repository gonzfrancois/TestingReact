import { combineReducers } from 'redux'
import * as authReducer from '../app/Auth/duck/reducers'


export interface State {
    user: authReducer.State
}

export const initialState: State = {
    user: authReducer.initialState
}

export const reducer = combineReducers<State>({
    user: authReducer.reducer
})