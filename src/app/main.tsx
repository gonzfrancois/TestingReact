import * as React from 'react'
import ReactDOM, {render} from 'react-dom'
import {Provider} from 'react-redux';
import store from './store'
import Home from './Home/HomeContainer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory()

ReactDOM.render(
    <Provider store={store}>
        <Router >
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('app') as Element
)