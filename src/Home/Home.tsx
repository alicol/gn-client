
import * as React from 'react';
// import Sidebar from './Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth from '../Auth/Auth';



export interface HomeProps {

}

const Home: React.SFC<HomeProps> = () => {


    return (<div>
        <Router>
            {/* <Sidebar /> */}
            <Auth />
        </Router>
    </div>);

}

export default Home;