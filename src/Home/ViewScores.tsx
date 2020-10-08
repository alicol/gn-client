import React, {useState} from 'react';
import { tokenToString } from 'typescript';

export interface ViewScoresProps {

}
 
const ViewScores: React.FC<ViewScoresProps> = () => {
    const [myScores, setMyScores] = useState();
    const URL = "http://localhost:3000";
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjAxOTA4MDc2LCJleHAiOjE2MDE5OTQ0NzZ9.DJ38vhCZGhCoGpL9X_SQ0Irq0SW8NGKsny7_jC5If14";

const getMyScores = () => {
    fetch(`${URL}/user-history/get/mygames`, {
        method: "GET",
        headers: new Headers({
            "Content-Type": "application/json",
            Authorization: token,
        }),
    })
    .then((res) => res.json())
    .then((logData) => {
        setMyScores(logData);
    })
    return (<div><p>{myScores}</p><p>Hello</p></div>);
    console.log(myScores);
};

  

    return ( <div>
        <p>My Past Games:</p>
        {getMyScores()}
    </div> );
};
 
export default ViewScores;