import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Home from './Home';
import NewGameSetup from './NewGameSetup';
import ViewScores from './ViewScores';
import GamePlay from './Gameplay';



 export interface SidebarProps {
    //  redirectGameplay: boolean,
    //  setRedirectGameplay: any,
    //  setPostTriviaTopic: any,
    //  postTriviaTopic: string
 }

 
const Sidebar = () => {
    const [postTriviaTopic, setPostTriviaTopic] = useState("");
    const [postDifficulty, setPostDifficulty] = useState("Medium");


  

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsImlhdCI6MTYwMjgxMTAwOCwiZXhwIjoxNjAyODk3NDA4fQ.wnsTd8AJOl6Xgc55D07jfNS6p0Ax_vDhP1hQotXtP_k";



    return ( 
        <div>
            <h1>Trivia Night</h1>
           
        <div>
           {/* <li><Link to="/">Home</Link></li>  */}
           <button><Link to="/NewGameSetup">Start New Game</Link></button>
           <button><Link to="/ViewScores">View Past Games</Link></button>
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

