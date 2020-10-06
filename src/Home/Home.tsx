import * as React from 'react';
import Sidebar from './Sidebar';
import {BrowserRouter as Router} from 'react-router-dom';

export interface HomeProps {
    
}
 
const Home: React.SFC<HomeProps> = () => {
    
    return ( <div>
        <Router>
        <Sidebar />
        </Router>
        


    </div> );
}
 
export default Home;