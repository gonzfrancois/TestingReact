import { connect } from 'react-redux'
import PrivateRouteComponent, {StateProps} from './RestrictedRouteComponent';
import {State} from '../rootReducer';
import {RouteProps} from 'react-router';
import {login} from '../Auth/duck/actions';
import {DispatchProps} from '../Auth/AuthComponent';
import {Dispatch} from 'redux'

const mapStateToProps = (state: State, ownProps: RouteProps): StateProps => ({
    ...ownProps,
    isLogged: state.user.isLogged
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    Login: (username: string, password: string) => dispatch(login(username, password))
});

const RestrictedRoute = connect(mapStateToProps, mapDispatchToProps)(PrivateRouteComponent)

export default RestrictedRoute



