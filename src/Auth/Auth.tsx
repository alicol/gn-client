import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import UserLogin from './UserLogin';
import UserSignup from './UserSignup';
import AdminLogin from './AdminLogin';

export interface AuthProps {

}

const Auth: React.SFC<AuthProps> = () => {
    return (
        <div className="NavLinks">
            <h6>The String Section Presents</h6>
            <h1>Triva Night!</h1>
            <Router>
                <div>
                    <button><Link to="/UserLogin">Login!</Link></button>
                    <button><Link to="/UserSignup">Sign Up!</Link></button>
                    <button><Link to="/AdminLogin">Admin Login</Link></button>
                    <hr />
                    <Switch>
                        <Route exact path='/UserLogin' component={UserLogin} />
                        <Route exact path='/UserSignup' component={UserSignup}/>
                        <Route exact path='/AdminLogin' component={AdminLogin}/>
                    </Switch>
                </div>
            </Router>
        </div>);
}

export default Auth;