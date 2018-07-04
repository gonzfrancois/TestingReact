import * as React from 'react'

interface Props extends StateProps, DispatchProps {

}

export interface StateProps {
    todo: {
        id: number,
        title: string,
        completed: boolean
    }
}

export interface DispatchProps {
    onClick: (id: number) => void
}

interface InternalState {

}

export default class TodoItem extends React.Component<Props, InternalState> {
    constructor (props: Props) {
        super(props)

        this.state = { }
    }

    render () {
        let {todo} = this.props
        return (
            <li key={todo.id}
                onClick={e => this.props.onClick(todo.id)}>
                <span>{todo.title}</span>
                <span>&nbsp;-&nbsp;</span>
                <span>checked : {todo.completed ? 'oui' : 'non'}</span>
                <span>{Math.random()}</span>

            </li>
        )
    }
}