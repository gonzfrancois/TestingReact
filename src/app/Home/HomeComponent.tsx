import * as React from 'react'
import Navbar from '../Navbar/container';
import Movies from '../Movies/container';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Auth from '../Auth/AuthContainer';
import RestrictedRoute from '../RestrictedRoute/container';
import MovieDetails from '../MovieDetails/container';

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
            <Router >
                <section className="App">
                    <h1>App</h1>
                    <Navbar/>
                    <Switch>
                        <Route path="/" exact component={()=> <h1>Welcome</h1>} />
                        <RestrictedRoute exact path="/movies" component={Movies}/>
                        <RestrictedRoute exact path="/movies/:id" component={MovieDetails} />
                        <Route path="/login" component={Auth} />
                    </Switch>
                </section>
            </Router>

        )
    }
}