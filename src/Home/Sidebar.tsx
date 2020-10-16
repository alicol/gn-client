import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
//import Home from './Home';
import NewGameSetup from './NewGameSetup';
import ViewScores from './ViewScores';
import Gameplay from './Gameplay';
import './sidebar.css'



export interface SidebarProps {
    token: any,
    clearToken: any,
    updateToken: any
}

const Sidebar = (props:SidebarProps) => {
  
    const [postTriviaTopic, setPostTriviaTopic] = useState("");
    const [postDifficulty, setPostDifficulty] = useState("Medium");

    return ( 
        <div>
            <h1>Trivia Night</h1>
           
        <div>
           {/* <li><Link to="/">Home</Link></li>  */}
           <button className="startButton startButtonCircle"><Link to="/NewGameSetup" className="link">Start New Game</Link></button>
           
           <button className="startButton startButtonCircle"><Link to="/ViewScores" className="link">View Past Games</Link></button>
        </div>
        <div className="sidebar-route">
            <Switch>
                {/* <Route exact path='/'><Home /></Route> */}
                <Route exact path='/NewGameSetup'><NewGameSetup token={token} postDifficulty={postDifficulty} postTriviaTopic={postTriviaTopic} setPostDifficulty={setPostDifficulty} setPostTriviaTopic={setPostTriviaTopic} /></Route>
                <Route exact path='/ViewScores'><ViewScores token={token}/></Route>
                {/* <Route exact path='/Gameplay'><GamePlay /></Route> */}
            </Switch>
        </div>
       
        </div>
     );
}
 
export default Sidebar;

