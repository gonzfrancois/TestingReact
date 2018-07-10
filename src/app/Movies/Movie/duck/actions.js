import axios from 'axios';
export var ActionTypes;
(function (ActionTypes) {
    ActionTypes["GET_BY_ID"] = "[Movie] GetById";
    ActionTypes["GET_BY_ID_SUCCESS"] = "[Movie] GetById_Success";
    ActionTypes["GET_BY_ID_FAILURE"] = "[Movie] GetById_Failure";
})(ActionTypes || (ActionTypes = {}));
var ROOT_URL = 'http://www.omdbapi.com/?apikey=b736a54f&';
export function GetById(id) {
    var request = axios.get(ROOT_URL + "i=" + id);
    return {
        type: ActionTypes.GET_BY_ID,
        request: request
    };
}
export function GetByIdSuccess(movie) {
    return {
        type: ActionTypes.GET_BY_ID_SUCCESS,
        payload: {
            movie: movie
        }
    };
}
export function vFailure(error) {
    console.log("error", error);
    return {
        type: ActionTypes.GET_BY_ID_FAILURE,
        payload: { error: error }
    };
}
//# sourceMappingURL=actions.js.map