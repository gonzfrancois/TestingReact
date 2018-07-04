import { connect } from 'react-redux'
import TodoListComponent from './TodoList'
import TodoInputComponent from './TodoInput'
import TodoCounterComponent from './TodoCounter'
import * as React from 'react'

const AppTodo = () => {
    return (
        <section className="todoapp">
            <TodoCounterComponent/>
            <header className="header">
                <TodoInputComponent/>
            </header>
            <TodoListComponent />
        </section>
    )
}

const TodoAppComponent = connect()(AppTodo)

export default TodoAppComponent