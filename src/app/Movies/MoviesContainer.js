import { connect } from 'react-redux';
import MoviesComponent from './MoviesComponent';
import { logout } from '../Auth/duck/actions';
var mapDispatchToProps = function (dispatch) { return ({
    Logout: function () { return dispatch(logout()); }
}); };
var Movies = connect(null, mapDispatchToProps)(MoviesComponent);
export default Movies;
//# sourceMappingURL=MoviesContainer.js.map