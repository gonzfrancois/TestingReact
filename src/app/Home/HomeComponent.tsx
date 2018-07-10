import * as React from 'react'
import Navbar from '../Navbar/NavbarContainer';
import Movies from '../Movies/MoviesContainer';
import {Route, Switch} from 'react-router';
import Auth from '../Auth/AuthContainer';
import RestrictedRoute from '../RestrictedRoute/RestrictedRouteContainer';
import Movie from '../Movies/Movie/MovieComponent';

interface Props extends StateProps, DispatchProps { }

export interface StateProps { }
export interface DispatchProps { }

interface InternalState { }

export default class Home extends React.Component<Props, InternalState> {
    constructor (props: Props) {
        super(props)

    }

    render () {
        return (
            <section className="App">
                <h1>App</h1>
                <Navbar/>
                <Switch>
                    <RestrictedRoute exact path="/movies" component={Movies}/>
                    <RestrictedRoute exact path={"/movies/:id"} component={Movie} />
                    <Route path="/login" component={Auth} />
                </Switch>
            </section>
        )
    }
}