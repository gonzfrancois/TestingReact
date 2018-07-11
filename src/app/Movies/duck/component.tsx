import * as React from 'react'
import {RouteComponentProps} from 'react-router-dom';
import {Movie} from './models';

interface Props extends StateProps, DispatchProps, RouteComponentProps<PathParamsProps> { }

export interface PathParamsProps {
    id:string
}

export interface StateProps {
    movies: Movie[]
}

export interface DispatchProps {
    GetMovies: () => void
}

interface InternalState {
    movies: Movie[]
}

export class ViewComponent extends React.Component<Props, InternalState> {
    constructor (props: Props) {
        super(props)

        this._navigateToMovie = this._navigateToMovie.bind(this)
    }

    componentDidMount(){
        this.props.GetMovies()
    }

    private _navigateToMovie(id: string) {
        this.props.history.push(`${this.props.location.pathname}/${id}`)
    }

    render () {
        const {movies} = this.props
        return (

            <section className="movies">
                <h3>Movies</h3>
                <table>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Year</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        movies.map((movie, index) => {
                            return (
                                <tr key={index} onClick={e => this._navigateToMovie(movie.imdbID)}>
                                    <td key={movie.imdbID + 'title'}>{movie.Title}</td>
                                    <td key={movie.imdbID + 'year'}>{movie.Year}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </section>
        )
    }
}