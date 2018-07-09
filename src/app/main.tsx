import * as React from 'react'
import ReactDOM, {render} from 'react-dom'
import {Provider} from 'react-redux';
import store from '../store/store'
import Home from './home/HomeContainer';

ReactDOM.render(
    <Provider store={store}>
        <Home/>
    </Provider>,
    document.getElementById('app') as Element
)