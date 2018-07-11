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
        dispatch(MovieDetailsComponent.GetById(id)).request
            .then(respose => {
                dispatch(MovieDetailsComponent.GetByIdSuccess(respose.data))
            })
            .catch(error => {
                dispatch(MovieDetailsComponent.GetByIdFailure(error))
            })
    },

    Reset: () => dispatch(MovieDetailsComponent.ResetMovieStore())
});

const MovieDetails = connect(mapStateToProps, mapDispatchToProps)(MovieDetailsComponent.ViewComponent)

export default withRouter(MovieDetails)