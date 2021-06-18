


import React from 'react';
import OktaSignInWidget from './OktaSignInWidget';
import { Redirect } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';



const Login = ({config}) => {

    const { oktaAuth, authState } = useOktaAuth();

    const onSuccess = (tokens) => {
        console.log("tokens = ",tokens);
        console.log("okatauth = ",oktaAuth);
        oktaAuth.handleLoginRedirect(tokens);
    };

    const onError = (err) => {
        console.log('error logging in', err);
    };

    if(!authState)
    {
        return null;
    }

    if (authState.isPending) return null;

    return (
         authState.isAuthenticated ?
        <Redirect to={{ pathname: '/profile' }} /> :
        <OktaSignInWidget
            config={config}
            onSuccess={onSuccess}
            onError={onError}
        />
    );
}

export default Login;















