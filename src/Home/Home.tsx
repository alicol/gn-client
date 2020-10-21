
import * as React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
//import Auth from '../Auth/Auth';
//import Sidebar from './Sidebar';




export interface HomeProps {
    token: string,
    updateToken: any
}

const Home: React.SFC<HomeProps> = () => {


    return (<div>
        <Router>
            {/* <Auth /> */}
        {/* <Sidebar /> */}
        </Router>
        </div> );

}

export default Home;