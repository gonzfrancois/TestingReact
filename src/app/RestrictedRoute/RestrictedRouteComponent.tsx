import * as React from "react"
import {Redirect, Route, RouteProps} from "react-router-dom"

export interface Props extends StateProps, DispatchProps, RouteProps { }

export interface StateProps {
    isLogged: boolean
}
export interface DispatchProps { }

interface InternalState { }

export default class PrivateRouteComponent extends React.Component<Props, InternalState> {
    constructor (props: Props) {
        super(props)
    }

    render () {
        console.log("render private route", this.props)
        const Component = this.props.component
        const { isLogged } = this.props

        if (!Component) {
            return null
        }

        if (isLogged) {
            const loc = this.props.location
            if(loc !== undefined && loc !== null){
                console.log(loc)
            }

            return <Route component={Component} />
        }

        const redirectProps = {
            to: {
                pathname: "/login",
                state: {from: this.props.location}
            }
        }

        return <Redirect {...redirectProps} />
    }
}