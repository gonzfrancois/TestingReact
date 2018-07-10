import { connect } from 'react-redux'
import MoviesComponent, {DispatchProps, StateProps} from './MoviesComponent';
import {Dispatch} from 'redux'
import {withRouter} from 'react-router';
import {getAll, getAllSuccess, getAllFailure} from './duck/actions';
import {State} from '../rootReducer';

const mapStateToProps = (state: State): StateProps => ({
    movies: state.moviesList.movies
});


const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    GetMovies: () => dispatch(getAll()).request
        .then(response => {
            dispatch(getAllSuccess(response.data.Search))
        })
        .catch(error => {
            dispatch(getAllFailure(error))
        })
});

const Movies = connect(mapStateToProps, mapDispatchToProps)(MoviesComponent)

export default withRouter(Movies)