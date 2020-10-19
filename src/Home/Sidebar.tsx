import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
//import Home from './Home';
import NewGameSetup from './NewGameSetup';
import ViewScores from './ViewScores';
import Gameplay from './Gameplay';
import './sidebar.css'
import { Button, makeStyles, Theme, createStyles } from '@material-ui/core';
import UserTable from '../Admin/UserTable';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        fontSize: '1vw',
        margin: '1vw',
        color: 'black',
        fontWeight: 'bold',
        border: '3px solid gray',
        borderRadius: '.2em',
        fontFamily: 'Roboto',
        width: '10vw',
        height: '3vw',
        textDecoration: 'none',
    }
}))

export interface SidebarProps {
    token: any,
    clearToken: any,
    updateToken: any
}

const Sidebar = (props:SidebarProps) => {
  
    const [postTriviaTopic, setPostTriviaTopic] = useState("Movies");
    const [postDifficulty, setPostDifficulty] = useState("Medium");
    const [permission, setPermission] =useState<any>("");
    const classes = useStyles();
    const adminView = () => {
        console.log(localStorage.getItem("permission"));
        if (localStorage.getItem("permission") == "admin") {
            return (<div><p>Admin View</p> <button className="startButton startButtonCircle"><Link to="/UserTable" className="link">Edit Users</Link></button></div>)
        }

    }
    useEffect(() => {
        if(permission !== localStorage.getItem("permission"))
        {setPermission(localStorage.getItem("permission"))};
    }, []);
   
    

    return (
        <div>

            <h1>Trivia Night</h1>
            <Router>
                <div>

                    {/* <li><Link to="/">Home</Link></li>  */}
                    <button className="startButton startButtonCircle"><Link to="/NewGameSetup" className="link">Start New Game</Link></button>

                    <button className="startButton startButtonCircle"><Link to="/ViewScores" className="link">View Past Games</Link></button>
                    {adminView()}
                </div>
                <div className="sidebar-route">
                    <Switch>
                        {/* <Route exact path='/'><Home /></Route> */}
                        <Route exact path='/NewGameSetup'><NewGameSetup token={props.token} postDifficulty={postDifficulty} postTriviaTopic={postTriviaTopic} setPostDifficulty={setPostDifficulty} setPostTriviaTopic={setPostTriviaTopic} /></Route>
                        <Route exact path='/ViewScores'><ViewScores token={props.token} /></Route>
                        {/* <Route exact path='/Gameplay'><GamePlay /></Route> */}
                        <Route exact path='/UserTable'><UserTable token={props.token} /></Route>
                    </Switch>

                </div>
            </Router>
            <div className="copyAndLogOut">

                <p className="copyright">2020 © <i>The String Section</i>: Alison Colglazier, Adam Martin, Jamie Coakley</p>

                <Button onClick={props.clearToken} className={classes.root} variant="contained">LOG OUT</Button>
            </div>
        </div>

    );
}

export default Sidebar;

