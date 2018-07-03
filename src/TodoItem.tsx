import * as React from 'react'
import { Todo } from './interfaces'
import * as cx from 'classnames'

interface Props {
  todo: Todo,
  onToggle: (todo: Todo) => void,
  onDestroy: (todo: Todo) => void
  onUpdate: (todo: Todo, title: string) => void
}

interface State {
  editing: boolean,
  title: string
}

export default class TodoItem extends React.PureComponent<Props, State> {
  // Use it only if extend React.Component => this is by default for PureComponent
  // shouldComponentUpdate ({ todo }: Props, state: State) {
  //   return todo !== this.props.todo
  // }

  constructor (props: Props) {
    super(props)
    this.state = {
      editing: false,
      title: ''
    }
  }

    // <li className={cx({ todo.completed, editing })}>
    // <li className={ editing ? 'editing' : (todo.completed ? 'completed' : '') }>
  render () {
    let { todo } = this.props
    let { editing, title } = this.state
    return (
        <li className={cx({ completed: todo.completed, editing: editing })}>
            <div className="view">
                <input className="toggle" type="checkbox" onChange={this.toggle} checked={todo.completed}/>
                <label onDoubleClick={this.startEditing}>{ todo.title }</label>
                <button className="destroy" onClick={ this.destroy }></button>
            </div>
            <input className="edit"
                   type="text"
                   value={title}
                   onBlur={this.handleSubmit}
                   onKeyDown={this.handleKeyDown}
                   onInput={this.handleInput}
            />
        </li>
    )
  }

  toggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onToggle(this.props.todo)
  }

  destroy = (e: React.MouseEvent<HTMLButtonElement>) => {
    this.props.onDestroy(this.props.todo)
  }

  startEditing = (e: React.MouseEvent<HTMLLabelElement>) => {
    this.setState({ editing: true, title: this.props.todo.title })
  }

  handleSubmit = () => {
    this.props.onUpdate(this.props.todo, this.state.title)
    this.setState({ editing: false })
  }

  handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      this.setState({ editing: false })
    } else if (e.key === 'Enter') {
      this.handleSubmit()
    }
  }

  handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ title: (e.target as HTMLInputElement).value })
  }
}
