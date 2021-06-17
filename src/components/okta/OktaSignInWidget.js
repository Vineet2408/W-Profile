import React, {useRef,useEffect} from 'react';
import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';


const OktaSignInWidget = ({config,onSuccess,OnError}) => {

    const widgetRef = useRef();

    useEffect(()=>{

        if(!widgetRef.current)
        return false;

        const widget = new OktaSignIn(config);

        widget.showSignInToGetTokens({el:widgetRef.current}).then(onSuccess).catch(OnError);

        return ()=>widget.remove();

    },[config,onSuccess,OnError])


    return (
        <div ref={widgetRef}>
            
        </div>
    )
}

export default OktaSignInWidget;
