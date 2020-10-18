import React, {useState, useEffect} from 'react';






export interface UserTableProps {
    token: string
}
 
export interface UserTableState {
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
    gameId: number
}
 
class UserTable extends React.Component<UserTableProps, UserTableState> {
    constructor(props: UserTableProps) {
        super(props);
        this.state = {player1: null, player2: null, player3: null, player4: null, player5: null, player6: null, player7: null, player8: null, player9: null, score1: 0, score2: 0, score3: 0, score4: 0, score5: 0, score6: 0, score7: 0, score8: 0, score9: 0, scores: [], playerData: {}, viewDetails: false, gameId: 0};
    }

    URL = "http://localhost:3000";

    componentDidMount = () => {
        this.getMyScores();
        this.detailedView();
    }

    getMyScores = () => {

    fetch(`${this.URL}/user/seeall`, {
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
}

    getMyPlayerScores = (gameId: any) => {

    fetch(`${this.URL}/player-scores/seegame/${gameId}`, {
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
    
}
correctPlayerScores = () => {
    if (this.state.playerData.player2 == null){
        return (<div>
            <ul>
                <li>{`${this.state.playerData.player1}: ${this.state.playerData.score1}`}</li>
            </ul>
        </div>)
    } else if (this.state.playerData.player3 == null){
        return (<div>
            <ul>
                <li>{`${this.state.playerData.player1}: ${this.state.playerData.score1}`}</li>
                <li>{`${this.state.playerData.player2}: ${this.state.playerData.score2}`}</li>
            </ul>
        </div>)
    } else if (this.state.playerData.player4 == null){
        return (<div>
            <ul>
                <li>{`${this.state.playerData.player1}: ${this.state.playerData.score1}`}</li>
                <li>{`${this.state.playerData.player2}: ${this.state.playerData.score2}`}</li>
                <li>{`${this.state.playerData.player3}: ${this.state.playerData.score3}`}</li>
            </ul>
        </div>)
    } else if (this.state.playerData.player5 == null){
        return (<div>
            <ul>
                <li>{`${this.state.playerData.player1}: ${this.state.playerData.score1}`}</li>
                <li>{`${this.state.playerData.player2}: ${this.state.playerData.score2}`}</li>
                <li>{`${this.state.playerData.player3}: ${this.state.playerData.score3}`}</li>   <li>{`${this.state.playerData.player4}: ${this.state.playerData.score4}`}</li>
                <li>{`${this.state.playerData.player4}: ${this.state.playerData.score4}`}</li>
            </ul>
        </div>)
    } else if (this.state.playerData.player6 == null){
        return (<div>
            <ul>
                <li>{`${this.state.playerData.player1}: ${this.state.playerData.score1}`}</li>
                <li>{`${this.state.playerData.player2}: ${this.state.playerData.score2}`}</li>
                <li>{`${this.state.playerData.player3}: ${this.state.playerData.score3}`}</li>
                <li>{`${this.state.playerData.player4}: ${this.state.playerData.score4}`}</li>
                <li>{`${this.state.playerData.player5}: ${this.state.playerData.score5}`}</li>
            </ul>
        </div>)
    } else if (this.state.playerData.player7 == null){
        return (<div>
            <ul>
                <li>{`${this.state.playerData.player1}: ${this.state.playerData.score1}`}</li>
                <li>{`${this.state.playerData.player2}: ${this.state.playerData.score2}`}</li>
                <li>{`${this.state.playerData.player3}: ${this.state.playerData.score3}`}</li>
                <li>{`${this.state.playerData.player4}: ${this.state.playerData.score4}`}</li>
                <li>{`${this.state.playerData.player5}: ${this.state.playerData.score5}`}</li>
                <li>{`${this.state.playerData.player6}: ${this.state.playerData.score6}`}</li>
            </ul>
        </div>)
    } else if (this.state.playerData.player8 == null){
        return (<div>
            <ul>
                <li>{`${this.state.playerData.player1}: ${this.state.playerData.score1}`}</li>
                <li>{`${this.state.playerData.player2}: ${this.state.playerData.score2}`}</li>
                <li>{`${this.state.playerData.player3}: ${this.state.playerData.score3}`}</li>
                <li>{`${this.state.playerData.player4}: ${this.state.playerData.score4}`}</li>
                <li>{`${this.state.playerData.player5}: ${this.state.playerData.score5}`}</li>
                <li>{`${this.state.playerData.player6}: ${this.state.playerData.score6}`}</li>
                <li>{`${this.state.playerData.player7}: ${this.state.playerData.score7}`}</li>
            </ul>
        </div>)
    } else if (this.state.playerData.player9 == null){
        return (<div>
            <ul>
                <li>{`${this.state.playerData.player1}: ${this.state.playerData.score1}`}</li>
                <li>{`${this.state.playerData.player2}: ${this.state.playerData.score2}`}</li>
                <li>{`${this.state.playerData.player3}: ${this.state.playerData.score3}`}</li>
                <li>{`${this.state.playerData.player4}: ${this.state.playerData.score4}`}</li>
                <li>{`${this.state.playerData.player5}: ${this.state.playerData.score5}`}</li>
                <li>{`${this.state.playerData.player6}: ${this.state.playerData.score6}`}</li>
                <li>{`${this.state.playerData.player7}: ${this.state.playerData.score7}`}</li>
                <li>{`${this.state.playerData.player8}: ${this.state.playerData.score8}`}</li>
            </ul>
        </div>)
    } else {
        return (<div>
            <ul>
                <li>{`${this.state.playerData.player1}: ${this.state.playerData.score1}`}</li>
                <li>{`${this.state.playerData.player2}: ${this.state.playerData.score2}`}</li>
                <li>{`${this.state.playerData.player3}: ${this.state.playerData.score3}`}</li>
                <li>{`${this.state.playerData.player4}: ${this.state.playerData.score4}`}</li>
                <li>{`${this.state.playerData.player5}: ${this.state.playerData.score5}`}</li>
                <li>{`${this.state.playerData.player6}: ${this.state.playerData.score6}`}</li>
                <li>{`${this.state.playerData.player7}: ${this.state.playerData.score7}`}</li>
                <li>{`${this.state.playerData.player8}: ${this.state.playerData.score8}`}</li>
                <li>{`${this.state.playerData.player9}: ${this.state.playerData.score9}`}</li>
            </ul>
        </div>)
    }
}
//view of game details
detailedView = () => {
    if (this.state.viewDetails === true && this.state.playerData !== {}){ 
    console.log(this.state.playerData);
        return (<div>
         <h3>Player Scores</h3>
       {this.correctPlayerScores()}
            <button onClick={(e) => this.setState({viewDetails: false})}>Close Details</button>
        </div>)
    } else if (this.state.viewDetails === true) {return (<div>Loading Results</div>)}
    else {return (<></>)}
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
                  return ("N/A")
              }
          }  
        return (
            <div>
                <h3>{`${winner} won this game on ${specificMonth(score)} ${specificDay(score)}, ${specificYear(score)}`}</h3>
                <ul>
                    <li>{`Category: ${topic}`}</li>
                    <li>{`Difficulty: ${difficulty}`}</li>
                    <li>{`Game Notes: ${ifGameNotes()}`}</li>
                </ul>
                <button onClick={(e)=>{this.getMyPlayerScores(gameId)}}>View Player Scores</button>
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
                {this.detailedView()}
                {this.displayScores()}
                
            </div>
         );
    }
}
 
export default UserTable;
