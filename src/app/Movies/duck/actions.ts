import axios from 'axios'
import { Dispatch } from 'redux'
import { Movie } from './models';

export enum ActionTypes {
    GET_ALL_MOVIES = '[Movies] GetAll',
    GET_ALL_MOVIES_BEGIN = '[Movies] GetAllMoviesBegin',
    GET_ALL_MOVIES_SUCCESS = '[Movies] getAllMoviesSuccess',
    GET_ALL_MOVIES_FAILURE = '[Movies] GetAllMoviesFailure'
}

export interface GetMoviesSuccessAction { type: ActionTypes.GET_ALL_MOVIES_SUCCESS, payload: { movies: Movie[] }}
export interface GetMoviesFailureAction { type: ActionTypes.GET_ALL_MOVIES_FAILURE, payload: { error: any } }

const ROOT_URL = 'http://www.omdbapi.com/?apikey=b736a54f&'

export function getAllMovies(dispatch: Dispatch) {
    dispatch(getAllMoviesBegin())

    return axios.get(`${ROOT_URL}s=te&page=1`)
        .then(response => {
            dispatch(getAllMoviesSuccess(response.data.Search))
        })
        .catch(error => {
            dispatch(getAllMoviesFailure(error))
        })
}

export function getAllMoviesBegin(){
    return {
        type: ActionTypes.GET_ALL_MOVIES_BEGIN,
        payload: { }
    }
}

export function getAllMoviesSuccess(movies: Movie[]): GetMoviesSuccessAction {
    return {
        type: ActionTypes.GET_ALL_MOVIES_SUCCESS,
        payload: {
            movies: movies
        }
    }
}

export function getAllMoviesFailure(error: string): GetMoviesFailureAction {
    return {
        type: ActionTypes.GET_ALL_MOVIES_FAILURE,
        payload: { error: error }
    }
}

export type Action =  GetMoviesSuccessAction | GetMoviesFailureAction