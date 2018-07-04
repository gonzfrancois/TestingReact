import { combineReducers } from 'redux'
import * as fromTodos from '../components/todoList/reducers'

export interface State {
    todoList: fromTodos.State
}

export const initialState: State = {
    todoList: fromTodos.initialState
}

export const reducer = combineReducers<State>({
    todoList: fromTodos.reducer
})