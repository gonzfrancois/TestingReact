import * as React from 'react'

interface Props extends StateProps, DispatchProps {

}

export interface StateProps {

}

export interface DispatchProps {
    onSubmit: (title: string) => void
}

interface InternalState {
    newTodo: string
}

export default class TodoInput extends React.Component<Props, InternalState> {
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

    _submit(){
        this.props.onSubmit(this.state.newTodo)
        this._clearInput()
    }

    _clearInput() {
        this.setState({newTodo: ''})
    }

    render () {
        console.log("render", this.state, this.props)
        let { newTodo } = this.state

        return (
            <input className="new-todo"
                   placeholder="What needs to be done?"
                   value={newTodo}
                   onChange={e=> this._handleChange(e.target.value)}
                   onKeyPress={e =>{
                       if(e.key === 'Enter'){
                           this._submit()
                       }
                   }}
            />
        )
    }
}