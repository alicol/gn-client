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
    const [numberOfPlayers, setNumberOfPlayers] = useState(0);
    
    // const [playerDataId, setPlayerDataId] = useState(0);
    const URL = "http://localhost:3000";
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNjAyMTkzNTE0LCJleHAiOjE2MDIyNzk5MTR9.i_aD16zLPYrNnqfjGz3Ey-1TXdRjC_0r1hYNPj-ncR8";
    const [numberOfQuestions, setNumberOfQuestions] = useState(50);
    const [difficulty, setDifficulty] = useState();

    const addPoint = (score: any, setScore: any) => {
        setScore(score + 1)
   }

   const minusPoint = (score: any, setScore: any) => {
       setScore(score - 1)
   }

    const scoreboard = {
        p1: score1,
        p2: score2,
        p3: score3, 
        p4: score4,
        p5: score5,
        p6: score6,
        p7: score7,
        p8: score8,
        p9: score9
        
    }

    const displayWinner = () => {
        let winnerKey = findWinner(scoreboard);
        if (winnerKey == "p1" && player1 !=="" && score1 !== 0){
            return(
                <div><h5>{`Currently in head place is ${player1} with ${score1} points!`}</h5></div>
            )
        } else if (winnerKey == "p2" && player2 !=="" && score2 !== 0){
            return(
                <div><h5>{`Currently in head place is ${player2} with ${score2} points!`}</h5></div>
            )
        } else if (winnerKey == "p3" && player3 !==""  && score3 !== 0){
            return(
                <div><h5>{`Currently in head place is ${player3} with ${score3} points!`}</h5></div>
            )
        } else if (winnerKey == "p4" && player4 !==""  && score4 !== 0){
            return(
                <div><h5>{`Currently in head place is ${player4} with ${score4} points!`}</h5></div>
            )
        } else if (winnerKey == "p5" && player5 !==""  && score5 !== 0){
            return(
                <div><h5>{`Currently in head place is ${player5} with ${score5} points!`}</h5></div>
            )
        } else if (winnerKey == "p6" && player6 !==""  && score6 !== 0){
            return(
                <div><h5>{`Currently in head place is ${player6} with ${score6} points!`}</h5></div>
            )
        } else if (winnerKey == "p7" && player7 !==""  && score7 !== 0){
            return(
                <div><h5>{`Currently in head place is ${player7} with ${score7} points!`}</h5></div>
            )
        } else if (winnerKey == "p8" && player8 !==""  && score8 !== 0){
            return(
                <div><h5>{`Currently in head place is ${player8} with ${score8} points!`}</h5></div>
            )
        } else if (winnerKey == "p9" && player9 !==""  && score9 !== 0){
            return(
                <div><h5>{`Currently in head place is ${player9} with ${score9} points!`}</h5></div>
            )
        } 


    }

    const findWinner = (obj: any) => {
       var keys = Object.keys(obj);
        var max = keys[0];
        for (var i=1, n=keys.length; i < n; ++i){
            var k=keys[i];
            if(obj[k] > obj[max]){
                max = k
            }
        }
       return max;
    }




    const formCreator = () => {
        console.log("form creator called")
       switch (numberOfPlayers){
           case 1: 
                return (
                    <form onSubmit={handleSubmit}>
                        <input placeholder="Name of player 1..." onChange={(e) => setPlayer1(e.target.value)}></input>
                        <button type="submit">Start New Game</button>
                    </form> 
                    );
                break;
            case 2: 
                return (
                    <form onSubmit={handleSubmit}>
                        <input placeholder="Name of player 1..." onChange={(e) => setPlayer1(e.target.value)}></input>
                        <input placeholder="Name of player 2..." onChange={(e) => setPlayer2(e.target.value)}></input>
                         <button type="submit">Start New Game</button>
                    </form> 
                );
                break;
            case 3: 
                return (
                    <form onSubmit={handleSubmit}>
                        <input placeholder="Name of player 1..." onChange={(e) => setPlayer1(e.target.value)}></input>
                        <input placeholder="Name of player 2..." onChange={(e) => setPlayer2(e.target.value)}></input>
                        <input placeholder="Name of player 3..." onChange={(e) => setPlayer3(e.target.value)}></input>
                         <button type="submit">Start New Game</button>
                    </form> 
                );
                break;
            case 4: 
                return (
                    <form onSubmit={handleSubmit}>
                        <input placeholder="Name of player 1..." onChange={(e) => setPlayer1(e.target.value)}></input>
                        <input placeholder="Name of player 2..." onChange={(e) => setPlayer2(e.target.value)}></input>
                        <input placeholder="Name of player 3..." onChange={(e) => setPlayer3(e.target.value)}></input>
                        <input placeholder="Name of player 4..." onChange={(e) => setPlayer4(e.target.value)}></input>
                         <button type="submit">Start New Game</button>
                    </form> 
                );
                break;
            case 5: 
                return (
                    <form onSubmit={handleSubmit}>
                        <input placeholder="Name of player 1..." onChange={(e) => setPlayer1(e.target.value)}></input>
                        <input placeholder="Name of player 2..." onChange={(e) => setPlayer2(e.target.value)}></input>
                        <input placeholder="Name of player 3..." onChange={(e) => setPlayer3(e.target.value)}></input>
                        <input placeholder="Name of player 4..." onChange={(e) => setPlayer4(e.target.value)}></input>
                        <input placeholder="Name of player 5..." onChange={(e) => setPlayer5(e.target.value)}></input>
                         <button type="submit">Start New Game</button>
                    </form> 
                );
                break;
            case 6: 
                return (
                    <form onSubmit={handleSubmit}>
                        <input placeholder="Name of player 1..." onChange={(e) => setPlayer1(e.target.value)}></input>
                        <input placeholder="Name of player 2..." onChange={(e) => setPlayer2(e.target.value)}></input>
                        <input placeholder="Name of player 3..." onChange={(e) => setPlayer3(e.target.value)}></input>
                        <input placeholder="Name of player 4..." onChange={(e) => setPlayer4(e.target.value)}></input>
                        <input placeholder="Name of player 5..." onChange={(e) => setPlayer5(e.target.value)}></input>
                        <input placeholder="Name of player 6..." onChange={(e) => setPlayer6(e.target.value)}></input>
                         <button type="submit">Start New Game</button>
                    </form> 
                );
                break;
            case 7: 
                return (
                    <form onSubmit={handleSubmit}>
                        <input placeholder="Name of player 1..." onChange={(e) => setPlayer1(e.target.value)}></input>
                        <input placeholder="Name of player 2..." onChange={(e) => setPlayer2(e.target.value)}></input>
                        <input placeholder="Name of player 3..." onChange={(e) => setPlayer3(e.target.value)}></input>
                        <input placeholder="Name of player 4..." onChange={(e) => setPlayer4(e.target.value)}></input>
                        <input placeholder="Name of player 5..." onChange={(e) => setPlayer5(e.target.value)}></input>
                        <input placeholder="Name of player 6..." onChange={(e) => setPlayer6(e.target.value)}></input>
                        <input placeholder="Name of player 7..." onChange={(e) => setPlayer7(e.target.value)}></input>
                         <button type="submit">Start New Game</button>
                    </form> 
                );
                break;
            case 8: 
                return (
                    <form onSubmit={handleSubmit}>
                        <input placeholder="Name of player 1..." onChange={(e) => setPlayer1(e.target.value)}></input>
                        <input placeholder="Name of player 2..." onChange={(e) => setPlayer2(e.target.value)}></input>
                        <input placeholder="Name of player 3..." onChange={(e) => setPlayer3(e.target.value)}></input>
                        <input placeholder="Name of player 4..." onChange={(e) => setPlayer4(e.target.value)}></input>
                        <input placeholder="Name of player 5..." onChange={(e) => setPlayer5(e.target.value)}></input>
                        <input placeholder="Name of player 6..." onChange={(e) => setPlayer6(e.target.value)}></input>
                        <input placeholder="Name of player 7..." onChange={(e) => setPlayer7(e.target.value)}></input>
                        <input placeholder="Name of player 8..." onChange={(e) => setPlayer8(e.target.value)}></input>
                         <button type="submit">Start New Game</button>
                    </form> 
                );
                break;
            case 9: 
                return (
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
                );
                break;
       }
   }

   const playerCreator = () => {
       switch (numberOfPlayers){
           case 1: 
                return(
                    <div>
                        <ul>
                        <li><h2>{`${player1}: ${score1} points`}</h2><button onClick={() => addPoint(score1, setScore1)}>+1 Point</button><button onClick={() => minusPoint(score1, setScore1)}>-1 Point</button></li>
                        </ul>
                    </div>
                )
                break;
           case 2: 
                return(
                <div>
                    <ul>
                    <li><h2>{`${player1}: ${score1} points`}</h2><button onClick={() => addPoint(score1, setScore1)}>+1 Point</button><button onClick={() => minusPoint(score1, setScore1)}>-1 Point</button></li>
                    <li><h2>{`${player2}: ${score2} points`}</h2><button onClick={() => addPoint(score2, setScore2)}>+1 Point</button><button onClick={() => minusPoint(score2, setScore2)}>-1 Point</button></li>
                    </ul>
                </div>
            )
                break;
           case 3: 
                return(
                <div>
                    <ul>
                    <li><h2>{`${player1}: ${score1} points`}</h2><button onClick={() => addPoint(score1, setScore1)}>+1 Point</button><button onClick={() => minusPoint(score1, setScore1)}>-1 Point</button></li>
                    <li><h2>{`${player2}: ${score2} points`}</h2><button onClick={() => addPoint(score2, setScore2)}>+1 Point</button><button onClick={() => minusPoint(score2, setScore2)}>-1 Point</button></li>
                    <li><h2>{`${player3}: ${score3} points`}</h2><button onClick={() => addPoint(score3, setScore3)}>+1 Point</button><button onClick={() => minusPoint(score3, setScore3)}>-1 Point</button></li>
                    <li><h2>{`${player4}: ${score4} points`}</h2><button onClick={() => addPoint(score4, setScore4)}>+1 Point</button><button onClick={() => minusPoint(score4, setScore4)}>-1 Point</button></li>
                    </ul>
                </div>
            )
                break;
           case 4: 
                return(
                <div>
                    <ul>
                    <li><h2>{`${player1}: ${score1} points`}</h2><button onClick={() => addPoint(score1, setScore1)}>+1 Point</button><button onClick={() => minusPoint(score1, setScore1)}>-1 Point</button></li>
                    <li><h2>{`${player2}: ${score2} points`}</h2><button onClick={() => addPoint(score2, setScore2)}>+1 Point</button><button onClick={() => minusPoint(score2, setScore2)}>-1 Point</button></li>
                    <li><h2>{`${player3}: ${score3} points`}</h2><button onClick={() => addPoint(score3, setScore3)}>+1 Point</button><button onClick={() => minusPoint(score3, setScore3)}>-1 Point</button></li>
                    <li><h2>{`${player4}: ${score4} points`}</h2><button onClick={() => addPoint(score4, setScore4)}>+1 Point</button><button onClick={() => minusPoint(score4, setScore4)}>-1 Point</button></li>
                    </ul>
                </div>
            )
                break;
           case 5: 
                return(
                <div>
                    <ul>
                    <li><h2>{`${player1}: ${score1} points`}</h2><button onClick={() => addPoint(score1, setScore1)}>+1 Point</button><button onClick={() => minusPoint(score1, setScore1)}>-1 Point</button></li>
                    <li><h2>{`${player2}: ${score2} points`}</h2><button onClick={() => addPoint(score2, setScore2)}>+1 Point</button><button onClick={() => minusPoint(score2, setScore2)}>-1 Point</button></li>
                    <li><h2>{`${player3}: ${score3} points`}</h2><button onClick={() => addPoint(score3, setScore3)}>+1 Point</button><button onClick={() => minusPoint(score3, setScore3)}>-1 Point</button></li>
                    <li><h2>{`${player4}: ${score4} points`}</h2><button onClick={() => addPoint(score4, setScore4)}>+1 Point</button><button onClick={() => minusPoint(score4, setScore4)}>-1 Point</button></li>
                    <li><h2>{`${player5}: ${score5} points`}</h2><button onClick={() => addPoint(score5, setScore5)}>+1 Point</button><button onClick={() => minusPoint(score5, setScore5)}>-1 Point</button></li>
                    </ul>
                </div>
            )
           break;
           case 6: 
                return(
                <div>
                    <ul>
                    <li><h2>{`${player1}: ${score1} points`}</h2><button onClick={() => addPoint(score1, setScore1)}>+1 Point</button><button onClick={() => minusPoint(score1, setScore1)}>-1 Point</button></li>
                    <li><h2>{`${player2}: ${score2} points`}</h2><button onClick={() => addPoint(score2, setScore2)}>+1 Point</button><button onClick={() => minusPoint(score2, setScore2)}>-1 Point</button></li>
                    <li><h2>{`${player3}: ${score3} points`}</h2><button onClick={() => addPoint(score3, setScore3)}>+1 Point</button><button onClick={() => minusPoint(score3, setScore3)}>-1 Point</button></li>
                    <li><h2>{`${player4}: ${score4} points`}</h2><button onClick={() => addPoint(score4, setScore4)}>+1 Point</button><button onClick={() => minusPoint(score4, setScore4)}>-1 Point</button></li>
                    <li><h2>{`${player5}: ${score5} points`}</h2><button onClick={() => addPoint(score5, setScore5)}>+1 Point</button><button onClick={() => minusPoint(score5, setScore5)}>-1 Point</button></li>
                    <li><h2>{`${player6}: ${score6} points`}</h2><button onClick={() => addPoint(score6, setScore6)}>+1 Point</button><button onClick={() => minusPoint(score6, setScore6)}>-1 Point</button></li>
                    </ul>
                </div>
            )
                break;
           case 7: 
                return(
                <div>
                    <ul>
                    <li><h2>{`${player1}: ${score1} points`}</h2><button onClick={() => addPoint(score1, setScore1)}>+1 Point</button><button onClick={() => minusPoint(score1, setScore1)}>-1 Point</button></li>
                    <li><h2>{`${player2}: ${score2} points`}</h2><button onClick={() => addPoint(score2, setScore2)}>+1 Point</button><button onClick={() => minusPoint(score2, setScore2)}>-1 Point</button></li>
                    <li><h2>{`${player3}: ${score3} points`}</h2><button onClick={() => addPoint(score3, setScore3)}>+1 Point</button><button onClick={() => minusPoint(score3, setScore3)}>-1 Point</button></li>
                    <li><h2>{`${player4}: ${score4} points`}</h2><button onClick={() => addPoint(score4, setScore4)}>+1 Point</button><button onClick={() => minusPoint(score4, setScore4)}>-1 Point</button></li>
                    <li><h2>{`${player5}: ${score5} points`}</h2><button onClick={() => addPoint(score5, setScore5)}>+1 Point</button><button onClick={() => minusPoint(score5, setScore5)}>-1 Point</button></li>
                    <li><h2>{`${player6}: ${score6} points`}</h2><button onClick={() => addPoint(score6, setScore6)}>+1 Point</button><button onClick={() => minusPoint(score6, setScore6)}>-1 Point</button></li>
                    <li><h2>{`${player7}: ${score7} points`}</h2><button onClick={() => addPoint(score7, setScore7)}>+1 Point</button><button onClick={() => minusPoint(score7, setScore7)}>-1 Point</button></li>
                    </ul>
                </div>
            )
                break;
           case 8: 
                return(
                <div>
                    <ul>
                    <li><h2>{`${player1}: ${score1} points`}</h2><button onClick={() => addPoint(score1, setScore1)}>+1 Point</button><button onClick={() => minusPoint(score1, setScore1)}>-1 Point</button></li>
                    <li><h2>{`${player2}: ${score2} points`}</h2><button onClick={() => addPoint(score2, setScore2)}>+1 Point</button><button onClick={() => minusPoint(score2, setScore2)}>-1 Point</button></li>
                    <li><h2>{`${player3}: ${score3} points`}</h2><button onClick={() => addPoint(score3, setScore3)}>+1 Point</button><button onClick={() => minusPoint(score3, setScore3)}>-1 Point</button></li>
                    <li><h2>{`${player4}: ${score4} points`}</h2><button onClick={() => addPoint(score4, setScore4)}>+1 Point</button><button onClick={() => minusPoint(score4, setScore4)}>-1 Point</button></li>
                    <li><h2>{`${player5}: ${score5} points`}</h2><button onClick={() => addPoint(score5, setScore5)}>+1 Point</button><button onClick={() => minusPoint(score5, setScore5)}>-1 Point</button></li>
                    <li><h2>{`${player6}: ${score6} points`}</h2><button onClick={() => addPoint(score6, setScore6)}>+1 Point</button><button onClick={() => minusPoint(score6, setScore6)}>-1 Point</button></li>
                    <li><h2>{`${player7}: ${score7} points`}</h2><button onClick={() => addPoint(score7, setScore7)}>+1 Point</button><button onClick={() => minusPoint(score7, setScore7)}>-1 Point</button></li>
                    <li><h2>{`${player8}: ${score8} points`}</h2><button onClick={() => addPoint(score8, setScore8)}>+1 Point</button><button onClick={() => minusPoint(score8, setScore8)}>-1 Point</button></li>
                    </ul>
                </div>
            )
                break;
           case 9: 
                return(
                <div>
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
               </div>
           )
                break;
       }
   }
    

   const gameplayCreator = () => {
       if (showGameplay){
        //    const addPoint = (score: any, setScore: any) => {
        //         setScore(score + 1)
        //    }

        //    const minusPoint = (score: any, setScore: any) => {
        //        setScore(score - 1)
        //    }
           return( 
           <div>
                <h1>This is your gameplay</h1>
                <Gameplay/>
                {/* <ul> */}
                    {playerCreator()}
                {/* <li><h2>{`${player1}: ${score1} points`}</h2><button onClick={() => addPoint(score1, setScore1)}>+1 Point</button><button onClick={() => minusPoint(score1, setScore1)}>-1 Point</button></li>
           
                <li><h2>{`${player2}: ${score2} points`}</h2><button onClick={() => addPoint(score2, setScore2)}>+1 Point</button><button onClick={() => minusPoint(score2, setScore2)}>-1 Point</button></li>
                <li><h2>{`${player3}: ${score3} points`}</h2><button onClick={() => addPoint(score3, setScore3)}>+1 Point</button><button onClick={() => minusPoint(score3, setScore3)}>-1 Point</button></li>
                <li><h2>{`${player4}: ${score4} points`}</h2><button onClick={() => addPoint(score4, setScore4)}>+1 Point</button><button onClick={() => minusPoint(score4, setScore4)}>-1 Point</button></li>
                <li><h2>{`${player5}: ${score5} points`}</h2><button onClick={() => addPoint(score5, setScore5)}>+1 Point</button><button onClick={() => minusPoint(score5, setScore5)}>-1 Point</button></li>
                <li><h2>{`${player6}: ${score6} points`}</h2><button onClick={() => addPoint(score6, setScore6)}>+1 Point</button><button onClick={() => minusPoint(score6, setScore6)}>-1 Point</button></li>
                <li><h2>{`${player7}: ${score7} points`}</h2><button onClick={() => addPoint(score7, setScore7)}>+1 Point</button><button onClick={() => minusPoint(score7, setScore7)}>-1 Point</button></li>
                <li><h2>{`${player8}: ${score8} points`}</h2><button onClick={() => addPoint(score8, setScore8)}>+1 Point</button><button onClick={() => minusPoint(score8, setScore8)}>-1 Point</button></li>
                <li><h2>{`${player9}: ${score9} points`}</h2><button onClick={() => addPoint(score9, setScore9)}>+1 Point</button><button onClick={() => minusPoint(score9, setScore9)}>-1 Point</button></li> */}
                {/* </ul> */}
                <textarea placeholder="Enter game notes here..." onChange={(e) => setGameNotes(e.target.value)} />
                <button onClick={handlePutSubmit}>Record Final Scores</button>
            </div>
           )
       } else {
           return (
               <div>
            <h5>Create a New Game</h5>
            <p>Select # of players:</p>
            <form>
                <label>1</label><input type="radio" name="playercount" onChange={(e) => setNumberOfPlayers(1)} />
                <br />
                <label>2</label><input type="radio" name="playercount" onChange={(e) => setNumberOfPlayers(2)} />
                <br />
                <label>3</label><input type="radio" name="playercount" onChange={(e) => setNumberOfPlayers(3)} />
                <br />
                <label>4</label><input type="radio" name="playercount" onChange={(e) => setNumberOfPlayers(4)} />
                <br />
                <label>5</label><input type="radio" name="playercount" onChange={(e) => setNumberOfPlayers(5)} />
                <br />
                <label>6</label><input type="radio" name="playercount" onChange={(e) => setNumberOfPlayers(6)} />
                <br />
                <label>7</label><input type="radio" name="playercount" onChange={(e) => setNumberOfPlayers(7)} />
                <br />
                <label>8</label><input type="radio" name="playercount" onChange={(e) => setNumberOfPlayers(8)} />
                <br />
                <label>9</label><input type="radio" name="playercount" onChange={(e) => setNumberOfPlayers(9)} />
                {/* <input type="radio" onChange={(e) => setNumberOfPlayers(2)}>2</input> */}
            </form>
            {formCreator()}
            {/* <form onSubmit={handleSubmit}>
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
            </form> */}
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
         {displayWinner()}
        {gameplayCreator()}
       
    </div> );
}
 
export default NewGameSetup;