import * as React from 'react'
import Navbar from '../../Navbar/container';
import Movies from '../../Movies/container';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Auth from '../../Auth/container';
import RestrictedRoute from '../../RestrictedRoute/container';
import MovieDetails from '../../MovieDetails/container';
import {t} from 'i18next';
interface Props extends StateProps, DispatchProps { }

export interface StateProps { }
export interface DispatchProps { }

interface InternalState { }

export class ViewComponent extends React.Component<Props, InternalState> {
    constructor (props: Props) {
        super(props)
    }

    render () {
        return (
            <Router >
                <section className="App">
                    <h1>{t('@HEADER')}</h1>
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