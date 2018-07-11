import * as React from 'react'
import {RouteComponentProps} from 'react-router';
import {emptyMovieDetails, MovieDetails} from './models';

interface Props extends StateProps, DispatchProps, RouteComponentProps<PathParamsProps> { }

export interface PathParamsProps {
    id: string,
}

export interface StateProps {
    movie: MovieDetails
}

export interface DispatchProps {
    GetMovie: (id:string) => void,
    Reset: () => void
}

interface InternalState {

}

export class ViewComponent extends React.Component<Props, InternalState> {
    constructor (props: Props) {
        super(props)
    }

    componentDidMount() {
        this.props.GetMovie(this.props.match.params.id)
    }

    componentWillUnmount() {
        this.props.Reset()
    }

    render () {
        const movie = this.props.movie || emptyMovieDetails
        return (
            <section className="movie">
                <h3>{movie.Title}</h3>
                <ul>
                    <li>
                        <span>Director&nbsp;:&nbsp;</span>
                        <span>{movie.Director}</span>
                    </li>
                    <li>
                        <span>Date&nbsp;:&nbsp;</span>
                        <span>{movie.Released}</span>
                    </li>
                    <li>
                        <span>Poster</span>
                        <img src={movie.Poster} alt='Poster'></img>
                    </li>
                </ul>
            </section>
        )
    }
}