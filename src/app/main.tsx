import * as React from 'react'
import ReactDOM, {render} from 'react-dom'
import {Provider} from 'react-redux';
import store from '../store/store'
import Home from './home/HomeContainer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Movies from './Movies/MoviesContainer';

const history = createBrowserHistory()

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/movies" component={Movies} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('app') as Element
)