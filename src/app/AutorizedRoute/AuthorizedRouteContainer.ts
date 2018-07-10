import { connect } from 'react-redux'
import ProtectedRouteComponent, {ProtectedRouteProps} from './AuthorizedRouteComponent';
import {State} from '../rootReducer';
import {RouteProps} from 'react-router';

const mapStateToProps = (state: State, ownProps: RouteProps): ProtectedRouteProps => ({
    ...ownProps,
    isAuthenticated: state.user.isLogged
});

const AuthorizedRoute = connect(mapStateToProps)(ProtectedRouteComponent)

export default AuthorizedRoute



