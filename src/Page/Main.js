
import React, { Fragment } from 'react';
import { Route, useHistory, Switch,Link } from 'react-router-dom';

import { SecureRoute, Security, LoginCallback } from '@okta/okta-react';

import { toRelativeUrl, OktaAuth } from '@okta/okta-auth-js';
import { useOktaAuth } from '@okta/okta-react';


import { oktaAuthConfig, oktaSignInConfig } from '../Config/config';
import ProfilePage from './ProfilePage';
import LoginPage from './LoginPage';

const oktaAuth = new OktaAuth(oktaAuthConfig);

const Main = () => {


    const history = useHistory();

    const customAuthHandler = () => {
        history.push('/login');
    };

    const restoreOriginalUri = async (_oktaAuth, originalUri) => {
        history.replace(toRelativeUrl(originalUri, window.location.origin));
    };

    return (

        <Fragment>
            <Security
                oktaAuth={oktaAuth}
                restoreOriginalUri={restoreOriginalUri}
                onAuthRequired={customAuthHandler}
            >
                <Switch>
                    <Route exact path="/">
                    <Link to="/profile">Go to /profile</Link>
                    <br></br>
                    <Link to="/">Go to home</Link>
                    <br></br>
                    <Link to="/login">Go to login</Link>
                    <br></br>
                    </Route>
                    <SecureRoute path="/profile">
                        <ProfilePage></ProfilePage>
                    </SecureRoute>
                    <Route path="/login">
                        <LoginPage config={oktaSignInConfig}></LoginPage>
                    </Route>
                    <Route path='/login/callback' component={LoginCallback} />
                </Switch>

            </Security>
            <Link to="/">Go to /</Link>
        </Fragment>

    )
}

export default Main









