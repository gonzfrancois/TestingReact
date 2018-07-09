import * as React from 'react'
import ReactDOM, {render} from 'react-dom'
import {Provider} from 'react-redux';
import store from './store'
import Home from './Home/HomeContainer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Movies from './Movies/MoviesContainer';
import Auth from './Auth/AuthContainer';
import RestrictedRoute from './RestrictedRoute/RestrictedRouteContainer';

const history = createBrowserHistory()

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <RestrictedRoute path="/movies" component={Movies} />
                <Route path="/login" component={Auth} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('app') as Element
)