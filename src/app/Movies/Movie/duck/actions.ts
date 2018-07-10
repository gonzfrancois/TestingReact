import axios from 'axios'
import MovieDetails from '../MovieDetails'

export enum ActionTypes {
    GET_BY_ID = '[Movie] GetById',
    GET_BY_ID_SUCCESS = '[Movie] GetById_Success',
    GET_BY_ID_FAILURE = '[Movie] GetById_Failure'
}

export interface GetMovieByIdSuccessAction { type: ActionTypes.GET_BY_ID_SUCCESS, payload: { movie: MovieDetails }}
export interface GetMovieByIdFailureAction { type: ActionTypes.GET_BY_ID_FAILURE, payload: { error: any } }

const ROOT_URL = 'http://www.omdbapi.com/?apikey=b736a54f&'

export function GetById(id: string) {
    const request = axios.get(`${ROOT_URL}i=${id}`)
    return {
        type: ActionTypes.GET_BY_ID,
        request
    }
}

export function GetByIdSuccess(movie: MovieDetails): GetMovieByIdSuccessAction {
    return {
        type: ActionTypes.GET_BY_ID_SUCCESS,
        payload: {
            movie: movie
        }
    }
}

export function vFailure(error: string): GetMovieByIdFailureAction {
    console.log("error", error)
    return {
        type: ActionTypes.GET_BY_ID_FAILURE,
        payload: { error: error }
    }
}

export type Action =  GetMovieByIdSuccessAction | GetMovieByIdFailureAction