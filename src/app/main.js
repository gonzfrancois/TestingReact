import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './Home/HomeContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Movies from './Movies/MoviesContainer';
import Auth from './Auth/AuthContainer';
import RestrictedRoute from './RestrictedRoute/RestrictedRouteContainer';
var history = createBrowserHistory();
ReactDOM.render(React.createElement(Provider, { store: store },
    React.createElement(Router, null,
        React.createElement(Switch, null,
            React.createElement(Route, { path: "/", exact: true, component: Home }),
            React.createElement(RestrictedRoute, { path: "/movies", component: Movies }),
            React.createElement(Route, { path: "/login", component: Auth })))), document.getElementById('app'));
//# sourceMappingURL=main.js.map