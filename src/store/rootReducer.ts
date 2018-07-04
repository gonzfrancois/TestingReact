import { combineReducers } from 'redux'
import * as fromTodoList from '../reducers/index'

export interface State {
    todoList: fromTodoList.State
}

export const initialState: State = {
    todoList: fromTodoList.initialState
}

export const reducer = combineReducers<State>({
    todoList: fromTodoList.reducer
})