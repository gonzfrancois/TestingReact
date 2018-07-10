
export enum ActionTypes {
    LOGIN = '[Auth] login',
    LOGOUT = '[Auth] logout'
}

export interface LoginAction { type: ActionTypes.LOGIN, payload: { username: string, password: string } }
export interface LogoutAction { type: ActionTypes.LOGOUT, payload: { } }

export function login(username: string, password: string): LoginAction {


    return {
        type: ActionTypes.LOGIN,
        payload: {
            username: username,
            password: password
        }
    }
}

export function logout(): LogoutAction {
    return {
        type: ActionTypes.LOGOUT,
        payload: { }
    }
}

export type Action = LoginAction | LogoutAction