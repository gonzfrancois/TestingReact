import { Todo } from '../components/todoInput/models'

let nextId = 0

export enum ActionTypes {
    ADD_TODO = '[todos] ADD_TODO',
    TOGGLE_TODO = '[todos] TOGGLE_TODO'
}

export interface AddTodoAction { type: ActionTypes.ADD_TODO, payload: { todo: Todo } }
export interface ToggleTodoAction { type: ActionTypes.TOGGLE_TODO, payload: { todoId: number } }

export function addTodo(title: string): AddTodoAction {
    return {
        type: ActionTypes.ADD_TODO,
        payload: {
            todo: {
                id: nextId++,
                title: title,
                completed: false
            }
        }
    }
}

export function toggleTodo(todoId: number): ToggleTodoAction {
    return { type: ActionTypes.TOGGLE_TODO, payload: { todoId } }
}

export type Action = AddTodoAction | ToggleTodoAction