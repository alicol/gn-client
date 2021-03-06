import React, {useState, useEffect} from 'react';
// import { tokenToString } from 'typescript';
import './sidebar.css'
import UserTable from '../Admin/UserTable';
import {Button, withStyles} from '@material-ui/core';
import APIURL from '../helpers/environment';



export interface ViewScoresProps {
    token: string,
    setRedirect: any,
    classes: {
        root: any;
    },
}
 
export interface ViewScoresState {
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
    scores: any,
    playerData: any,
    viewDetails: boolean,
    gameId: number,
}
 
class ViewScores extends React.Component<ViewScoresProps, ViewScoresState> {
    classes : any
    constructor(props: ViewScoresProps) {
        super(props);
        this.state = {player1: null, player2: null, player3: null, player4: null, player5: null, player6: null, player7: null, player8: null, player9: null, score1: 0, score2: 0, score3: 0, score4: 0, score5: 0, score6: 0, score7: 0, score8: 0, score9: 0, scores: [], playerData: {}, viewDetails: false, gameId: 0};
        this.classes = this.props.classes;
    }



    componentDidMount = () => {
        this.getMyScores();
        // detailedView();
    }

    getMyScores = () => {

    fetch(`${APIURL}/user-history/get/mygames`, {
        method: "GET",
        headers: new Headers({
            "Content-Type": "application/json",
            Authorization: this.props.token,
        }),
    })
    .then((res) => res.json())
    .then((logData) => {
        this.setState({scores: logData});
        console.log(logData[0]);
    
    })
    .catch(err => {
        console.log(err, "fetch failed");
    })
}

    getMyPlayerScores = (gameId: any) => {

    fetch(`${APIURL}/player-scores/seegame/${gameId}`, {
        method: "GET",
        headers: new Headers({
            "Content-Type": "application/json",
            Authorization: this.props.token,
        }),
    })
    .then((res) => res.json())
    .then((logData) => {
        this.setState({playerData: logData[0]})
        console.log(logData);
        this.setState({viewDetails: true})
       
    }) 
    .catch(err => {
        console.log(err, "fetch failed");
    })
    
}
correctPlayerScores = () => {
    if (this.state.playerData.player2 == null){
        return (<div className="scoreTableDiv">
            <table className="scoreTable">
                <tr className="scoretrhead">
                    <th className="scoreth">Player</th>
                    <th className="scoreth">Score</th>
                </tr>
                <tr className="scoretr">
                    <td className="scoretdlast">{`${this.state.playerData.player1}`}</td>
                    <td className="scoretdlast">{`${this.state.playerData.score1}`}</td>
                </tr>
                </table>
        </div>)
    } else if (this.state.playerData.player3 == null){
        return (<div className="scoreTableDiv">
        <table className="scoreTable">
            <tr>
                <th className="scoreth">Player</th>
                <th className="scoreth">Score</th>
            </tr>
            <tr className="scoretr">
                <td className="scoretd">{`${this.state.playerData.player1}`}</td>
                <td className="scoretd">{`${this.state.playerData.score1}`}</td>
                </tr>
                <tr className="scoretr">
                    <td className="scoretdlast">{`${this.state.playerData.player2}`}</td>
                    <td className="scoretdlast">{`${this.state.playerData.score2}`}</td>
                </tr>
                </table>
        </div>)
    } else if (this.state.playerData.player4 == null){
        return (<div className="scoreTableDiv">
        <table className="scoreTable">
            <tr>
                <th className="scoreth">Player</th>
                <th className="scoreth">Score</th>
            </tr>
            <tr className="scoretr">
                <td className="scoretd">{`${this.state.playerData.player1}`}</td>
                <td className="scoretd">{`${this.state.playerData.score1}`}</td>
            </tr>
            <tr className="scoretr">
                <td className="scoretd">{`${this.state.playerData.player2}`}</td>
                <td className="scoretd">{`${this.state.playerData.score2}`}</td>
            </tr>
            <tr className="scoretr">
                <td className="scoretdlast">{`${this.state.playerData.player3}`}</td>
                <td className="scoretdlast">{`${this.state.playerData.score3}`}</td>
            </tr>
            </table>
        </div>)
    } else if (this.state.playerData.player5 == null){
        return (<div className="scoreTableDiv">
        <table className="scoreTable">
            <tr>
                <th className="scoreth">Player</th>
                <th className="scoreth">Score</th>
            </tr>
            <tr className="scoretr">
                <td className="scoretd">{`${this.state.playerData.player1}`}</td>
                <td className="scoretd">{`${this.state.playerData.score1}`}</td>
            </tr>
            <tr className="scoretr">
                <td className="scoretd">{`${this.state.playerData.player2}`}</td>
                <td className="scoretd">{`${this.state.playerData.score2}`}</td>
            </tr>
            <tr className="scoretr">
                <td className="scoretd">{`${this.state.playerData.player3}`}</td>
                <td className="scoretd">{`${this.state.playerData.score3}`}</td>
            </tr>
            <tr className="scoretr">
                <td className="scoretdlast">{`${this.state.playerData.player4}`}</td>
                <td className="scoretdlast">{`${this.state.playerData.score4}`}</td>
            </tr>
            </table>
        </div>)
    } else if (this.state.playerData.player6 == null){
        return (<div className="scoreTableDiv">
        <table className="scoreTable">
            <tr>
                <th className="scoreth">Player</th>
                <th className="scoreth">Score</th>
            </tr>
            <tr className="scoretr">
                <td className="scoretd">{`${this.state.playerData.player1}`}</td>
                <td className="scoretd">{`${this.state.playerData.score1}`}</td>
            </tr>
            <tr className="scoretr">
                <td className="scoretd">{`${this.state.playerData.player2}`}</td>
                <td className="scoretd">{`${this.state.playerData.score2}`}</td>
            </tr>
            <tr className="scoretr">
                <td className="scoretd">{`${this.state.playerData.player3}`}</td>
                <td className="scoretd">{`${this.state.playerData.score3}`}</td>
            </tr>
            <tr className="scoretr">
                <td className="scoretd">{`${this.state.playerData.player4}`}</td>
                <td className="scoretd">{`${this.state.playerData.score4}`}</td>
            </tr>
            <tr className="scoretr">
                <td className="scoretdlast">{`${this.state.playerData.player5}`}</td>
                <td className="scoretdlast">{`${this.state.playerData.score5}`}</td>
            </tr>
            </table>
        </div>)
    } else if (this.state.playerData.player7 == null){
        return (<div className="scoreTableDiv">
        <table className="scoreTable">
            <tr>
                <th className="scoreth">Player</th>
                <th className="scoreth">Score</th>
            </tr>
            <tr className="scoretr">
                <td className="scoretd">{`${this.state.playerData.player1}`}</td>
                <td className="scoretd">{`${this.state.playerData.score1}`}</td>
            </tr>
            <tr className="scoretr">
                <td className="scoretd">{`${this.state.playerData.player2}`}</td>
                <td className="scoretd">{`${this.state.playerData.score2}`}</td>
            </tr>
            <tr className="scoretr">
                <td className="scoretd">{`${this.state.playerData.player3}`}</td>
                <td className="scoretd">{`${this.state.playerData.score3}`}</td>
            </tr>
            <tr className="scoretr">
                <td className="scoretd">{`${this.state.playerData.player4}`}</td>
                <td className="scoretd">{`${this.state.playerData.score4}`}</td>
            </tr>
            <tr className="scoretr">
                <td className="scoretd">{`${this.state.playerData.player5}`}</td>
                <td className="scoretd">{`${this.state.playerData.score5}`}</td>
            </tr>
            <tr className="scoretr">
                <td className="scoretdlast">{`${this.state.playerData.player6}`}</td>
                <td className="scoretdlast">{`${this.state.playerData.score6}`}</td>
            </tr>
            </table>
        </div>)
    } else if (this.state.playerData.player8 == null){
        return (<div className="scoreTableDiv">
        <table className="scoreTable">
            <tr>
                <th className="scoreth">Player</th>
                <th className="scoreth">Score</th>
            </tr>
            <tr className="scoretr">
                <td className="scoretd">{`${this.state.playerData.player1}`}</td>
                <td className="scoretd">{`${this.state.playerData.score1}`}</td>
            </tr>
            <tr className="scoretr">
                <td className="scoretd">{`${this.state.playerData.player2}`}</td>
                <td className="scoretd">{`${this.state.playerData.score2}`}</td>
            </tr>
            <tr className="scoretr">
                <td className="scoretd">{`${this.state.playerData.player3}`}</td>
                <td className="scoretd">{`${this.state.playerData.score3}`}</td>
            </tr>
            <tr className="scoretr">
                <td className="scoretd">{`${this.state.playerData.player4}`}</td>
                <td className="scoretd">{`${this.state.playerData.score4}`}</td>
            </tr>
            <tr className="scoretr">
                <td className="scoretd">{`${this.state.playerData.player5}`}</td>
                <td className="scoretd">{`${this.state.playerData.score5}`}</td>
            </tr>
            <tr className="scoretr">
                <td className="scoretd">{`${this.state.playerData.player6}`}</td>
                <td className="scoretd">{`${this.state.playerData.score6}`}</td>
            </tr>
            <tr className="scoretr">
                <td className="scoretdlast">{`${this.state.playerData.player7}`}</td>
                <td className="scoretdlast">{`${this.state.playerData.score7}`}</td>
            </tr>
            </table>
        </div>)
    } else if (this.state.playerData.player9 == null){
        return (<div className="scoreTableDiv">
        <table className="scoreTable">
            <tr>
                <th className="scoreth">Player</th>
                <th className="scoreth">Score</th>
            </tr>
            <tr className="scoretr">
                <td className="scoretd">{`${this.state.playerData.player1}`}</td>
                <td className="scoretd">{`${this.state.playerData.score1}`}</td>
            </tr>
            <tr className="scoretr">
                <td className="scoretd">{`${this.state.playerData.player2}`}</td>
                <td className="scoretd">{`${this.state.playerData.score2}`}</td>
            </tr>
            <tr className="scoretr">
                <td className="scoretd">{`${this.state.playerData.player3}`}</td>
                <td className="scoretd">{`${this.state.playerData.score3}`}</td>
            </tr>
            <tr className="scoretr">
                <td className="scoretd">{`${this.state.playerData.player4}`}</td>
                <td className="scoretd">{`${this.state.playerData.score4}`}</td>
            </tr>
            <tr className="scoretr">
                <td className="scoretd">{`${this.state.playerData.player5}`}</td>
                <td className="scoretd">{`${this.state.playerData.score5}`}</td>
            </tr>
            <tr className="scoretr">
                <td className="scoretd">{`${this.state.playerData.player6}`}</td>
                <td className="scoretd">{`${this.state.playerData.score6}`}</td>
            </tr>
            <tr className="scoretr">
                <td className="scoretd">{`${this.state.playerData.player7}`}</td>
                <td className="scoretd">{`${this.state.playerData.score7}`}</td>
            </tr>
            <tr className="scoretr">
                <td className="scoretdlast">{`${this.state.playerData.player8}`}</td>
                <td className="scoretdlast">{`${this.state.playerData.score8}`}</td>
            </tr>
            </table>
        </div>)
    } else {
        return (<div className="scoreTableDiv">
        <table className="scoreTable">
            <tr>
                <th className="scoreth">Player</th>
                <th className="scoreth">Score</th>
            </tr>
            <tr className="scoretr">
                <td className="scoretd">{`${this.state.playerData.player1}`}</td>
                <td className="scoretd">{`${this.state.playerData.score1}`}</td>
            </tr>
            <tr className="scoretr">
                <td className="scoretd">{`${this.state.playerData.player2}`}</td>
                <td className="scoretd">{`${this.state.playerData.score2}`}</td>
            </tr>
            <tr className="scoretr">
                <td className="scoretd">{`${this.state.playerData.player3}`}</td>
                <td className="scoretd">{`${this.state.playerData.score3}`}</td>
            </tr>
            <tr className="scoretr">
                <td className="scoretd">{`${this.state.playerData.player4}`}</td>
                <td className="scoretd">{`${this.state.playerData.score4}`}</td>
            </tr>
            <tr className="scoretr">
                <td className="scoretd">{`${this.state.playerData.player5}`}</td>
                <td className="scoretd">{`${this.state.playerData.score5}`}</td>
            </tr>
            <tr className="scoretr">
                <td className="scoretd">{`${this.state.playerData.player6}`}</td>
                <td className="scoretd">{`${this.state.playerData.score6}`}</td>
            </tr>
            <tr className="scoretr">
                <td className="scoretd">{`${this.state.playerData.player7}`}</td>
                <td className="scoretd">{`${this.state.playerData.score7}`}</td>
            </tr>
            <tr className="scoretr">
                <td className="scoretd">{`${this.state.playerData.player8}`}</td>
                <td className="scoretd">{`${this.state.playerData.score8}`}</td>
            </tr>
            <tr className="scoretr">
                <td className="scoretdlast">{`${this.state.playerData.player9}`}</td>
                <td className="scoretdlast">{`${this.state.playerData.score9}`}</td>
            </tr>
            </table>
        </div>)
    }
}
  
displayScores = () => {
 if (this.state.scores !==[]){
    return this.state.scores.map((score: any) => {
        const id = score.id;
        const owner = score.owner;
        const difficulty = score.difficulty;
        const gameNotes = score.gameNotes;
        const topic = score.triviaTopic;
        const winner = score.winner;
        const gameId = score.gameId;

      const detailedView = () => {
            if (this.state.viewDetails === true && this.state.playerData !== {} && gameId == this.state.gameId){ 
                return (<div>
                 {/* <h3>Player Scores</h3> */}
               {this.correctPlayerScores()}
                    <Button className={this.classes.close} variant="contained" color="secondary" size="large" onClick={(e) => this.setState({viewDetails: false})}>Close</Button>
                </div>)
            } else {return (<></>)}
        }
        
   
        const specificMonth = (score: any) => {
           
            const string = score.createdAt;
            let month = string.substr(5,2);
  
            switch (month) {
              case "01":
                return "January";
                break;
              case "02": 
                return "February";
                break;
              case "03":
                return "March";
                break;
              case "04":
                return "April";
                break;
              case "05":
                return "May";
                break;
              case "06":
                return "June";
                break;
              case "07":
                return "July";
                break;
              case "08":
                return "August";
                break;
              case "09":
                return "September";
                break;
              case "10":
                return "October";
                break;
              case "11":
                return "November";
                break;
              case "12":
                return "December";
                break; 
              default: 
                 return "default month"
                 break;
            } 
          }
  
          const specificDay = (score: any) => {
            const string = score.createdAt;
            let day = string.substr(8,2);
            if (day.substr(0,1) == 0){
              return day.substr(1,1)
            } else {
              return day;
            }
          }
  
          const specificYear = (score: any) => {
            const string = score.createdAt;
            let year = string.substr(0,4)
            return year;
          }

          const ifGameNotes = () => {
              if (gameNotes !== null){
                  return gameNotes
              } else {
                  return ("--")
              }
          }  
        return (
            <div className="pastGames">
                <h3 className="pastGameSentence">{`${winner} won ${difficulty} ${topic} trivia on ${specificMonth(score)} ${specificDay(score)}, ${specificYear(score)}`}</h3>
                <div>
                    <p className="pastGameNotes">{`Game Notes: ${ifGameNotes()}`}</p>
                </div>
                <Button className={this.classes.root} variant="contained" color="primary" onClick={(e)=>{this.getMyPlayerScores(gameId); this.setState({gameId: gameId})}}>View Player Scores</Button>

                {detailedView()}
            </div>
        )
    })
 } else {
     return (<div> No Scores to display</div>)
 }
}

    render() { 
        return ( 
            <div>
                <hr />
                <h2 className="yourGameScores">Your Game Scores</h2>
                {this.props.setRedirect(null)}
                {this.displayScores()}

            </div>
         );
    }
}
 
export default withStyles((theme) => ({
    root: {
        fontFamily: "Roboto",
        fontWeight: 'bold',
        fontSize: '1.5vw',
        marginBottom: '1.5vw',
        border: '3px solid white',
    },

    close: {
        fontWeight: 'bold',
        marginTop: '-.2vw',
        border: '3px solid white',
        fontSize: '1vw',
    }
}))(ViewScores);