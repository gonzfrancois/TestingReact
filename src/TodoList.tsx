import React from 'react'
import TodoStore from './TodoStore'
import { Todo } from './interfaces'
import TodoItem from './TodoItem'
import * as cx from 'classnames'

console.log(React)

type filterOptions = 'all' | 'completed' | 'active'

const Filters = {
  completed: (todo: Todo) => todo.completed,
  active: (todo: Todo) => !todo.completed,
  all: (todo: Todo) => true
}

interface TodoListProps {

}

interface TodoListState {
  todos: Todo[],
  newTodo: string,
  filter: filterOptions
}

export default class TodoList extends React.PureComponent<TodoListProps, TodoListState> {
  private store: TodoStore = new TodoStore()
  private toggleTodo: (todo: Todo) => void
  private destroyTodo: (todo: Todo) => void
  private updateTodo: (todo: Todo, title: string) => void
  private clearCompleted: () => void

  constructor (props: TodoListProps) {
    super(props)

    this.state = {
      todos: [],
      newTodo: '',
      filter: 'all'
    }

    this.store.onChange((s) => {
      this.setState({ todos: s.todos })
    })

    this.toggleTodo = this.store.toggleTodo.bind(this.store)
    this.destroyTodo = this.store.removeTodo.bind(this.store)
    this.updateTodo = this.store.updateTitle.bind(this.store)
    this.clearCompleted = this.store.clearCompleted.bind(this.store)
  }

  get remainingCount (): number {
    return this.state.todos.reduce((count, todo) => !todo.completed ? count + 1 : count, 0)
  }

  componentDidMount () {
    this.store.addTodo('Salut')
    this.store.addTodo('Le monde')
  }

  updateNewTodo = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ newTodo: (e.target as HTMLInputElement).value })
  }

  addTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      this.store.addTodo(this.state.newTodo)
      this.setState({ newTodo: '' })
    }
  }

  setFilter = (filter: filterOptions) => {
    return (e: React.MouseEvent<HTMLElement>) => {
      this.setState({ filter: filter })
    }
  }

  render () {
    let { todos, newTodo, filter } = this.state
    let remaining = this.remainingCount
    let todosFiltered = todos.filter(Filters[filter])

    return (
        <section className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <input className="new-todo"
                       placeholder="What needs to be done?"
                       value={newTodo}
                       onInput={this.updateNewTodo}
                       onKeyPress={this.addTodo}
                />
            </header>
            <section className="main">
                <input className="toggle-all"
                       type="checkbox"
                />
                <ul className="todo-list">
                {todosFiltered.map(todo => {
                  return <TodoItem
                      todo={todo}
                      key={todo.id}
                      onToggle={this.toggleTodo}
                      onDestroy={this.destroyTodo}
                      onUpdate={this.updateTodo}
                  />
                })}
                </ul>
            </section>
            <footer className="footer">
                {remaining > 0 && <span className="todo-count">
                    <strong>{remaining}</strong>
                    <span> </span>
                    <span>item{remaining > 1 && 's'}</span>
                    <span> left</span>
                </span>}
                <ul className="filters">
                    <li>
                        <a href="#/" className={cx({ selected: filter === 'all' })} onClick={this.setFilter('all')}>All</a>
                    </li>
                    <span> </span>
                    <li>
                        <a href="#/active" className={cx({ selected: filter === 'active' })} onClick={this.setFilter('active')}>Active</a>
                    </li>
                    <span> </span>
                    <li>
                        <a href="#/completed" className={cx({ selected: filter === 'completed' })} onClick={this.setFilter('completed')}>Completed</a>
                    </li>
                </ul>
                <button className="clear-completed"
                        onClick={this.clearCompleted}
                >Clear completed</button>
            </footer>
        </section>
    )
  }
}
