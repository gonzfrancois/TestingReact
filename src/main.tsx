import * as React from 'react'
import ReactDOM, {render} from 'react-dom'
import {Provider} from 'react-redux';

import store from './store/store'

import TodoAppComponent from './store/containers/TodoApp';

ReactDOM.render(
    <Provider store={store}>
        <TodoAppComponent/>
    </Provider>,
    document.getElementById('app') as Element
)