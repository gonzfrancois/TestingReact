import * as React from 'react'
import { Todo } from './models'

interface Props extends StateProps, DispatchProps {

}

export interface StateProps {
    todos: Todo[]
}

export interface DispatchProps {
    onToggle : (id: number) => void
}

interface InternalState {
    newTodo: string
}

export default class TodoList extends React.Component<Props, InternalState> {
    constructor (props: Props) {
        super(props)

        this.state = {
            newTodo: ''
        }

        this._handleChange = this._handleChange.bind(this)
    }

    _handleChange(value: string) {
        this.setState({newTodo: value})
    }

    _clearInput() {
        this.setState({newTodo: ''})
    }

    _toggle(id: number) {
        this.props.onToggle(id)
    }

    render () {
        console.log("render", this.state, this.props)
        let { newTodo } = this.state
        return (
            <section className="main">
                <input className="toggle-all"
                       type="checkbox"
                />
                <ul className="todo-list">
                    {this.props.todos.map((todo, index) =>
                        <li key={index}
                            onClick={e => {
                                this._toggle(todo.id)
                            }}>
                            <span>{todo.title}</span>
                            <span>&nbsp;-&nbsp;</span>
                            <span>checked : {todo.completed ? 'oui' : 'non'}</span>
                            <span>{Math.random()}</span>
                        </li>
                    )}
                </ul>
            </section>
        )
    }
}