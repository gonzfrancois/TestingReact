import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as MoviesComponent from './duck';
var mapStateToProps = function (globalState) { return ({
    movies: globalState.moviesState.movies
}); };
var ROOT_URL = 'http://www.omdbapi.com/?apikey=b736a54f&';
var mapDispatchToProps = function (dispatch) { return ({
    GetMovies: function () { return MoviesComponent.getAllMovies(dispatch); }
}); };
var Movies = connect(mapStateToProps, mapDispatchToProps)(MoviesComponent.ViewComponent);
export default withRouter(Movies);
//# sourceMappingURL=container.js.map