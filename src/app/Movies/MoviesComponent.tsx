import * as React from 'react'

interface Props extends StateProps, DispatchProps { }

export interface StateProps { }
export interface DispatchProps { }

interface InternalState { }

export default class Movies extends React.Component<Props, InternalState> {
    constructor (props: Props) {
        super(props)
    }

    render () {
        return (
            <section className="movies">
                <h3>Movies</h3>
            </section>
        )
    }
}