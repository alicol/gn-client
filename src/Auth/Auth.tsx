import React from 'react';
import UserSignup from './UserSignup';
import UserLogin from './UserLogin'



export interface AuthProps {

}

const Auth: React.SFC<AuthProps> = () => {
    return (<div className="auth-container">
       <UserLogin/>
       <UserSignup/>
    </div>);
}

export default Auth;