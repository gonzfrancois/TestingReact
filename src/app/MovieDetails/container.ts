import {Dispatch} from 'redux'
import { connect } from 'react-redux'
import {withRouter} from 'react-router';
import {State} from '../rootReducer';

import * as MovieDetailsComponent from './duck'

const mapStateToProps = (state: State): MovieDetailsComponent.StateProps => ({
    movie: state.movieState.movie as MovieDetailsComponent.MovieDetails
});

const mapDispatchToProps = (dispatch: Dispatch): MovieDetailsComponent.DispatchProps => ({
    GetMovie: (id: string) => {
        dispatch<any>(MovieDetailsComponent.GetById(id))
    },

    Reset: () => dispatch(MovieDetailsComponent.ResetMovieStore())
});

const MovieDetails = connect(mapStateToProps, mapDispatchToProps)(MovieDetailsComponent.ViewComponent)

export default withRouter(MovieDetails)