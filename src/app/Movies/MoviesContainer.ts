import { connect } from 'react-redux'
import MoviesComponent from './MoviesComponent';
import {login, logout} from '../Auth/duck/actions';
import {DispatchProps} from './MoviesComponent';
import {Dispatch} from 'redux'

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    Logout: () => dispatch(logout())
});

const Movies = connect(null, mapDispatchToProps)(MoviesComponent)

export default Movies