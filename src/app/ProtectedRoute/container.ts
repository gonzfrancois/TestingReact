import { connect } from 'react-redux'
import * as ProtectedRouteComponent from './duck';
import {State} from '../rootReducer';
import {RouteProps, withRouter} from 'react-router';

const mapStateToProps = (state: State, ownProps: RouteProps): ProtectedRouteComponent.ProtectedRouteProps => ({
    ...ownProps,
    isAuthenticated: state.userState.isLogged,
    authenticationPath: '/login'
});

const ProtectedRoute = connect(mapStateToProps)(ProtectedRouteComponent.ViewComponent)






