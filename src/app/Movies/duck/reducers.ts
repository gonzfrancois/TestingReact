import {Action, ActionTypes } from './actions';
import {Movie} from './models';

export interface State {
    movies: Movie[]
}

export const initialState: State = {
    movies: []
}

export function reducer(state: State = initialState, action: Action) {
    switch (action.type) {
        case ActionTypes.GET_ALL_MOVIES_SUCCESS: {
            const { movies } = action.payload;
            return {
                ...state,
                movies: movies
            }
        }

        case ActionTypes.GET_ALL_MOVIES_FAILURE: {
            return {
                ...state,
                movies: []
            }
        }

        default:
            return state
    }
}