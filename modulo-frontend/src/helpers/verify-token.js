import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        let token = "";
        token = localStorage.getItem("token");
        if (!token) {
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }

        return <Component {...props} />
    }} />
)

export default PrivateRoute