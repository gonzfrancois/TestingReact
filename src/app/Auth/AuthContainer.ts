import { connect } from 'react-redux'
import AuthComponent, {DispatchProps, StateProps} from './AuthComponent';
import {State} from '../rootReducer';
import {Dispatch} from 'redux';
import {login} from './duck/actions';

const mapStateToProps = (state: State): StateProps => ({
    isLogged: state.user.isLogged
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    Login: (username: string, password: string) => dispatch(login(username, password))
});

const Auth = connect(mapStateToProps, mapDispatchToProps)(AuthComponent)

export default Auth

