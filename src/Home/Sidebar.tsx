import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Home from './Home';
import NewGameSetup from './NewGameSetup';
import ViewScores from './ViewScores';
import Gameplay from './Gameplay';



// export interface SidebarProps {
//     redirectGameplay: boolean,
//     setRedirectGameplay: any
// }
 
const Sidebar = () => {


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
                <Route exact path='/NewGameSetup'><NewGameSetup /></Route>
                <Route exact path='/ViewScores'><ViewScores /></Route>
                <Route exact path='/Gameplay'><Gameplay /></Route>
            </Switch>
        </div>
       
        </div>
     );
}
 
export default Sidebar;