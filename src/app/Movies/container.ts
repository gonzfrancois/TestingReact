import {Dispatch} from 'redux'
import { connect } from 'react-redux'
import {withRouter} from 'react-router';
import {State} from '../rootReducer';

import * as MoviesComponent from './duck'

const mapStateToProps = (globalState: State): MoviesComponent.StateProps => ({
    movies: globalState.moviesState.movies
});

const ROOT_URL = 'http://www.omdbapi.com/?apikey=b736a54f&'

const mapDispatchToProps = (dispatch: Dispatch): MoviesComponent.DispatchProps => ({
    GetMovies: () => MoviesComponent.getAllMovies(dispatch)
});

const Movies = connect(mapStateToProps, mapDispatchToProps)(MoviesComponent.ViewComponent)

export default withRouter(Movies)