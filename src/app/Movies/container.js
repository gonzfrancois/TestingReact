import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as MoviesComponent from './duck';
var mapStateToProps = function (globalState) { return ({
    movies: globalState.moviesState.movies
}); };
var mapDispatchToProps = function (dispatch) { return ({
    GetMovies: function () { return dispatch(MoviesComponent.getAllMovies()); }
}); };
var Movies = connect(mapStateToProps, mapDispatchToProps)(MoviesComponent.ViewComponent);
export default withRouter(Movies);
//# sourceMappingURL=container.js.map