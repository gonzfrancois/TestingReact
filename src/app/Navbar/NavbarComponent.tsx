import * as React from 'react'
import {Link, Route} from 'react-router-dom';
import Movies from '../Movies/MoviesContainer';
import RestrictedRoute from '../RestrictedRoute/RestrictedRouteContainer';

interface Props extends StateProps, DispatchProps { }

export interface StateProps { }
export interface DispatchProps { }

interface InternalState { }

export default class Navbar extends React.Component<Props, InternalState> {
    constructor (props: Props) {
        super(props)
    }

    render () {
        return (
            <section className="navBar">
                <h2>Navbar</h2>
                <ul>
                    <li>
                        <Link to={`/login`}>Login</Link>
                    </li>
                    <li>
                        <Link to={`/movies`}>Movies</Link>
                    </li>
                </ul>
            </section>
        )
    }
}