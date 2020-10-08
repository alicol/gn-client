import React from 'react';
import Auth from '../Auth/Auth';


export interface HomeProps {
    
}
 
const Home: React.SFC<HomeProps> = () => {
    return ( <div>
        <Auth/>
    </div> );
}
 
export default Home;