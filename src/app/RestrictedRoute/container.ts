import { connect } from 'react-redux'
import PrivateRouteComponent, {StateProps} from './duck/component';
import {State} from '../rootReducer';
import {RouteProps} from 'react-router';
import {login, logout} from '../Auth/duck/actions';
import {DispatchProps} from '../Auth/AuthComponent';
import {Dispatch} from 'redux'

const mapStateToProps = (state: State, ownProps: RouteProps): StateProps => ({
    ...ownProps,
    isLogged: state.userState.isLogged
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    Login: (username: string, password: string) => dispatch(login(username, password)),
    Logout: () => dispatch(logout())
});

const RestrictedRoute = connect(mapStateToProps, mapDispatchToProps)(PrivateRouteComponent)

export default RestrictedRoute



