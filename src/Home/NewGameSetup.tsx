import React from 'react';
import {Redirect, Link, useHistory} from 'react-router-dom';
import { TypeVariable } from 'typescript';
import Gameplay from './Gameplay';

export interface NewGameSetupProps {
    token: string,
    postTriviaTopic: string,
    postDifficulty: string,
    setPostTriviaTopic: any,
    setPostDifficulty: any
}
 
export interface NewGameSetupState {
    showGameplay: boolean,
    player1: string | null,
    player2: string | null,
    player3: string | null,
    player4: string | null,
    player5: string | null,
    player6: string | null,
    player7: string | null,
    player8: string | null,
    player9: string | null,
    score1: number,
    score2: number,
    score3: number,
    score4: number,
    score5: number,
    score6: number,
    score7: number,
    score8: number,
    score9: number,
    numberOfPlayers: number,
    currentGame: number,
    gameNotes: string | null,
    currentWinner: any | null,
  
}
 
class NewGameSetup extends React.Component<NewGameSetupProps, NewGameSetupState> {
    constructor(props: NewGameSetupProps) {
        super(props);
        this.state = { showGameplay: false, player1: null, player2: null, player3: null, player4: null, player5: null, player6: null, player7: null, player8: null, player9: null, score1: 0, score2: 0, score3: 0, score4: 0, score5: 0, score6: 0, score7: 0, score8: 0, score9: 0, numberOfPlayers: 1, currentGame: 0, gameNotes: null, currentWinner: null};
    }
    URL = "http://localhost:3000";
    token = this.props.token;

    // addPoint = (score: any) => {
    //     this.setState({})
    // }

    //function that either pops up with option to select & enter # of players OR shows players & points functionality
    componentDidMount = () => {
        this.displayWinner();
    }
    gameplayCreator = () => {
        if (this.state.showGameplay){
 
            return( 
            <div>
                 <h1>This is your gameplay</h1>
                 <Gameplay setPostDifficulty={this.props.setPostDifficulty} setPostTriviaTopic={this.props.setPostTriviaTopic} />
                   
                     {this.playerCreator()}
        
                 <textarea placeholder="Enter game notes here..." onChange={(e) => this.setState({gameNotes: e.target.value})} />
                 <button onClick={this.handlePutSubmit}>Record Final Scores</button>
             </div>
            )
        } else {
            return (
                <div>
             <h5>Create a New Game</h5>
             <p>Select # of players:</p>
             <form>
                 <label>1</label><input type="radio" name="playercount" onChange={(e) => this.setState({numberOfPlayers: 1})} />
                 <br />
                 <label>2</label><input type="radio" name="playercount" onChange={(e) => this.setState({numberOfPlayers: 2})} />
                 <br />
                 <label>3</label><input type="radio" name="playercount" onChange={(e) => this.setState({numberOfPlayers: 3})} />
                 <br />
                 <label>4</label><input type="radio" name="playercount" onChange={(e) => this.setState({numberOfPlayers: 4})} />
                 <br />
                 <label>5</label><input type="radio" name="playercount" onChange={(e) => this.setState({numberOfPlayers: 5})} />
                 <br />
                 <label>6</label><input type="radio" name="playercount" onChange={(e) => this.setState({numberOfPlayers: 6})} />
                 <br />
                 <label>7</label><input type="radio" name="playercount" onChange={(e) => this.setState({numberOfPlayers: 7})} />
                 <br />
                 <label>8</label><input type="radio" name="playercount" onChange={(e) => this.setState({numberOfPlayers: 8})} />
                 <br />
                 <label>9</label><input type="radio" name="playercount" onChange={(e) => this.setState({numberOfPlayers: 9})} />
                
             </form>
             {this.formCreator()}
             </div>
            )
        }
    }

    //shows correct # of player... their names & buttons to add or subtract points from them
    playerCreator = () => {
        switch (this.state.numberOfPlayers){
            case 1: 
                 return(
                     <div>
                         <ul>
                         <li><h2>{`${this.state.player1}: ${this.state.score1} points`}</h2><button onClick={() => this.setState({score1: this.state.score1 + 1})}>+1 Point</button><button onClick={() => this.setState({score1: this.state.score1 - 1})}>-1 Point</button></li>
                         </ul>
                     </div>
                 )
                 break;
            case 2: 
                 return(
                 <div>
                     <ul>
                     <li><h2>{`${this.state.player1}: ${this.state.score1} points`}</h2><button onClick={() => this.setState({score1: this.state.score1 + 1})}>+1 Point</button><button onClick={() => this.setState({score1: this.state.score1 - 1})}>-1 Point</button></li>
                     <li><h2>{`${this.state.player2}: ${this.state.score2} points`}</h2><button onClick={() => this.setState({score2: this.state.score2 + 1})}>+1 Point</button><button onClick={() => this.setState({score2: this.state.score2 - 1})}>-1 Point</button></li>
                     </ul>
                 </div>
             )
                 break;
            case 3: 
                 return(
                 <div>
                     <ul>
                     <li><h2>{`${this.state.player1}: ${this.state.score1} points`}</h2><button onClick={() => this.setState({score1: this.state.score1 + 1})}>+1 Point</button><button onClick={() => this.setState({score1: this.state.score1 - 1})}>-1 Point</button></li>
                     <li><h2>{`${this.state.player2}: ${this.state.score2} points`}</h2><button onClick={() => this.setState({score2: this.state.score2 + 1})}>+1 Point</button><button onClick={() => this.setState({score2: this.state.score2 - 1})}>-1 Point</button></li>
                     <li><h2>{`${this.state.player3}: ${this.state.score3} points`}</h2><button onClick={() => this.setState({score3: this.state.score3 + 1})}>+1 Point</button><button onClick={() => this.setState({score3: this.state.score3 - 1})}>-1 Point</button></li>
                     </ul>
                 </div>
             )
                 break;
            case 4: 
                 return(
                 <div>
                     <ul>
                     <li><h2>{`${this.state.player1}: ${this.state.score1} points`}</h2><button onClick={() => this.setState({score1: this.state.score1 + 1})}>+1 Point</button><button onClick={() => this.setState({score1: this.state.score1 - 1})}>-1 Point</button></li>
                     <li><h2>{`${this.state.player2}: ${this.state.score2} points`}</h2><button onClick={() => this.setState({score2: this.state.score2 + 1})}>+1 Point</button><button onClick={() => this.setState({score2: this.state.score2 - 1})}>-1 Point</button></li>
                     <li><h2>{`${this.state.player3}: ${this.state.score3} points`}</h2><button onClick={() => this.setState({score3: this.state.score3 + 1})}>+1 Point</button><button onClick={() => this.setState({score3: this.state.score3 - 1})}>-1 Point</button></li>
                     <li><h2>{`${this.state.player4}: ${this.state.score4} points`}</h2><button onClick={() => this.setState({score4: this.state.score4 + 1})}>+1 Point</button><button onClick={() => this.setState({score4: this.state.score4 - 1})}>-1 Point</button></li>
                     </ul>
                 </div>
             )
                 break;
            case 5: 
                 return(
                 <div>
                     <ul>
                     <li><h2>{`${this.state.player1}: ${this.state.score1} points`}</h2><button onClick={() => this.setState({score1: this.state.score1 + 1})}>+1 Point</button><button onClick={() => this.setState({score1: this.state.score1 - 1})}>-1 Point</button></li>
                     <li><h2>{`${this.state.player2}: ${this.state.score2} points`}</h2><button onClick={() => this.setState({score2: this.state.score2 + 1})}>+1 Point</button><button onClick={() => this.setState({score2: this.state.score2 - 1})}>-1 Point</button></li>
                     <li><h2>{`${this.state.player3}: ${this.state.score3} points`}</h2><button onClick={() => this.setState({score3: this.state.score3 + 1})}>+1 Point</button><button onClick={() => this.setState({score3: this.state.score3 - 1})}>-1 Point</button></li>
                     <li><h2>{`${this.state.player4}: ${this.state.score4} points`}</h2><button onClick={() => this.setState({score4: this.state.score4 + 1})}>+1 Point</button><button onClick={() => this.setState({score4: this.state.score4 - 1})}>-1 Point</button></li>
                     <li><h2>{`${this.state.player5}: ${this.state.score5} points`}</h2><button onClick={() => this.setState({score5: this.state.score5 + 1})}>+1 Point</button><button onClick={() => this.setState({score5: this.state.score5 - 1})}>-1 Point</button></li>
                     </ul>
                 </div>
             )
            break;
            case 6: 
                 return(
                 <div>
                     <ul>
                     <li><h2>{`${this.state.player1}: ${this.state.score1} points`}</h2><button onClick={() => this.setState({score1: this.state.score1 + 1})}>+1 Point</button><button onClick={() => this.setState({score1: this.state.score1 - 1})}>-1 Point</button></li>
                     <li><h2>{`${this.state.player2}: ${this.state.score2} points`}</h2><button onClick={() => this.setState({score2: this.state.score2 + 1})}>+1 Point</button><button onClick={() => this.setState({score2: this.state.score2 - 1})}>-1 Point</button></li>
                     <li><h2>{`${this.state.player3}: ${this.state.score3} points`}</h2><button onClick={() => this.setState({score3: this.state.score3 + 1})}>+1 Point</button><button onClick={() => this.setState({score3: this.state.score3 - 1})}>-1 Point</button></li>
                     <li><h2>{`${this.state.player4}: ${this.state.score4} points`}</h2><button onClick={() => this.setState({score4: this.state.score4 + 1})}>+1 Point</button><button onClick={() => this.setState({score4: this.state.score4 - 1})}>-1 Point</button></li>
                     <li><h2>{`${this.state.player5}: ${this.state.score5} points`}</h2><button onClick={() => this.setState({score5: this.state.score5 + 1})}>+1 Point</button><button onClick={() => this.setState({score5: this.state.score5 - 1})}>-1 Point</button></li>
                     <li><h2>{`${this.state.player6}: ${this.state.score6} points`}</h2><button onClick={() => this.setState({score6: this.state.score6 + 1})}>+1 Point</button><button onClick={() => this.setState({score6: this.state.score6 - 1})}>-1 Point</button></li>
                     </ul>
                 </div>
             )
                 break;
            case 7: 
                 return(
                 <div>
                     <ul>
                     <li><h2>{`${this.state.player1}: ${this.state.score1} points`}</h2><button onClick={() => this.setState({score1: this.state.score1 + 1})}>+1 Point</button><button onClick={() => this.setState({score1: this.state.score1 - 1})}>-1 Point</button></li>
                     <li><h2>{`${this.state.player2}: ${this.state.score2} points`}</h2><button onClick={() => this.setState({score2: this.state.score2 + 1})}>+1 Point</button><button onClick={() => this.setState({score2: this.state.score2 - 1})}>-1 Point</button></li>
                     <li><h2>{`${this.state.player3}: ${this.state.score3} points`}</h2><button onClick={() => this.setState({score3: this.state.score3 + 1})}>+1 Point</button><button onClick={() => this.setState({score3: this.state.score3 - 1})}>-1 Point</button></li>
                     <li><h2>{`${this.state.player4}: ${this.state.score4} points`}</h2><button onClick={() => this.setState({score4: this.state.score4 + 1})}>+1 Point</button><button onClick={() => this.setState({score4: this.state.score4 - 1})}>-1 Point</button></li>
                     <li><h2>{`${this.state.player5}: ${this.state.score5} points`}</h2><button onClick={() => this.setState({score5: this.state.score5 + 1})}>+1 Point</button><button onClick={() => this.setState({score5: this.state.score5 - 1})}>-1 Point</button></li>
                     <li><h2>{`${this.state.player6}: ${this.state.score6} points`}</h2><button onClick={() => this.setState({score6: this.state.score6 + 1})}>+1 Point</button><button onClick={() => this.setState({score6: this.state.score6 - 1})}>-1 Point</button></li>
                     <li><h2>{`${this.state.player7}: ${this.state.score7} points`}</h2><button onClick={() => this.setState({score7: this.state.score7 + 1})}>+1 Point</button><button onClick={() => this.setState({score7: this.state.score7 - 1})}>-1 Point</button></li>
                     </ul>
                 </div>
             )
                 break;
            case 8: 
                 return(
                 <div>
                     <ul>
                     <li><h2>{`${this.state.player1}: ${this.state.score1} points`}</h2><button onClick={() => this.setState({score1: this.state.score1 + 1})}>+1 Point</button><button onClick={() => this.setState({score1: this.state.score1 - 1})}>-1 Point</button></li>
                     <li><h2>{`${this.state.player2}: ${this.state.score2} points`}</h2><button onClick={() => this.setState({score2: this.state.score2 + 1})}>+1 Point</button><button onClick={() => this.setState({score2: this.state.score2 - 1})}>-1 Point</button></li>
                     <li><h2>{`${this.state.player3}: ${this.state.score3} points`}</h2><button onClick={() => this.setState({score3: this.state.score3 + 1})}>+1 Point</button><button onClick={() => this.setState({score3: this.state.score3 - 1})}>-1 Point</button></li>
                     <li><h2>{`${this.state.player4}: ${this.state.score4} points`}</h2><button onClick={() => this.setState({score4: this.state.score4 + 1})}>+1 Point</button><button onClick={() => this.setState({score4: this.state.score4 - 1})}>-1 Point</button></li>
                     <li><h2>{`${this.state.player5}: ${this.state.score5} points`}</h2><button onClick={() => this.setState({score5: this.state.score5 + 1})}>+1 Point</button><button onClick={() => this.setState({score5: this.state.score5 - 1})}>-1 Point</button></li>
                     <li><h2>{`${this.state.player6}: ${this.state.score6} points`}</h2><button onClick={() => this.setState({score6: this.state.score6 + 1})}>+1 Point</button><button onClick={() => this.setState({score6: this.state.score6 - 1})}>-1 Point</button></li>
                     <li><h2>{`${this.state.player7}: ${this.state.score7} points`}</h2><button onClick={() => this.setState({score7: this.state.score7 + 1})}>+1 Point</button><button onClick={() => this.setState({score7: this.state.score7 - 1})}>-1 Point</button></li>
                     <li><h2>{`${this.state.player8}: ${this.state.score8} points`}</h2><button onClick={() => this.setState({score8: this.state.score8 + 1})}>+1 Point</button><button onClick={() => this.setState({score8: this.state.score8 - 1})}>-1 Point</button></li>
                     </ul>
                 </div>
             )
                 break;
            case 9: 
                 return(
                 <div>
                     <ul>
                     <li><h2>{`${this.state.player1}: ${this.state.score1} points`}</h2><button onClick={() => this.setState({score1: this.state.score1 + 1})}>+1 Point</button><button onClick={() => this.setState({score1: this.state.score1 - 1})}>-1 Point</button></li>
                     <li><h2>{`${this.state.player2}: ${this.state.score2} points`}</h2><button onClick={() => this.setState({score2: this.state.score2 + 1})}>+1 Point</button><button onClick={() => this.setState({score2: this.state.score2 - 1})}>-1 Point</button></li>
                     <li><h2>{`${this.state.player3}: ${this.state.score3} points`}</h2><button onClick={() => this.setState({score3: this.state.score3 + 1})}>+1 Point</button><button onClick={() => this.setState({score3: this.state.score3 - 1})}>-1 Point</button></li>
                     <li><h2>{`${this.state.player4}: ${this.state.score4} points`}</h2><button onClick={() => this.setState({score4: this.state.score4 + 1})}>+1 Point</button><button onClick={() => this.setState({score4: this.state.score4 - 1})}>-1 Point</button></li>
                     <li><h2>{`${this.state.player5}: ${this.state.score5} points`}</h2><button onClick={() => this.setState({score5: this.state.score5 + 1})}>+1 Point</button><button onClick={() => this.setState({score5: this.state.score5 - 1})}>-1 Point</button></li>
                     <li><h2>{`${this.state.player6}: ${this.state.score6} points`}</h2><button onClick={() => this.setState({score6: this.state.score6 + 1})}>+1 Point</button><button onClick={() => this.setState({score6: this.state.score6 - 1})}>-1 Point</button></li>
                     <li><h2>{`${this.state.player7}: ${this.state.score7} points`}</h2><button onClick={() => this.setState({score7: this.state.score7 + 1})}>+1 Point</button><button onClick={() => this.setState({score7: this.state.score7 - 1})}>-1 Point</button></li>
                     <li><h2>{`${this.state.player8}: ${this.state.score8} points`}</h2><button onClick={() => this.setState({score8: this.state.score8 + 1})}>+1 Point</button><button onClick={() => this.setState({score8: this.state.score8 - 1})}>-1 Point</button></li>
                     <li><h2>{`${this.state.player9}: ${this.state.score9} points`}</h2><button onClick={() => this.setState({score9: this.state.score8 + 1})}>+1 Point</button><button onClick={() => this.setState({score9: this.state.score9 - 1})}>-1 Point</button></li>
                    </ul>
                </div>
            )
                 break;
        }
    }

    //Posts player names initially
    handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(`${this.URL}/player-scores/startgame`);
        fetch(`${this.URL}/player-scores/startgame`, {
            method: 'POST',
            body: JSON.stringify({
                playerScores: {
                    player1: this.state.player1,
                    player2: this.state.player2,
                    player3: this.state.player3,
                    player4: this.state.player4,
                    player5: this.state.player5,
                    player6: this.state.player6,
                    player7: this.state.player7,
                    player8: this.state.player8,
                    player9: this.state.player9,
                    score1: this.state.score1,
                    score2: this.state.score2,
                    score3: this.state.score3,
                    score4: this.state.score4,
                    score5: this.state.score5,
                    score6: this.state.score6,
                    score7: this.state.score7,
                    score8: this.state.score8,
                    score9: this.state.score9,
                },
            }),
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: this.token
            }),
          
        })
        .then((res) => res.json())
        .then((logData) => {
            console.log(logData);
            this.setState({currentGame: logData.id});
        })
        .then(() => {
            this.setState({showGameplay: true});
      
        });  
    };

    //posts final score and then also posts user history (still working user-history post)
    handlePutSubmit = (e: any) => {
        e.preventDefault();
        console.log(`${this.URL}/player-scores/update/${this.state.currentGame}`);
        fetch(`${this.URL}/player-scores/update/${this.state.currentGame}`, {
            method: 'PUT',
            body: JSON.stringify({
                playerScores: {
                    player1: this.state.player1,
                    player2: this.state.player2,
                    player3: this.state.player3,
                    player4: this.state.player4,
                    player5: this.state.player5,
                    player6: this.state.player6,
                    player7: this.state.player7,
                    player8: this.state.player8,
                    player9: this.state.player9,
                    score1: this.state.score1,
                    score2: this.state.score2,
                    score3: this.state.score3,
                    score4: this.state.score4,
                    score5: this.state.score5,
                    score6: this.state.score6,
                    score7: this.state.score7,
                    score8: this.state.score8,
                    score9: this.state.score9,
                },
            }),
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: this.token
            }),
          
        })
        .then((res) => res.json())
        .then((logData) => {
            console.log(logData);
            console.log("Final game score submitted");
            alert("Final Scores Recorded");
        })
        .then(() => {
            this.setState({showGameplay: false});
            console.log('gameplay set true');
        });
        //user-history post
        fetch(`${this.URL}/user-history/post`, {
            method: 'POST',
            body: JSON.stringify({
                userHistory: {
                 
                    triviaTopic: this.props.postTriviaTopic,
                    difficulty: this.props.postDifficulty,
                    winner: this.submitWinner(),
                    gameNotes: this.state.gameNotes,
                    gameId: this.state.currentGame,
                    
                },
            }),
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: this.token
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

    //creates input fields for users to enter name... switch statement so that it only shows correct # of users
    formCreator = () => {
        console.log("form creator called")
       switch (this.state.numberOfPlayers){
           case 1: 
                return (
                    <form onSubmit={this.handleSubmit}>
                    <input placeholder="Name of player 1..." onChange={(e) => this.setState({player1: e.target.value})}></input>
                        <button type="submit">Start New Game</button>
                    </form> 
                    );
                break;
            case 2: 
                return (
                    <form onSubmit={this.handleSubmit}>
                    <input placeholder="Name of player 1..." onChange={(e) => this.setState({player1: e.target.value})}></input>
                    <input placeholder="Name of player 2..." onChange={(e) => this.setState({player2: e.target.value})}></input>
                         <button type="submit">Start New Game</button>
                    </form> 
                );
                break;
            case 3: 
                return (
                    <form onSubmit={this.handleSubmit}>
                    <input placeholder="Name of player 1..." onChange={(e) => this.setState({player1: e.target.value})}></input>
                    <input placeholder="Name of player 2..." onChange={(e) => this.setState({player2: e.target.value})}></input>
                    <input placeholder="Name of player 3..." onChange={(e) => this.setState({player3: e.target.value})}></input>
                         <button type="submit">Start New Game</button>
                    </form> 
                );
                break;
            case 4: 
                return (
                    <form onSubmit={this.handleSubmit}>
                        <input placeholder="Name of player 1..." onChange={(e) => this.setState({player1: e.target.value})}></input>
                        <input placeholder="Name of player 2..." onChange={(e) => this.setState({player2: e.target.value})}></input>
                        <input placeholder="Name of player 3..." onChange={(e) => this.setState({player3: e.target.value})}></input>
                        <input placeholder="Name of player 4..." onChange={(e) => this.setState({player4: e.target.value})}></input>
                         <button type="submit">Start New Game</button>
                    </form> 
                );
                break;
            case 5: 
                return (
                    <form onSubmit={this.handleSubmit}>
                    <input placeholder="Name of player 1..." onChange={(e) => this.setState({player1: e.target.value})}></input>
                    <input placeholder="Name of player 2..." onChange={(e) => this.setState({player2: e.target.value})}></input>
                    <input placeholder="Name of player 3..." onChange={(e) => this.setState({player3: e.target.value})}></input>
                    <input placeholder="Name of player 4..." onChange={(e) => this.setState({player4: e.target.value})}></input>
                    <input placeholder="Name of player 5..." onChange={(e) => this.setState({player5: e.target.value})}></input>
                         <button type="submit">Start New Game</button>
                    </form> 
                );
                break;
            case 6: 
                return (
                    <form onSubmit={this.handleSubmit}>
                    <input placeholder="Name of player 1..." onChange={(e) => this.setState({player1: e.target.value})}></input>
                    <input placeholder="Name of player 2..." onChange={(e) => this.setState({player2: e.target.value})}></input>
                    <input placeholder="Name of player 3..." onChange={(e) => this.setState({player3: e.target.value})}></input>
                    <input placeholder="Name of player 4..." onChange={(e) => this.setState({player4: e.target.value})}></input>
                    <input placeholder="Name of player 5..." onChange={(e) => this.setState({player5: e.target.value})}></input>
                    <input placeholder="Name of player 6..." onChange={(e) => this.setState({player6: e.target.value})}></input>
                         <button type="submit">Start New Game</button>
                    </form> 
                );
                break;
            case 7: 
                return (
                    <form onSubmit={this.handleSubmit}>
                    <input placeholder="Name of player 1..." onChange={(e) => this.setState({player1: e.target.value})}></input>
                    <input placeholder="Name of player 2..." onChange={(e) => this.setState({player2: e.target.value})}></input>
                    <input placeholder="Name of player 3..." onChange={(e) => this.setState({player3: e.target.value})}></input>
                    <input placeholder="Name of player 4..." onChange={(e) => this.setState({player4: e.target.value})}></input>
                    <input placeholder="Name of player 5..." onChange={(e) => this.setState({player5: e.target.value})}></input>
                    <input placeholder="Name of player 6..." onChange={(e) => this.setState({player6: e.target.value})}></input>
                    <input placeholder="Name of player 7..." onChange={(e) => this.setState({player7: e.target.value})}></input>
                         <button type="submit">Start New Game</button>
                    </form> 
                );
                break;
            case 8: 
                return (
                    <form onSubmit={this.handleSubmit}>
                        <input placeholder="Name of player 1..." onChange={(e) => this.setState({player1: e.target.value})}></input>
                        <input placeholder="Name of player 2..." onChange={(e) => this.setState({player2: e.target.value})}></input>
                        <input placeholder="Name of player 3..." onChange={(e) => this.setState({player3: e.target.value})}></input>
                        <input placeholder="Name of player 4..." onChange={(e) => this.setState({player4: e.target.value})}></input>
                        <input placeholder="Name of player 5..." onChange={(e) => this.setState({player5: e.target.value})}></input>
                        <input placeholder="Name of player 6..." onChange={(e) => this.setState({player6: e.target.value})}></input>
                        <input placeholder="Name of player 7..." onChange={(e) => this.setState({player7: e.target.value})}></input>
                        <input placeholder="Name of player 8..." onChange={(e) => this.setState({player8: e.target.value})}></input>
                        <button type="submit">Start New Game</button>
                    </form> 
                );
                break;
            case 9: 
                return (
                    <form onSubmit={this.handleSubmit}>
                        <input placeholder="Name of player 1..." onChange={(e) => this.setState({player1: e.target.value})}></input>
                        <input placeholder="Name of player 2..." onChange={(e) => this.setState({player2: e.target.value})}></input>
                        <input placeholder="Name of player 3..." onChange={(e) => this.setState({player3: e.target.value})}></input>
                        <input placeholder="Name of player 4..." onChange={(e) => this.setState({player4: e.target.value})}></input>
                        <input placeholder="Name of player 5..." onChange={(e) => this.setState({player5: e.target.value})}></input>
                        <input placeholder="Name of player 6..." onChange={(e) => this.setState({player6: e.target.value})}></input>
                        <input placeholder="Name of player 7..." onChange={(e) => this.setState({player7: e.target.value})}></input>
                        <input placeholder="Name of player 8..." onChange={(e) => this.setState({player8: e.target.value})}></input>
                        <input placeholder="Name of player 9..." onChange={(e) => this.setState({player9: e.target.value})}></input>
                         <button type="submit">Start New Game</button>
                    </form> 
                );
                break;
       }
   }

submitWinner = () => {
    let scoreboard = {
        p1: this.state.score1,
        p2: this.state.score2,
        p3: this.state.score3, 
        p4: this.state.score4,
        p5: this.state.score5,
        p6: this.state.score6,
        p7: this.state.score7,
        p8: this.state.score8,
        p9: this.state.score9
        
    }
    let winnerKey = this.findWinner(scoreboard);
    if (winnerKey == "p1" && this.state.player1 !=="" && this.state.score1 !== 0){
        return(this.state.player1)
    } else if (winnerKey == "p2" && this.state.player2 !=="" && this.state.score2 !== 0){ return(this.state.player2)
    } else if (winnerKey == "p3" && this.state.player3 !==""  && this.state.score3 !== 0){
        return(this.state.player3)
    } else if (winnerKey == "p4" && this.state.player4 !==""  && this.state.score4 !== 0){
        return(this.state.player4)
    } else if (winnerKey == "p5" && this.state.player5 !==""  && this.state.score5 !== 0){
        return(this.state.player5)
    } else if (winnerKey == "p6" && this.state.player6 !==""  && this.state.score6 !== 0){
        return(this.state.player6)
    } else if (winnerKey == "p7" && this.state.player7 !==""  && this.state.score7 !== 0){
        return(this.state.player7)
    } else if (winnerKey == "p8" && this.state.player8 !==""  && this.state.score8 !== 0){
        return(this.state.player8)
    } else if (winnerKey == "p9" && this.state.player9 !==""  && this.state.score9 !== 0){
        return(this.state.player9)
    } 


}


displayWinner = () => {
    let scoreboard = {
        p1: this.state.score1,
        p2: this.state.score2,
        p3: this.state.score3, 
        p4: this.state.score4,
        p5: this.state.score5,
        p6: this.state.score6,
        p7: this.state.score7,
        p8: this.state.score8,
        p9: this.state.score9
        
    }
    let winnerKey = this.findWinner(scoreboard);
    if (winnerKey == "p1" && this.state.player1 !=="" && this.state.score1 !== 0){
        return(
            <div><h5>{`Currently in head place is ${this.state.player1} with ${this.state.score1} points!`}</h5></div>
        )
    } else if (winnerKey == "p2" && this.state.player2 !=="" && this.state.score2 !== 0){
        return(
            <div><h5>{`Currently in head place is ${this.state.player2} with ${this.state.score2} points!`}</h5></div>
        )
    } else if (winnerKey == "p3" && this.state.player3 !==""  && this.state.score3 !== 0){
        return(
            <div><h5>{`Currently in head place is ${this.state.player3} with ${this.state.score3} points!`}</h5></div>
        )
    } else if (winnerKey == "p4" && this.state.player4 !==""  && this.state.score4 !== 0){
        return(
            <div><h5>{`Currently in head place is ${this.state.player4} with ${this.state.score4} points!`}</h5></div>
        )
    } else if (winnerKey == "p5" && this.state.player5 !==""  && this.state.score5 !== 0){
        return(
            <div><h5>{`Currently in head place is ${this.state.player5} with ${this.state.score5} points!`}</h5></div>
        )
    } else if (winnerKey == "p6" && this.state.player6 !==""  && this.state.score6 !== 0){
        return(
            <div><h5>{`Currently in head place is ${this.state.player6} with ${this.state.score6} points!`}</h5></div>
        )
    } else if (winnerKey == "p7" && this.state.player7 !==""  && this.state.score7 !== 0){
        return(
            <div><h5>{`Currently in head place is ${this.state.player7} with ${this.state.score7} points!`}</h5></div>
        )
    } else if (winnerKey == "p8" && this.state.player8 !==""  && this.state.score8 !== 0){
        return(
            <div><h5>{`Currently in head place is ${this.state.player8} with ${this.state.score8} points!`}</h5></div>
        )
    } else if (winnerKey == "p9" && this.state.player9 !==""  && this.state.score9 !== 0){
        return(
            <div><h5>{`Currently in head place is ${this.state.player9} with ${this.state.score9} points!`}</h5></div>
        )
    } 


}

//function that computes the highest score out of the "scoreboard" variable
findWinner = (obj: any) => {
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

    render() { 
        return ( <div>
             {this.displayWinner()}
            {this.gameplayCreator()}
            
        </div> );
    }
}
 
export default NewGameSetup;