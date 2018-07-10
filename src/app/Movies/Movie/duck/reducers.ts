import {Action, ActionTypes} from './actions';
import MovieDetails from '../MovieDetails';

export interface State {
    movie?: MovieDetails
}

export const initialState: State = {
    movie: undefined
}

export function reducer(state: State = initialState, action: Action) {
    switch (action.type) {
        case ActionTypes.GET_BY_ID_SUCCESS: {
            const { movie } = action.payload;
            return {
                ...state,
                movie: movie
            }
        }

        case ActionTypes.GET_BY_ID_FAILURE: {
            return {
                ...state,
                movie: undefined
            }
        }

        default:
            return state
    }
}