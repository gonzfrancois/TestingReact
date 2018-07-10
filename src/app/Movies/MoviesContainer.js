import { connect } from 'react-redux';
import MoviesComponent from './MoviesComponent';
import { withRouter } from 'react-router';
import { getAll, getAllSuccess, getAllFailure } from './duck/actions';
var mapStateToProps = function (state) { return ({
    movies: state.moviesList.movies
}); };
var mapDispatchToProps = function (dispatch) { return ({
    GetMovies: function () { return dispatch(getAll()).request
        .then(function (response) {
        dispatch(getAllSuccess(response.data.Search));
    })
        .catch(function (error) {
        dispatch(getAllFailure(error));
    }); }
}); };
var Movies = connect(mapStateToProps, mapDispatchToProps)(MoviesComponent);
export default withRouter(Movies);
//# sourceMappingURL=MoviesContainer.js.map