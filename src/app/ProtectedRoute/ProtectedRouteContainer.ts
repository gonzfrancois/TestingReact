import { connect } from 'react-redux'
import ProtectedRouteComponent, {ProtectedRouteProps} from './ProtectedRouteComponent';
import {State} from '../rootReducer';
import {RouteProps, withRouter} from 'react-router';
import {login} from '../Auth/duck/actions';

import {Dispatch} from 'redux'

const mapStateToProps = (state: State, ownProps: RouteProps): ProtectedRouteProps => ({
    ...ownProps,
    isAuthenticated: state.user.isLogged,
    authenticationPath: '/login'
});

// const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
//     //Login: (username: string, password: string) => dispatch(login(username, password))
// });

const ProtectedRoute = connect(mapStateToProps)(ProtectedRouteComponent)

// export default ProtectedRoute



