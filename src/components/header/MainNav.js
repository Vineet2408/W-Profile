import React from 'react'
import { Header } from '@workday/canvas-kit-labs-react-header';
import { IconButton } from '@workday/canvas-kit-react-button';
import { Avatar } from '@workday/canvas-kit-react-avatar';
import { notificationsIcon } from '@workday/canvas-system-icons-web';
import { Button } from '@workday/canvas-kit-react-button';


const MainNav = () => {
    return (
        <Header title="Profile" brandUrl="/home">

            <Avatar
                onClick={() => {
                    alert('clicked avatar');
                }}
                altText="Profile"
            />
        </Header>
    );
}

export default MainNav;
