import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as MovieDetailsComponent from './duck';
var mapStateToProps = function (state) { return ({
    movie: state.movieState.movie
}); };
var mapDispatchToProps = function (dispatch) { return ({
    GetMovie: function (id) {
        dispatch(MovieDetailsComponent.GetById(id)).request
            .then(function (respose) {
            dispatch(MovieDetailsComponent.GetByIdSuccess(respose.data));
        })
            .catch(function (error) {
            dispatch(MovieDetailsComponent.GetByIdFailure(error));
        });
    },
    Reset: function () { return dispatch(MovieDetailsComponent.ResetMovieStore()); }
}); };
var MovieDetails = connect(mapStateToProps, mapDispatchToProps)(MovieDetailsComponent.ViewComponent);
export default withRouter(MovieDetails);
//# sourceMappingURL=container.js.map