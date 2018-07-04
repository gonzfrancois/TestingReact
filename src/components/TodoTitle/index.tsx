import * as React from 'react'

interface Props extends StateProps, DispatchProps {

}

export interface StateProps {
    todoCounter: number
}

export interface DispatchProps {

}

interface InternalState {

}

export default class TodoList extends React.Component<Props, InternalState> {
    constructor (props: Props) {
        super(props)

        this.state = { }
    }

    render () {
        return (
            <h2>
                <span>Cochées : {this.props.todoCounter}</span>
                <span>rd : {Math.random()}</span>
            </h2>
        )
    }
}