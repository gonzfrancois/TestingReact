import { connect } from 'react-redux'
import MovieComponent, {DispatchProps} from './MovieComponent';
import {Dispatch} from 'redux'
import {withRouter} from 'react-router';
import {GetById} from './duck/actions';
import {StateProps} from './MovieComponent';
import {State} from '../../rootReducer';


const mapStateToProps = (state: State): StateProps => ({
    movie: state.selectedMovie.movie
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    GetMovie: (id: string) => dispatch(GetById(id))
});

const Movie = connect(mapStateToProps, mapDispatchToProps)(MovieComponent)

export default withRouter(Movie)