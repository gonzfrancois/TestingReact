import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './Home/HomeContainer';
ReactDOM.render(React.createElement(Provider, { store: store },
    React.createElement(Home, null)), document.getElementById('app'));
//# sourceMappingURL=main.js.map