import * as React from 'react';

export interface GameEditProps {
    token: string
}
 
export interface GameEditState {
    userHistory: any,
    updatedWinner: string,
    updatedGameNotes: string,
    showEditGame: boolean,
    editGameId: number | null

}
 
class GameEdit extends React.Component<GameEditProps, GameEditState> {
    constructor(props: GameEditProps) {
        super(props);
        this.state = { userHistory: [], updatedWinner: "", updatedGameNotes: "", editGameId: null, showEditGame: false};
    }
    URL = "http://localhost:3000";

    componentDidMount = () => {
        this.getUserHistory()
      }
    
      getUserHistory = () => {
    
        fetch(`${this.URL}/user-history/getall`, {
          method: "GET",
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization: this.props.token,
          }),
        })
          .then((res) => res.json())
          .then((logData) => {
            this.setState({ userHistory: logData });
            console.log(logData);
    
          })
      }
    
      displayUserHistory = () => {
        if (this.state.userHistory !== []) {
          return this.state.userHistory.map((game: any) => {
            const gameId = game.id;
            const playerScoresId = game.gameId;
            const ownerId = game.owner;
            const gameNotes = game.gameNotes;
            const difficulty = game.difficulty;
            const topic = game.triviaTopic;
            const winner = game.winner;
            const date = game.createdAt;
    
            const showEdits = (gameId: number) => {
              if (this.state.showEditGame == true && this.state.editGameId == gameId){
                return(
                  <div>
                      <p>Edit Game</p>
                      <label>Winner</label>
                  <input placeholder="Enter updated winner..." defaultValue={winner} type="text" onChange={(e) => this.setState({updatedWinner: e.target.value})}/>
                  <br />
                  <label>Game Notes</label>
                  <input placeholder="Enter updated notes..." defaultValue={gameNotes} type="text" onChange={(e) => this.setState({updatedGameNotes: e.target.value})}/>
                  <br />
                    <button onClick={(e) => {this.setState({editGameId: null}); this.setState({showEditGame: false})}}>Cancel</button>
                    <button type="submit" onClick={(e) => {this.updateGame(gameId); this.setState({showEditGame: false})}}> Submit Change</button> 
                  </div>
                )
              }
            }
            const specificMonth = (date: any) => {
           
                let month = date.substr(5,2);
      
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
      
              const specificDay = (date: any) => {
                let day = date.substr(8,2);
                if (day.substr(0,1) == 0){
                  return day.substr(1,1)
                } else {
                  return day;
                }
              }
      
              const specificYear = (date: any) => {
                let year = date.substr(0,4)
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
                    <h3>{`Game #${gameId} - ${specificMonth(date)} ${specificDay(date)}, ${specificYear(date)}`}</h3>
                    <ul>
                        <li>{`Owner ID: ${ownerId}`}</li>
                        <li>{`Winner: ${winner}`}</li>
                        <li>{`Category: ${topic}`}</li>
                        <li>{`Difficulty: ${difficulty}`}</li>
                        <li>{`Game Notes: ${ifGameNotes()}`}</li>
                    </ul>
                    {showEdits(gameId)}
            <button onClick={(e) => {this.setState({showEditGame: true}); this.setState({editGameId: gameId})}}>Edit</button>
            <button onClick={(e)=>{this.deleteGame(gameId)}}>Delete</button>
                </div>
            )
        })
        }
      }
    
    
    deleteGame = (gameId:number) => {
      fetch(`${this.URL}/user-history/delete/${gameId}`, {
        method: "DELETE",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: this.props.token,
        }),
      })
        .then((res) => res.json())
        .then((logData) => {
          alert("This game has been deleted.")
          console.log(logData);
          this.getUserHistory();
    
        })
    }
    
    updateGame = (gameId: number) => {
      fetch(`${this.URL}/user-history/update/${gameId}`, {
        method: "PUT",
        body: JSON.stringify({
          userHistory: {
           winner: this.state.updatedWinner,
           gameNotes: this.state.updatedGameNotes
         
          },
      }),
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: this.props.token,
        }),
      })
        .then((res) => res.json())
        .then((logData) => {
          alert("This user has been edited.")
          console.log(logData);
          this.getUserHistory();
    
        })
    }
    render() { 
        return ( <div><h3>Game Edit</h3>
        {this.displayUserHistory()}</div> );
    }
}
 
export default GameEdit;