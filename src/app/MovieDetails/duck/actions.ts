import axios from 'axios'
import { Dispatch } from 'redux';
import {MovieDetails} from './models'
import * as MovieDetailsComponent from './index';

export enum ActionTypes {
    GET_MOVIE_BY_ID = '[Movies] GetByMovieId',
    GET_MOVIE_BY_ID_SUCCESS = '[Movies] GetByMovieId_Success',
    GET_MOVIE_BY_ID_FAILURE = '[Movies] GetByMovieId_Failure',
    RESET_MOVIE = '[Movies] ResetMovie'
}

export interface GetMovieByIdBeginAction { type: ActionTypes.GET_MOVIE_BY_ID, payload: { }}
export interface GetMovieByIdSuccessAction { type: ActionTypes.GET_MOVIE_BY_ID_SUCCESS, payload: { movie: MovieDetails }}
export interface GetMovieByIdFailureAction { type: ActionTypes.GET_MOVIE_BY_ID_FAILURE, payload: { error: any } }
export interface ResetMovieStoreAction { type: ActionTypes.RESET_MOVIE, payload: { } }

const ROOT_URL = 'http://www.omdbapi.com/?apikey=b736a54f&'

export function GetById(id: string) {
    return function (dispatch: Dispatch) {
        dispatch(GetByIdBegin())

        return axios.get(`${ROOT_URL}i=${id}`)
            .then(respose => {
                dispatch(MovieDetailsComponent.GetByIdSuccess(respose.data))
            })
            .catch(error => {
                dispatch(MovieDetailsComponent.GetByIdFailure(error))
            })
    }
}

export function GetByIdBegin(): GetMovieByIdBeginAction{
    return {
        type: ActionTypes.GET_MOVIE_BY_ID,
        payload: { }
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