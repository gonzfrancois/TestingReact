import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import instance from "./i18n";
import store from './store';
import Home from './Home/HomeContainer';
ReactDOM.render(React.createElement(Provider, { store: store },
    React.createElement(I18nextProvider, { i18n: instance },
        React.createElement(Home, null))), document.getElementById('app'));
//# sourceMappingURL=main.js.map