import * as React from 'react'
import {BrowserRouter as Router } from 'react-router-dom'

interface Props extends StateProps, DispatchProps { }

export interface StateProps {
    Logout: () => void
}
export interface DispatchProps { }

interface InternalState { }

export default class Movies extends React.Component<Props, InternalState> {
    constructor (props: Props) {
        super(props)
    }

    render () {
        return (
            <section className="movies">
                <h3 onClick={e => this.props.Logout()}>Exit</h3>
            </section>
        )
    }
}