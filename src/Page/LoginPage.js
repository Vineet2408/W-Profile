import React,{Fragment} from 'react';

import Login from '../components/okta/Login';

const LoginPage = ({config}) => {
    return (
        <Fragment>
            <Login config={config}></Login>
        </Fragment>
    )
}

export default LoginPage
