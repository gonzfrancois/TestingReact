import { Todo } from '../components/todoList/models'
import {Action, ActionTypes} from '../components/todoList/actions';

export interface State {
    todos: Todo[]
}

// Define our initialState
const initialState: State = {
    todos: []
}

export function reducer(state: State = initialState, action: Action) {

    switch (action.type) {
        case ActionTypes.ADD_TODO: {
            const t = action.payload.todo;
            return {
                ...state,
                todos: [...state.todos, t]
            }
        }

        case ActionTypes.TOGGLE_TODO: {
            console.log("Toggle",action.payload)
            const { todoId } = action.payload
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === todoId ? { ...todo, completed: !todo.completed } : todo)
            }
        }

        default:
            return state
    }
}