import * as React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import {I18nextProvider} from 'react-i18next'
import instance from "./i18n";
import store from './store'
import Home from './Home/HomeContainer'

ReactDOM.render(
    <Provider store={store}>
        <I18nextProvider i18n={instance}>
            <Home/>
        </I18nextProvider>
    </Provider>,
    document.getElementById('app') as Element
)