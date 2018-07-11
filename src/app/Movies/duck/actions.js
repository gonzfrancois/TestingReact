import axios from 'axios';
export var ActionTypes;
(function (ActionTypes) {
    ActionTypes["GET_ALL_MOVIES"] = "[Movies] GetAll";
    ActionTypes["GET_ALL_MOVIES_BEGIN"] = "[Movies] GetAllMoviesBegin";
    ActionTypes["GET_ALL_MOVIES_SUCCESS"] = "[Movies] getAllMoviesSuccess";
    ActionTypes["GET_ALL_MOVIES_FAILURE"] = "[Movies] GetAllMoviesFailure";
})(ActionTypes || (ActionTypes = {}));
var ROOT_URL = 'http://www.omdbapi.com/?apikey=b736a54f&';
export function getAllMovies() {
    return function (dispatch) {
        dispatch(getAllMoviesBegin());
        return axios.get(ROOT_URL + "s=te&page=1")
            .then(function (response) {
            dispatch(getAllMoviesSuccess(response.data.Search));
        })
            .catch(function (error) {
            dispatch(getAllMoviesFailure(error));
        });
    };
}
export function getAllMoviesBegin() {
    return {
        type: ActionTypes.GET_ALL_MOVIES_BEGIN,
        payload: {}
    };
}
export function getAllMoviesSuccess(movies) {
    return {
        type: ActionTypes.GET_ALL_MOVIES_SUCCESS,
        payload: {
            movies: movies
        }
    };
}
export function getAllMoviesFailure(error) {
    return {
        type: ActionTypes.GET_ALL_MOVIES_FAILURE,
        payload: { error: error }
    };
}
//# sourceMappingURL=actions.js.map