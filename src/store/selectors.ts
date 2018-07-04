import { State } from './rootReducer'
import { createSelector } from 'reselect'

const getTodosState = ((state: State) => state.todoList)

export const getTodos = createSelector([getTodosState], s => s.todos)