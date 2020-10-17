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
import { Button, makeStyles, createStyles, Theme } from '@material-ui/core'; 

export interface AuthProps {
    token: string,
    updateToken: any,
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        fontSize: '3vw',
        marginLeft: '6vw',
        marginRight: '6vw',
        marginBottom: '1vw',
        marginTop: '1vw',
        color: 'black',
        fontWeight: 'bold',
        border: '3px solid white',
        borderRadius: '.2em',
        fontFamily: 'Roboto',
        width: '20vw',
        height: '5vw',
        textDecoration: 'none',
     }
 }))


const Auth: React.SFC<AuthProps> = (props: AuthProps) => {
    const classes = useStyles();

    return (
        <div className="NavLinks">
            <h3>∫ The String Section ∫</h3>
            <p className="presents">PROUDLY PRESENTS</p>
            <h1>Trivia Night</h1>
            <Router>
                <div>
                    <hr />
                    <Link to="/UserSignup" style={{ textDecoration: 'none' }}><Button variant="contained" color="primary" size="large" className={classes.root}>Sign Up</Button></Link>
                    <Link to="/UserLogin" style={{ textDecoration: 'none' }}><Button variant="contained" color="secondary" size="large" className={classes.root}>Log In</Button></Link>
                    
                    <hr />
                    <Switch>
                        <Route exact path='/UserLogin'><UserLogin updateToken={props.updateToken}/></Route> 
                        <Route exact path='/UserSignup'><UserSignup updateToken={props.updateToken}/></Route>

                    </Switch>
                </div>
            </Router>
            <p className="copyright">2020 © <i>The String Section</i>: Alison Colglazier, Adam Martin, Jamie Coakley</p>
        </div>);
}
export default Auth;