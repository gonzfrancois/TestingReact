import * as React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import store from './store'
import Home from './Home/HomeContainer';

ReactDOM.render(
    <Provider store={store}>
        <Home/>
    </Provider>,
    document.getElementById('app') as Element
)