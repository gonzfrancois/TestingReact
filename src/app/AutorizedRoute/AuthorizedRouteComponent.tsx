import * as React from 'react';
import {Route, RouteProps} from 'react-router';

export interface ProtectedRouteProps extends RouteProps {
    isAuthenticated: boolean;
}

export default class AuthorizedRouteComponent extends Route<ProtectedRouteProps> {
    public render() {
        if (!this.props.isAuthenticated) {
            return <Route render={undefined}/>;
        }
        return <Route {...this.props}/>;
    }
}