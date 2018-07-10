import axios from 'axios';
export var ActionTypes;
(function (ActionTypes) {
    ActionTypes["GET_ALL"] = "[Movies] GetAll";
    ActionTypes["GET_ALL_SUCCESS"] = "[Movies] GetAllSuccess";
    ActionTypes["GET_ALL_FAILURE"] = "[Movies] GetAllFailure";
})(ActionTypes || (ActionTypes = {}));
var ROOT_URL = 'http://www.omdbapi.com/?apikey=b736a54f&';
export function getAll() {
    var request = axios.get(ROOT_URL + "s=te&page=1");
    return {
        type: ActionTypes.GET_ALL,
        request: request
    };
}
export function getAllSuccess(movies) {
    return {
        type: ActionTypes.GET_ALL_SUCCESS,
        payload: {
            movies: movies
        }
    };
}
export function getAllFailure(error) {
    console.log("error", error);
    return {
        type: ActionTypes.GET_ALL_FAILURE,
        payload: { error: error }
    };
}
//# sourceMappingURL=actions.js.map