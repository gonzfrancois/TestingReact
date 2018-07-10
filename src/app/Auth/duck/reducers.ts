import {Action, ActionTypes} from './actions';

export interface State {
    username?: string,
    isLogged: boolean
}

export const initialState: State = {
    username: undefined,
    isLogged: false
}

export function reducer(state: State = initialState, action: Action) {
    switch (action.type) {
        case ActionTypes.LOGIN: {
            const { username } = action.payload;
            return {
                ...state,
                username: username,
                isLogged: true
            }
        }

        case ActionTypes.LOGOUT: {
            return {
                ...state,
                username: undefined,
                isLogged: false
            }
        }

        default:
            return state
    }
}