import React from 'react'
import { Todo } from './models'
import store from '../../store/store'
import {addTodo, toggleTodo} from './actions';

export interface TodoListProps {

}

export interface TodoListState {
    newTodo: string,
    todos: Todo[]
}

export default class TodoList extends React.Component<TodoListProps, TodoListState> {
    private unsubscribe: () => void

    constructor (props: TodoListProps) {
        super(props)

        this.state = {
            newTodo: '',
            todos: []
        }

        this._handleChange = this._handleChange.bind(this)
        this._toggleTodo = this._toggleTodo.bind(this)
        this._submit = this._submit.bind(this)

        this.unsubscribe = () => {}
    }

    componentDidMount () {
        this.unsubscribe = store.subscribe(() => {
            this.setState({
                newTodo: '',
                todos: store.getState().todos
            })
        })
    }

    componentWillUnmount () {
        this.unsubscribe
    }

    _handleChange(value: string) {
        this.setState({newTodo: value})
    }

    _toggleTodo(id: number) {
        store.dispatch(toggleTodo(id))
    }

    _submit(title: string) {
        store.dispatch(addTodo(title))
    }

    render () {
        let { newTodo } = this.state

        return (
            <section className="todoapp">
                <header className="header">
                    <h1>todos</h1>
                    <input className="new-todo"
                           placeholder="What needs to be done?"
                           value={newTodo}
                           onChange={e=> this._handleChange(e.target.value)}
                           onKeyPress={e =>{
                               if(e.key === 'Enter'){
                                   this._submit(newTodo)
                               }
                           }}
                    />
                </header>
                <section className="main">
                    <input className="toggle-all"
                           type="checkbox"
                    />
                    <ul className="todo-list">
                        {this.state.todos.map((todo, index) =>
                            <li key={index}
                                onClick={e => {
                                    this._toggleTodo(todo.id)
                                }}>
                                <span>{todo.title}</span>
                                <span>checked : {todo.completed ? 'oui' : 'non'}</span>
                            </li>
                        )}
                    </ul>
                </section>
            </section>
        )
    }
}