import React from 'react';
import { Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
    
    <Route {...rest} render={props => {
        let token = "";
        token = localStorage.getItem("token");
        if (!token) {
            window.location.reload()
        }

        return <Component {...props} />
    }} />
)

export default PrivateRoute