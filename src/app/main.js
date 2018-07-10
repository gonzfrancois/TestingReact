import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './Home/HomeContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
var history = createBrowserHistory();
ReactDOM.render(React.createElement(Provider, { store: store },
    React.createElement(Router, null,
        React.createElement(Switch, null,
            React.createElement(Route, { path: "/", component: Home })))), document.getElementById('app'));
//# sourceMappingURL=main.js.map