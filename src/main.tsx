import * as React from 'react'
import ReactDOM, {render} from 'react-dom'

import TodoList from './components/todoList/component'
import {Provider} from 'react-redux';

import {default as store} from './store/store'

ReactDOM.render(
    <Provider store={store}>
        <TodoList />
    </Provider>,
    document.getElementById('app') as Element
)