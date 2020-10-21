import * as React from 'react';
// import '../Home/sidebar.css';
import './Admin.css';
import {Button, withStyles} from '@material-ui/core'

export interface GameEditProps {
    token: string
    classes: {
      root: any;
      warning: any;
      danger: any;
      editForm: any;
    };
}
 
export interface GameEditState {
    userHistory: any,
    updatedWinner: string,
    updatedGameNotes: string,
    showEditGame: boolean,
    editGameId: number | null

}
 
class GameEdit extends React.Component<GameEditProps, GameEditState> {
  classes : any
    constructor(props: GameEditProps) {
        super(props);
        this.state = { userHistory: [], updatedWinner: "", updatedGameNotes: "", editGameId: null, showEditGame: false};
        this.classes = this.props.classes;
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
                  <div className="gameEditForm">
                      <h3 className="editFormTitle">Corrections</h3>
                      <label className="editFormLabels">Winner: </label>
                  <input className="editWinnerInput" placeholder="Enter updated winner..." defaultValue={winner} type="text" onChange={(e) => this.setState({updatedWinner: e.target.value})}/>
                  <br />
                  <label className="editFormLabels">Game Notes: </label>
                  <input className="editNotesInput" placeholder="Enter updated notes..." defaultValue={gameNotes} type="text" onChange={(e) => this.setState({updatedGameNotes: e.target.value})}/>
                  <br />
                    <Button className={this.classes.editForm} variant="contained" color="secondary" onClick={(e) => {this.setState({editGameId: null}); this.setState({showEditGame: false})}}>Cancel</Button>
                    <Button className={this.classes.editForm} variant="contained" color="primary" type="submit" onClick={(e) => {this.updateGame(gameId); this.setState({showEditGame: false})}}> Submit Change</Button> 
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
                <div className="gameEdits">
                    <p className="sentence">{`User ${ownerId} | Game #${gameId} | ${specificMonth(date)} ${specificDay(date)}, ${specificYear(date)}`}</p>
                    
                        <p className="sentence">{`${winner} won ${difficulty} ${topic}`} trivia!</p>
                        <p className="adminGameNotes">{`Game Notes: ${ifGameNotes()}`}</p>

                    {showEdits(gameId)}
            <Button className={this.classes.warning} onClick={(e) => {this.setState({showEditGame: true}); this.setState({editGameId: gameId})}}>Edit</Button>
            <Button className={this.classes.danger} onClick={(e)=>{this.deleteGame(gameId)}}>Delete</Button>
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
        return ( <div>
          <hr />
          <h3 className="editGameHeading">Game Edit</h3>
        {this.displayUserHistory()}</div> );
    }
}
 
export default withStyles((theme) => ({
  root: {
    fontFamily: 'Roboto',
  },

  danger: {
    background: '#ff1744',
    '&:hover': {
      backgroundColor: '#ff616f',
    },
    fontWeight: 'bold',
    marginLeft: '1vw',
    width: '10vw',
  },

  warning: {
    background: '#ff8f00',
    '&:hover': {
      backgroundColor: '#ffc046',
    },
    fontWeight: 'bold',
    marginRight: '1vw',
    width: '10vw',
  },

  editForm: {
    marginLeft: '.5vw',
    marginRight: '.5vw',
    fontWeight: 'bold',
  },
}))(GameEdit);