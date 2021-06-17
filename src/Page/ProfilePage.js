import React from 'react';

import ProfileMain from '../components/profile/ProfileMain';
import { useHistory } from 'react-router-dom';

import { useOktaAuth } from '@okta/okta-react';

const ProfilePage = () => {

    const history = useHistory();

    const { oktaAuth, authState } = useOktaAuth();
    
    if(!authState)
    {
        return null;
    }
    if( authState.isPending)
    return null;

    const login = async()=>history.push('/login');

    const logout = async()=>{
        console.log('oktaAuth = ',oktaAuth);
        console.log('authState',authState);
        oktaAuth.signOut();}
    return (
        <div>
            <ProfileMain></ProfileMain>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default ProfilePage
