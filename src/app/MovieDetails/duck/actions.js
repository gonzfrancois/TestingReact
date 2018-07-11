import axios from 'axios';
export var ActionTypes;
(function (ActionTypes) {
    ActionTypes["GET_MOVIE_BY_ID"] = "[Movies] GetByMovieId";
    ActionTypes["GET_MOVIE_BY_ID_SUCCESS"] = "[Movies] GetByMovieId_Success";
    ActionTypes["GET_MOVIE_BY_ID_FAILURE"] = "[Movies] GetByMovieId_Failure";
    ActionTypes["RESET_MOVIE"] = "[Movies] ResetMovie";
})(ActionTypes || (ActionTypes = {}));
var ROOT_URL = 'http://www.omdbapi.com/?apikey=b736a54f&';
export function GetById(id) {
    var request = axios.get(ROOT_URL + "i=" + id);
    return {
        type: ActionTypes.GET_MOVIE_BY_ID,
        request: request
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