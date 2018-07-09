import { connect } from 'react-redux'
import PrivateRouteComponent, {Props} from './RestrictedRouteComponent';
import {State} from '../rootReducer';
import {RouteProps} from 'react-router';

const mapStateToProps = (state: State, ownProps: RouteProps): Props => ({
    ...ownProps,
    isLogged: state.user.isLogged
});

const RestrictedRoute = connect(mapStateToProps)(PrivateRouteComponent)

export default RestrictedRoute



