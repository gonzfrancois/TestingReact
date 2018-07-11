import axios from 'axios';
import * as MovieDetailsComponent from './index';
export var ActionTypes;
(function (ActionTypes) {
    ActionTypes["GET_MOVIE_BY_ID"] = "[Movies] GetByMovieId";
    ActionTypes["GET_MOVIE_BY_ID_SUCCESS"] = "[Movies] GetByMovieId_Success";
    ActionTypes["GET_MOVIE_BY_ID_FAILURE"] = "[Movies] GetByMovieId_Failure";
    ActionTypes["RESET_MOVIE"] = "[Movies] ResetMovie";
})(ActionTypes || (ActionTypes = {}));
var ROOT_URL = 'http://www.omdbapi.com/?apikey=b736a54f&';
export function GetById(id) {
    return function (dispatch) {
        dispatch(GetByIdBegin());
        return axios.get(ROOT_URL + "i=" + id)
            .then(function (respose) {
            dispatch(MovieDetailsComponent.GetByIdSuccess(respose.data));
        })
            .catch(function (error) {
            dispatch(MovieDetailsComponent.GetByIdFailure(error));
        });
    };
}
export function GetByIdBegin() {
    return {
        type: ActionTypes.GET_MOVIE_BY_ID,
        payload: {}
    };
}
export function GetByIdSuccess(movie) {
    return {
        type: ActionTypes.GET_MOVIE_BY_ID_SUCCESS,
        payload: {
            movie: movie
        }
    };
}
export function GetByIdFailure(error) {
    console.log("error", error);
    return {
        type: ActionTypes.GET_MOVIE_BY_ID_FAILURE,
        payload: { error: error }
    };
}
export function ResetMovieStore() {
    return {
        type: ActionTypes.RESET_MOVIE,
        payload: {}
    };
}
//# sourceMappingURL=actions.js.map