import axios, {AxiosPromise} from 'axios'
import {Dispatch} from 'redux'
import Movies from '../MoviesComponent';
import Movie from '../Movie';

export enum ActionTypes {
    GET_ALL = '[Movies] GetAll',
    GET_ALL_SUCCESS = '[Movies] GetAllSuccess',
    GET_ALL_FAILURE = '[Movies] GetAllFailure'
}

//export interface GetMoviesAction { type: ActionTypes.GET_ALL, payload: any }
export interface GetMoviesAction { type: ActionTypes.GET_ALL, payload: any }
export interface GetMoviesSuccessAction { type: ActionTypes.GET_ALL_SUCCESS, payload: { movies: Movie[] }}
export interface GetMoviesFailureAction { type: ActionTypes.GET_ALL_FAILURE, payload: { error: any } }

const ROOT_URL = 'http://www.omdbapi.com/?apikey=b736a54f&'

export function getAll() {
    const request = axios.get(`${ROOT_URL}s=te&page=1`)

    return {
        type: ActionTypes.GET_ALL,
        request
    }
}

export function getAllSuccess(movies: Movie[]): GetMoviesSuccessAction {
    return {
        type: ActionTypes.GET_ALL_SUCCESS,
        payload: {
            movies: movies
        }
    }
}

export function getAllFailure(error: string): GetMoviesFailureAction {
    console.log("error", error)
    return {
        type: ActionTypes.GET_ALL_FAILURE,
        payload: { error: error }
    }
}

export type Action =  GetMoviesSuccessAction | GetMoviesFailureAction