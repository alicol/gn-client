import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import UserLogin from './UserLogin';
import UserSignup from './UserSignup';

import './auth.css';
import { Button } from '@material-ui/core';
import lime from '@material-ui/core/colors';


export interface AuthProps {
    token: string,
    updateToken: any
}

const Auth: React.SFC<AuthProps> = (props: AuthProps) => {
    return (
        <div className="NavLinks">
            
            <h3>∫ The String Section ∫</h3>
            <p className="presents">PROUDLY PRESENTS</p>
            <h1>Trivia Night</h1>
            <Router>
                <div>
                    <Button variant="contained" color="primary"><Link to="/UserSignup">Sign Up!</Link></Button>
                    <Button variant="contained" color="secondary"><Link to="/UserLogin">Login!</Link></Button>
                    
                    <hr />
                    <Switch>
                        <Route exact path='/UserLogin'><UserLogin updateToken={props.updateToken}/></Route> 
                        <Route exact path='/UserSignup'><UserSignup updateToken={props.updateToken}/></Route>

                    </Switch>
                </div>
            </Router>
        </div>);
}
export default Auth;