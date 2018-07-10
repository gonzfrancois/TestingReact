import { connect } from 'react-redux';
import MovieComponent from './MovieComponent';
import { withRouter } from 'react-router';
import { GetById } from './duck/actions';
var mapStateToProps = function (state) { return ({
    movie: state.selectedMovie.movie
}); };
var mapDispatchToProps = function (dispatch) { return ({
    GetMovie: function (id) { return dispatch(GetById(id)); }
}); };
var Movie = connect(mapStateToProps, mapDispatchToProps)(MovieComponent);
export default withRouter(Movie);
//# sourceMappingURL=MovieContainer.js.map