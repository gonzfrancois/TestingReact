import * as React from 'react'
import Navbar from '../navbar/NavbarContainer';
import Movies from '../Movies/MoviesContainer';
import { BrowserRouter as Router, Route, Link, match } from "react-router-dom";


interface Props extends StateProps, DispatchProps { }

export interface StateProps { }
export interface DispatchProps { }

interface InternalState { }

export default class Home extends React.Component<Props, InternalState> {
    constructor (props: Props) {
        super(props)

    }

    render () {
        return (
            <section className="App">
                <h1>App</h1>
                <Navbar/>
                <Movies/>
            </section>
        )
    }
}