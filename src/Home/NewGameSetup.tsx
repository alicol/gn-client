import React, {FunctionComponent, useState, useEffect} from 'react';
import {Redirect, Link, useHistory} from 'react-router-dom';
import Gameplay from './Gameplay';

export interface NewGameSetupProps {
    // player1: string,
    // player2: string,
    // player3: string,
    // player4: string,
    // player5: string,
    // player6: string,
    // player7: string,
    // player8: string,
    // player9: string,
    // score1: number,
    // score2: number,
    // score3: number,
    // score4: number,
    // score5: number,
    // score6: number,
    // score7: number,
    // score8: number,
    // score9: number,
    optionalProp?: any
}
 
const NewGameSetup: React.FC<NewGameSetupProps> = (props) => {
    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');
    const [player3, setPlayer3] = useState('');
    const [player4, setPlayer4] = useState('');
    const [player5, setPlayer5] = useState('');
    const [player6, setPlayer6] = useState('');
    const [player7, setPlayer7] = useState('');
    const [player8, setPlayer8] = useState('');
    const [player9, setPlayer9] = useState('');
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);
    const [score3, setScore3] = useState(0);
    const [score4, setScore4] = useState(0);
    const [score5, setScore5] = useState(0);
    const [score6, setScore6] = useState(0);
    const [score7, setScore7] = useState(0);
    const [score8, setScore8] = useState(0);
    const [score9, setScore9] = useState(0);
    const [gameNotes, setGameNotes] = useState("");
    const [showGameplay, setShowGameplay] = useState(false);
    const [currentGame, setCurrentGame] = useState(0);
    
    // const [playerDataId, setPlayerDataId] = useState(0);
    const URL = "http://localhost:3000";
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjAyMDIwNzgwLCJleHAiOjE2MDIxMDcxODB9.WedVSyGUAevuA_BkWa1q9EzLaqmpROSxLKcReL81IG8";
    const [numberOfQuestions, setNumberOfQuestions] = useState(50);
    const [difficulty, setDifficulty] = useState();
    

   const gameplayCreator = () => {
       if (showGameplay){
           const addPoint = (score: any, setScore: any) => {
                setScore(score + 1)
           }

           const minusPoint = (score: any, setScore: any) => {
               setScore(score - 1)
           }
           return( 
           <div>
                <h1>This is your gameplay</h1>
                <Gameplay/>
                <ul>
                <li><h2>{`${player1}: ${score1} points`}</h2><button onClick={() => addPoint(score1, setScore1)}>+1 Point</button><button onClick={() => minusPoint(score1, setScore1)}>-1 Point</button></li>
           
                <li><h2>{`${player2}: ${score2} points`}</h2><button onClick={() => addPoint(score2, setScore2)}>+1 Point</button><button onClick={() => minusPoint(score2, setScore2)}>-1 Point</button></li>
                <li><h2>{`${player3}: ${score3} points`}</h2><button onClick={() => addPoint(score3, setScore3)}>+1 Point</button><button onClick={() => minusPoint(score3, setScore3)}>-1 Point</button></li>
                <li><h2>{`${player4}: ${score4} points`}</h2><button onClick={() => addPoint(score4, setScore4)}>+1 Point</button><button onClick={() => minusPoint(score4, setScore4)}>-1 Point</button></li>
                <li><h2>{`${player5}: ${score5} points`}</h2><button onClick={() => addPoint(score5, setScore5)}>+1 Point</button><button onClick={() => minusPoint(score5, setScore5)}>-1 Point</button></li>
                <li><h2>{`${player6}: ${score6} points`}</h2><button onClick={() => addPoint(score6, setScore6)}>+1 Point</button><button onClick={() => minusPoint(score6, setScore6)}>-1 Point</button></li>
                <li><h2>{`${player7}: ${score7} points`}</h2><button onClick={() => addPoint(score7, setScore7)}>+1 Point</button><button onClick={() => minusPoint(score7, setScore7)}>-1 Point</button></li>
                <li><h2>{`${player8}: ${score8} points`}</h2><button onClick={() => addPoint(score8, setScore8)}>+1 Point</button><button onClick={() => minusPoint(score8, setScore8)}>-1 Point</button></li>
                <li><h2>{`${player9}: ${score9} points`}</h2><button onClick={() => addPoint(score9, setScore9)}>+1 Point</button><button onClick={() => minusPoint(score9, setScore9)}>-1 Point</button></li>
                </ul>
                <textarea placeholder="Enter game notes here..." onChange={(e) => setGameNotes(e.target.value)} />
                <button onClick={handlePutSubmit}>Record Final Scores</button>
            </div>
           )
       } else {
           return (
               <div>
            <h5>Create a New Game</h5>
            <form onSubmit={handleSubmit}>
                <input placeholder="Name of player 1..." onChange={(e) => setPlayer1(e.target.value)}></input>
                <input placeholder="Name of player 2..." onChange={(e) => setPlayer2(e.target.value)}></input>
                <input placeholder="Name of player 3..." onChange={(e) => setPlayer3(e.target.value)}></input>
                <input placeholder="Name of player 4..." onChange={(e) => setPlayer4(e.target.value)}></input>
                <input placeholder="Name of player 5..." onChange={(e) => setPlayer5(e.target.value)}></input>
                <input placeholder="Name of player 6..." onChange={(e) => setPlayer6(e.target.value)}></input>
                <input placeholder="Name of player 7..." onChange={(e) => setPlayer7(e.target.value)}></input>
                <input placeholder="Name of player 8..." onChange={(e) => setPlayer8(e.target.value)}></input>
                <input placeholder="Name of player 9..." onChange={(e) => setPlayer9(e.target.value)}></input>
                <button type="submit">Start New Game</button>
            </form>
            </div>
           )
       }
   }
   

    const handleSubmit = (e: any) => {
        e.preventDefault();
        fetch(`${URL}/player-scores/startgame`, {
            method: 'POST',
            body: JSON.stringify({
                playerScores: {
                    player1: player1,
                    player2: player2,
                    player3: player3,
                    player4: player4,
                    player5: player5,
                    player6: player6,
                    player7: player7,
                    player8: player8,
                    player9: player9,
                    score1: score1,
                    score2: score2,
                    score3: score3,
                    score4: score4,
                    score5: score5,
                    score6: score6,
                    score7: score7,
                    score8: score8,
                    score9: score9,
                },
            }),
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: token
            }),
          
        })
        .then((res) => res.json())
        .then((logData) => {
            console.log(logData);
            setCurrentGame(logData.id);
        })
        .then(() => {
            setShowGameplay(true);
      
        });

      
        
    };

    const handlePutSubmit = (e: any) => {
        e.preventDefault();
        console.log(`${URL}/player-scores/update/${currentGame}`);
        fetch(`${URL}/player-scores/update/${currentGame}`, {
            method: 'PUT',
            body: JSON.stringify({
                playerScores: {
                    player1: player1,
                    player2: player2,
                    player3: player3,
                    player4: player4,
                    player5: player5,
                    player6: player6,
                    player7: player7,
                    player8: player8,
                    player9: player9,
                    score1: score1,
                    score2: score2,
                    score3: score3,
                    score4: score4,
                    score5: score5,
                    score6: score6,
                    score7: score7,
                    score8: score8,
                    score9: score9,
                },
            }),
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: token
            }),
          
        })
        .then((res) => res.json())
        .then((logData) => {
            console.log(logData);
            console.log("Final game score submitted");
            alert("Final Scores Recorded");
        })
        .then(() => {
            setShowGameplay(true);
            console.log('gameplay set true');
        });

        fetch(`${URL}/user-history/post`, {
            method: 'POST',
            body: JSON.stringify({
                userHistory: {
                    datePlayed: "june 10th",
                    triviaTopic: "animals",
                    difficulty: "easy",
                    winner: "Ali",
                    gameNotes: gameNotes,
                    gameId: currentGame,
                    
                },
            }),
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: token
            }),
          
        })
        .then((res) => res.json())
        .then((logData) => {
            console.log(logData);
            console.log("user history submitted");
       
        })
        .then(() => {
           console.log('nothing yet')
        });
        
    };


    return ( <div>
        {gameplayCreator()}
     
    </div> );
}
 
export default NewGameSetup;