
import * as React from 'react';
import Sidebar from './Sidebar';
import {BrowserRouter as Router} from 'react-router-dom';
//import Auth from '../Auth/Auth';



export interface HomeProps {
    token: string,
    updateToken: any
}
 
const Home: React.SFC<HomeProps> = () => {

    
    return ( <div>
        <Router>
            {/* <Auth /> */}
        {/* <Sidebar /> */}
        </Router>
        </div> );
        
}
 
//export default Home;