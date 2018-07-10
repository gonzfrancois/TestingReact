import {Action, ActionTypes} from './actions';
import Movies from '../MoviesComponent';
import Movie from '../Movie';

export interface State {
    movies: Movie[]
}

export const initialState: State = {
    movies: []
}

export function reducer(state: State = initialState, action: Action) {
    switch (action.type) {
        case ActionTypes.GET_ALL_SUCCESS: {
            const { movies } = action.payload;
            console.log("reducer",movies)
            return {
                ...state,
                movies: movies
            }
            console.log("state",state)
        }

        case ActionTypes.GET_ALL_FAILURE: {
            return {
                ...state,
                movies: []
            }
        }

        default:
            return state
    }
}