import { State } from '../app/rootReducer'
import { createSelector } from 'reselect'

const getUserState = ((state: State) => state.user)

export const getTodos = createSelector([getUserState], s => s.todos)