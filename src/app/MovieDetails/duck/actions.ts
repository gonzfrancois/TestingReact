import axios from 'axios'
import {MovieDetails} from './models'

export enum ActionTypes {
    GET_MOVIE_BY_ID = '[Movies] GetByMovieId',
    GET_MOVIE_BY_ID_SUCCESS = '[Movies] GetByMovieId_Success',
    GET_MOVIE_BY_ID_FAILURE = '[Movies] GetByMovieId_Failure',
    RESET_MOVIE = '[Movies] ResetMovie'
}

export interface GetMovieByIdSuccessAction { type: ActionTypes.GET_MOVIE_BY_ID_SUCCESS, payload: { movie: MovieDetails }}
export interface GetMovieByIdFailureAction { type: ActionTypes.GET_MOVIE_BY_ID_FAILURE, payload: { error: any } }
export interface ResetMovieStoreAction { type: ActionTypes.RESET_MOVIE, payload: { } }

const ROOT_URL = 'http://www.omdbapi.com/?apikey=b736a54f&'

export function GetById(id: string) {
    const request = axios.get(`${ROOT_URL}i=${id}`)
    return {
        type: ActionTypes.GET_MOVIE_BY_ID,
        request
    }
}

export function GetByIdSuccess(movie: MovieDetails): GetMovieByIdSuccessAction {
    return {
        type: ActionTypes.GET_MOVIE_BY_ID_SUCCESS,
        payload: {
            movie: movie
        }
    }
}

export function GetByIdFailure(error: string): GetMovieByIdFailureAction {
    console.log("error", error)
    return {
        type: ActionTypes.GET_MOVIE_BY_ID_FAILURE,
        payload: { error: error }
    }
}

export function ResetMovieStore(): ResetMovieStoreAction {
    return {
        type: ActionTypes.RESET_MOVIE,
        payload: { }
    }
}

export type Action =  GetMovieByIdSuccessAction | GetMovieByIdFailureAction | ResetMovieStoreAction