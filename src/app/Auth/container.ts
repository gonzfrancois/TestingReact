import { connect } from 'react-redux'
import {Dispatch} from 'redux';
import * as AuthComponent from './duck';

const mapStateToProps = (state: any): AuthComponent.StateProps => ({
    isLogged: state.userState.isLogged
});

const mapDispatchToProps = (dispatch: Dispatch): AuthComponent.DispatchProps => ({
    Login: (username: string, password: string) => dispatch(AuthComponent.login(username, password)),
    Logout: () => dispatch(AuthComponent.logout())
});

const Auth = connect(mapStateToProps, mapDispatchToProps)(AuthComponent.ViewComponent)

export default Auth

