import * as React from 'react'
import {Link} from 'react-router-dom';

interface Props extends StateProps, DispatchProps { }

export interface StateProps { }
export interface DispatchProps { }

interface InternalState { }

export class ViewComponent extends React.Component<Props, InternalState> {
    constructor (props: Props) {
        super(props)
    }

    render () {
        return (
            <section className="navBar">
                <h2>Navbar</h2>
                <ul>
                    <li>
                        <Link to={`/login`}>Login</Link>
                    </li>
                    <li>
                        <Link to={`/movies`}>Movies</Link>
                    </li>
                </ul>
            </section>
        )
    }
}