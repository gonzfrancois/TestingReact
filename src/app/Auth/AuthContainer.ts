import { connect } from 'react-redux'
import AuthComponent, {DispatchProps, StateProps} from './AuthComponent';
import {Dispatch} from 'redux';
import {login, logout} from './duck/actions';

const mapStateToProps = (state: any): StateProps => ({
    isLogged: state.user.isLogged
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    Login: (username: string, password: string) => dispatch(login(username, password)),
    Logout: () => dispatch(logout())
});

const Auth = connect(mapStateToProps, mapDispatchToProps)(AuthComponent)

export default Auth

