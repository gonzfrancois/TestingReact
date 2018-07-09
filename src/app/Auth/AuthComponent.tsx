///<reference path="../../../node_modules/@types/react-router/index.d.ts"/>
import * as React from 'react'
import {Redirect, withRouter} from 'react-router-dom';

interface Props extends StateProps, DispatchProps { }

export interface StateProps {
    isLogged: boolean
}
export interface DispatchProps {
    Login: (username: string, password: string) => void
}

interface InternalState {
    user: string,
    pwd: string
}

export default class Auth extends React.PureComponent<Props, InternalState> {
    constructor (props: Props) {
        super(props)

        this.state = {
            user: '',
            pwd: ''
        }

        this._handleChangeUser.bind(this._handleChangeUser)
        this._handleChangePwd.bind(this._handleChangePwd)
        this._submit.bind(this._submit)
    }

    _handleChangeUser(value: string) {
        this.setState({user: value})
    }

    _handleChangePwd(value: string) {
        this.setState({pwd: value})
    }

    _submit(){
        this.props.Login(this.state.user, this.state.pwd)
    }

    render () {
        if(this.props.isLogged){
            console.log("redirect", this.props)
            return (<Redirect to={'/'}/>)
        }
        return (
            <div id="login">
                <label htmlFor="username">user name :</label>
                <input type="text"
                       id="username"
                       name="firstname"
                       value={this.state.user}
                       onChange={e => this._handleChangeUser(e.target.value)}
                />
                    <br/>
                <input type="text"
                       id="pwd"
                       name="pwd"
                       value={this.state.pwd}
                       onChange={e => this._handleChangePwd(e.target.value)}
                />
                <button onClick={e => this._submit()}>
                    <span>Submit</span>
                </button>
            </div>
        )
    }
}
