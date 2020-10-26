import React from 'react';
import { Redirect, Link, useHistory } from 'react-router-dom';
import { TypeVariable } from 'typescript';
import Gameplay from './Gameplay';
import { Button, Theme, withStyles } from '@material-ui/core'
import Radio from '@material-ui/core/Radio';
import APIURL from '../helpers/environment';

export interface NewGameSetupProps {
    token: string,
    postTriviaTopic: string,
    postDifficulty: string,
    setPostTriviaTopic: any,
    setPostDifficulty: any,
    setRedirect: any,
    classes: {
        root: any;
        addPoint: any;
        subtractPoint: any;

    };
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
    selectedValue: any,

}

class NewGameSetup extends React.Component<NewGameSetupProps, NewGameSetupState> {
    classes: any
    
    constructor(props: NewGameSetupProps) {
        super(props);
        this.state = { showGameplay: false, player1: null, player2: null, player3: null, player4: null, player5: null, player6: null, player7: null, player8: null, player9: null, score1: 0, score2: 0, score3: 0, score4: 0, score5: 0, score6: 0, score7: 0, score8: 0, score9: 0, numberOfPlayers: 1, currentGame: 0, gameNotes: null, currentWinner: null, selectedValue: "0" };
        this.classes = this.props.classes;

    }
   
    token = this.props.token;

    // addPoint = (score: any) => {
    //     this.setState({})
    // }

    //function that either pops up with option to select & enter # of players OR shows players & points functionality
    componentDidMount = () => {
        this.displayWinner();
    }
    gameplayCreator = () => {
        if (this.state.showGameplay) {

            return (
                <div>

                    <hr />
                    <h1 className="gameplayHeading">GAMEPLAY</h1>
                    <Gameplay setPostDifficulty={this.props.setPostDifficulty} setPostTriviaTopic={this.props.setPostTriviaTopic} />

                    {this.playerCreator()}

                    <label className="gameNotes">GAME NOTES:</label>
                    <br />
                    <textarea placeholder="Player 1 cheated! Player 2 slayed!!" onChange={(e) => this.setState({ gameNotes: e.target.value })} />
                    <br />
                    <Button variant="contained" color="primary" className={this.classes.record} onClick={this.handlePutSubmit}>END GAME</Button>

                </div>
            )
        } else {
            return (
                <div className="players">
                    <hr />
                    <h5 className="createFormHeading">Create a New Game</h5>
                    <p className="selectDirection">How many players?</p>
                    <form className="numberPlayers">

                        <label className="radioLabel">1<Radio checked={this.state.selectedValue === '1'} className={this.classes.radio} value="1" onChange={(e) => this.setState({ numberOfPlayers: 1, selectedValue: "1" })}  name="playercount" inputProps={{ 'aria-label': '1'}} /></label>

                        <label className="radioLabel">2<Radio checked={this.state.selectedValue === '2'} className={this.classes.radio} value="2" onChange={(e) => this.setState({ numberOfPlayers: 2, selectedValue: "2" })}  name="playercount" inputProps={{ 'aria-label': '2'}} /></label>

                        <label className="radioLabel">3<Radio checked={this.state.selectedValue === '3'} className={this.classes.radio} value="3" onChange={(e) => this.setState({ numberOfPlayers: 3, selectedValue: "3" })}  name="playercount" inputProps={{ 'aria-label': '3'}} /></label>
                        
                        <label className="radioLabel">4<Radio checked={this.state.selectedValue === '4'} className={this.classes.radio} value="4" onChange={(e) => this.setState({ numberOfPlayers: 4, selectedValue: "4" })}  name="playercount" inputProps={{ 'aria-label': '4'}} /></label>
                        
                        <label className="radioLabel">5<Radio checked={this.state.selectedValue === '5'} className={this.classes.radio} value="5" onChange={(e) => this.setState({ numberOfPlayers: 5, selectedValue: "5" })}  name="playercount" inputProps={{ 'aria-label': '5'}} /></label>

                        <label className="radioLabel">6<Radio checked={this.state.selectedValue === '6'} className={this.classes.radio} value="6" onChange={(e) => this.setState({ numberOfPlayers: 6, selectedValue: "6" })}  name="playercount" inputProps={{ 'aria-label': '6'}} /></label>

                        <label className="radioLabel">7<Radio checked={this.state.selectedValue === '7'} className={this.classes.radio} value="7" onChange={(e) => this.setState({ numberOfPlayers: 7, selectedValue: "7" })}  name="playercount" inputProps={{ 'aria-label': '7'}} /></label>

                        <label className="radioLabel">8<Radio checked={this.state.selectedValue === '8'} className={this.classes.radio} value="8" onChange={(e) => this.setState({ numberOfPlayers: 8, selectedValue: "8" })}  name="playercount" inputProps={{ 'aria-label': '8'}} /></label>

                        <label className="radioLabel">9<Radio checked={this.state.selectedValue === '9'} className={this.classes.radio} value="9" onChange={(e) => this.setState({ numberOfPlayers: 9, selectedValue: "9" })}  name="playercount" inputProps={{ 'aria-label': '9'}} /></label>

                        {/* <input type="radio" name="playercount" onChange={(e) => this.setState({ numberOfPlayers: 1 })} className="numberRadio" />
                        <br />
                        <label className="radioLabel">2</label>
                        <input type="radio" name="playercount" onChange={(e) => this.setState({ numberOfPlayers: 2 })} className="numberRadio" />
                        <br />
                        <label className="radioLabel">3</label>
                        <input type="radio" name="playercount" onChange={(e) => this.setState({ numberOfPlayers: 3 })} className="numberRadio" />
                        <br />
                        <label className="radioLabel">4</label>
                        <input type="radio" name="playercount" onChange={(e) => this.setState({ numberOfPlayers: 4 })} className="numberRadio" />
                        <br />
                        <label className="radioLabel">5</label>
                        <input type="radio" name="playercount" onChange={(e) => this.setState({ numberOfPlayers: 5 })} className="numberRadio" />
                        <br />
                        <label className="radioLabel">6</label>
                        <input type="radio" name="playercount" onChange={(e) => this.setState({ numberOfPlayers: 6 })} className="numberRadio" />
                        <br />
                        <label className="radioLabel">7</label>
                        <input type="radio" name="playercount" onChange={(e) => this.setState({ numberOfPlayers: 7 })} className="numberRadio" />
                        <br />
                        <label className="radioLabel">8</label>
                        <input type="radio" name="playercount" onChange={(e) => this.setState({ numberOfPlayers: 8 })} className="numberRadio" />
                        <br />
                        <label className="radioLabel"> 9</label>
                        <input type="radio" name="playercount" onChange={(e) => this.setState({ numberOfPlayers: 9 })} className="numberRadio" /> */}

                    </form>
                    {this.formCreator()}
                </div>
            )
        }
    }

    //shows correct # of player... their names & buttons to add or subtract points from them
    playerCreator = () => {
        switch (this.state.numberOfPlayers) {
            case 1:
                return (
                    <div>
                        <ul className="namePointsUL">
                            <li className="namePoints"><h2>{`${this.state.player1}:`}</h2>

                                <Button variant="contained" onClick={() => this.setState({ score1: this.state.score1 - 1 })} className={this.classes.addPoint}>-1</Button>
                                <h2>{`${this.state.score1}`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score1: this.state.score1 + 1 })} className={this.classes.subtractPoint}>+1</Button></li>
                        </ul>
                    </div>
                )
                break;
            case 2:
                return (
                    <div>
                        <ul className="namePointsUL">
                            <li className="namePoints"><h2>{`${this.state.player1}:`}</h2>

                                <br />
                                <Button variant="contained" onClick={() => this.setState({ score1: this.state.score1 - 1 })} className={this.classes.addPoint}>-1</Button>
                                <h2>{`${this.state.score1}`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score1: this.state.score1 + 1 })} className={this.classes.subtractPoint}>+1</Button></li>

                            <li className="namePoints"><h2>{`${this.state.player2}:`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score2: this.state.score2 - 1 })} className={this.classes.addPoint}>-1</Button>
                                <h2>{`${this.state.score2}`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score2: this.state.score2 + 1 })} className={this.classes.subtractPoint}>+1</Button></li>
                        </ul>
                    </div>
                )
                break;
            case 3:
                return (
                    <div>
                        <ul className="namePointsUL">
                            <li className="namePoints"><h2>{`${this.state.player1}:`}</h2>
                                <br />
                                <Button variant="contained" onClick={() => this.setState({ score1: this.state.score1 - 1 })} className={this.classes.addPoint}>-1</Button>
                                <h2>{`${this.state.score1}`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score1: this.state.score1 + 1 })} className={this.classes.subtractPoint}>+1</Button></li>

                            <li className="namePoints"><h2>{`${this.state.player2}:`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score2: this.state.score2 - 1 })} className={this.classes.addPoint}>-1</Button>
                                <h2>{`${this.state.score2}`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score2: this.state.score2 + 1 })} className={this.classes.subtractPoint}>+1</Button></li>

                            <li className="namePoints"><h2>{`${this.state.player3}:`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score3: this.state.score3 - 1 })} className={this.classes.addPoint}>-1</Button>
                                <h2>{`${this.state.score3}`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score3: this.state.score3 + 1 })} className={this.classes.subtractPoint}>+1</Button></li>
                        </ul>
                    </div>
                )
                break;
            case 4:
                return (
                    <div>
                        <ul className="namePointsUL">
                            <li className="namePoints"><h2>{`${this.state.player1}:`}</h2>
                                <br />
                                <Button variant="contained" onClick={() => this.setState({ score1: this.state.score1 - 1 })} className={this.classes.addPoint}>-1</Button>
                                <h2>{`${this.state.score1}`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score1: this.state.score1 + 1 })} className={this.classes.subtractPoint}>+1</Button></li>

                            <li className="namePoints"><h2>{`${this.state.player2}:`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score2: this.state.score2 - 1 })} className={this.classes.addPoint}>-1</Button>
                                <h2>{`${this.state.score2}`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score2: this.state.score2 + 1 })} className={this.classes.subtractPoint}>+1</Button></li>

                            <li className="namePoints"><h2>{`${this.state.player3}:`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score3: this.state.score3 - 1 })} className={this.classes.addPoint}>-1</Button>
                                <h2>{`${this.state.score3}`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score3: this.state.score3 + 1 })} className={this.classes.subtractPoint}>+1</Button></li>

                            <li className="namePoints"><h2>{`${this.state.player4}:`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score4: this.state.score4 - 1 })} className={this.classes.addPoint}>-1</Button>
                                <h2>{`${this.state.score4}`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score4: this.state.score4 + 1 })} className={this.classes.subtractPoint}>+1</Button></li>
                        </ul>
                    </div>
                )
                break;
            case 5:
                return (
                    <div>
                        <ul className="namePointsUL">
                            <li className="namePoints"><h2>{`${this.state.player1}:`}</h2>
                                <br />
                                <Button variant="contained" onClick={() => this.setState({ score1: this.state.score1 - 1 })} className={this.classes.addPoint}>-1</Button>
                                <h2>{`${this.state.score1}`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score1: this.state.score1 + 1 })} className={this.classes.subtractPoint}>+1</Button></li>

                            <li className="namePoints"><h2>{`${this.state.player2}:`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score2: this.state.score2 - 1 })} className={this.classes.addPoint}>-1</Button>
                                <h2>{`${this.state.score2}`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score2: this.state.score2 + 1 })} className={this.classes.subtractPoint}>+1</Button></li>

                            <li className="namePoints"><h2>{`${this.state.player3}:`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score3: this.state.score3 - 1 })} className={this.classes.addPoint}>-1</Button>
                                <h2>{`${this.state.score3}`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score3: this.state.score3 + 1 })} className={this.classes.subtractPoint}>+1</Button></li>

                            <li className="namePoints"><h2>{`${this.state.player4}:`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score4: this.state.score4 - 1 })} className={this.classes.addPoint}>-1</Button>
                                <h2>{`${this.state.score4}`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score4: this.state.score4 + 1 })} className={this.classes.subtractPoint}>+1</Button></li>

                            <li className="namePoints"><h2>{`${this.state.player5}:`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score5: this.state.score5 - 1 })} className={this.classes.addPoint}>-1</Button>
                                <h2>{`${this.state.score5}`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score5: this.state.score5 + 1 })} className={this.classes.subtractPoint}>+1</Button></li>
                        </ul>
                    </div>
                )
                break;
            case 6:
                return (
                    <div>
                        <ul className="namePointsUL">
                            <li className="namePoints"><h2>{`${this.state.player1}:`}</h2>
                                <br />
                                <Button variant="contained" onClick={() => this.setState({ score1: this.state.score1 - 1 })} className={this.classes.addPoint}>-1</Button>
                                <h2>{`${this.state.score1}`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score1: this.state.score1 + 1 })} className={this.classes.subtractPoint}>+1</Button></li>

                            <li className="namePoints"><h2>{`${this.state.player2}:`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score2: this.state.score2 - 1 })} className={this.classes.addPoint}>-1</Button>
                                <h2>{`${this.state.score2}`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score2: this.state.score2 + 1 })} className={this.classes.subtractPoint}>+1</Button></li>

                            <li className="namePoints"><h2>{`${this.state.player3}:`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score3: this.state.score3 - 1 })} className={this.classes.addPoint}>-1</Button>
                                <h2>{`${this.state.score3}`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score3: this.state.score3 + 1 })} className={this.classes.subtractPoint}>+1</Button></li>

                            <li className="namePoints"><h2>{`${this.state.player4}:`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score4: this.state.score4 - 1 })} className={this.classes.addPoint}>-1</Button>
                                <h2>{`${this.state.score4}`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score4: this.state.score4 + 1 })} className={this.classes.subtractPoint}>+1</Button></li>

                            <li className="namePoints"><h2>{`${this.state.player5}:`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score5: this.state.score5 - 1 })} className={this.classes.addPoint}>-1</Button>
                                <h2>{`${this.state.score5}`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score5: this.state.score5 + 1 })} className={this.classes.subtractPoint}>+1</Button></li>

                            <li className="namePoints"><h2>{`${this.state.player6}:`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score6: this.state.score6 - 1 })} className={this.classes.addPoint}>-1</Button>
                                <h2>{`${this.state.score6}`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score6: this.state.score6 + 1 })} className={this.classes.subtractPoint}>+1</Button></li>
                        </ul>
                    </div>
                )
                break;
            case 7:
                return (
                    <div>
                        <ul className="namePointsUL">
                            <li className="namePoints"><h2>{`${this.state.player1}:`}</h2>
                                <br />
                                <Button variant="contained" onClick={() => this.setState({ score1: this.state.score1 - 1 })} className={this.classes.addPoint}>-1</Button>
                                <h2>{`${this.state.score1}`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score1: this.state.score1 + 1 })} className={this.classes.subtractPoint}>+1</Button></li>

                            <li className="namePoints"><h2>{`${this.state.player2}:`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score2: this.state.score2 - 1 })} className={this.classes.addPoint}>-1</Button>
                                <h2>{`${this.state.score2}`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score2: this.state.score2 + 1 })} className={this.classes.subtractPoint}>+1</Button></li>

                            <li className="namePoints"><h2>{`${this.state.player3}:`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score3: this.state.score3 - 1 })} className={this.classes.addPoint}>-1</Button>
                                <h2>{`${this.state.score3}`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score3: this.state.score3 + 1 })} className={this.classes.subtractPoint}>+1</Button></li>

                            <li className="namePoints"><h2>{`${this.state.player4}:`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score4: this.state.score4 - 1 })} className={this.classes.addPoint}>-1</Button>
                                <h2>{`${this.state.score4}`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score4: this.state.score4 + 1 })} className={this.classes.subtractPoint}>+1</Button></li>

                            <li className="namePoints"><h2>{`${this.state.player5}:`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score5: this.state.score5 - 1 })} className={this.classes.addPoint}>-1</Button>
                                <h2>{`${this.state.score5}`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score5: this.state.score5 + 1 })} className={this.classes.subtractPoint}>+1</Button></li>

                            <li className="namePoints"><h2>{`${this.state.player6}:`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score6: this.state.score6 - 1 })} className={this.classes.addPoint}>-1</Button>
                                <h2>{`${this.state.score6}`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score6: this.state.score6 + 1 })} className={this.classes.subtractPoint}>+1</Button></li>

                            <li className="namePoints"><h2>{`${this.state.player7}:`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score7: this.state.score7 - 1 })} className={this.classes.addPoint}>-1</Button>
                                <h2>{`${this.state.score7}`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score7: this.state.score7 + 1 })} className={this.classes.subtractPoint}>+1</Button></li>
                        </ul>
                    </div>
                )
                break;
            case 8:
                return (
                    <div>
                        <ul className="namePointsUL">
                            <li className="namePoints"><h2>{`${this.state.player1}:`}</h2>
                                <br />
                                <Button variant="contained" onClick={() => this.setState({ score1: this.state.score1 - 1 })} className={this.classes.addPoint}>-1</Button>
                                <h2>{`${this.state.score1}`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score1: this.state.score1 + 1 })} className={this.classes.subtractPoint}>+1</Button></li>

                            <li className="namePoints"><h2>{`${this.state.player2}:`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score2: this.state.score2 - 1 })} className={this.classes.addPoint}>-1</Button>
                                <h2>{`${this.state.score2}`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score2: this.state.score2 + 1 })} className={this.classes.subtractPoint}>+1</Button></li>

                            <li className="namePoints"><h2>{`${this.state.player3}:`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score3: this.state.score3 - 1 })} className={this.classes.addPoint}>-1</Button>
                                <h2>{`${this.state.score3}`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score3: this.state.score3 + 1 })} className={this.classes.subtractPoint}>+1</Button></li>

                            <li className="namePoints"><h2>{`${this.state.player4}:`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score4: this.state.score4 - 1 })} className={this.classes.addPoint}>-1</Button>
                                <h2>{`${this.state.score4}`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score4: this.state.score4 + 1 })} className={this.classes.subtractPoint}>+1</Button></li>

                            <li className="namePoints"><h2>{`${this.state.player5}:`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score5: this.state.score5 - 1 })} className={this.classes.addPoint}>-1</Button>
                                <h2>{`${this.state.score5}`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score5: this.state.score5 + 1 })} className={this.classes.subtractPoint}>+1</Button></li>

                            <li className="namePoints"><h2>{`${this.state.player6}:`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score6: this.state.score6 - 1 })} className={this.classes.addPoint}>-1</Button>
                                <h2>{`${this.state.score6}`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score6: this.state.score6 + 1 })} className={this.classes.subtractPoint}>+1</Button></li>

                            <li className="namePoints"><h2>{`${this.state.player7}:`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score7: this.state.score7 - 1 })} className={this.classes.addPoint}>-1</Button>
                                <h2>{`${this.state.score7}`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score7: this.state.score7 + 1 })} className={this.classes.subtractPoint}>+1</Button></li>

                            <li className="namePoints"><h2>{`${this.state.player8}:`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score8: this.state.score8 - 1 })} className={this.classes.addPoint}>-1</Button>
                                <h2>{`${this.state.score8}`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score8: this.state.score8 + 1 })} className={this.classes.subtractPoint}>+1</Button></li>
                        </ul>
                    </div>
                )
                break;
            case 9:
                return (
                    <div>
                        <ul className="namePointsUL">
                            <li className="namePoints"><h2>{`${this.state.player1}:`}</h2>
                                <br />
                                <Button variant="contained" onClick={() => this.setState({ score1: this.state.score1 - 1 })} className={this.classes.addPoint}>-1</Button>
                                <h2>{`${this.state.score1}`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score1: this.state.score1 + 1 })} className={this.classes.subtractPoint}>+1</Button></li>

                            <li className="namePoints"><h2>{`${this.state.player2}:`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score2: this.state.score2 - 1 })} className={this.classes.addPoint}>-1</Button>
                                <h2>{`${this.state.score2}`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score2: this.state.score2 + 1 })} className={this.classes.subtractPoint}>+1</Button></li>

                            <li className="namePoints"><h2>{`${this.state.player3}:`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score3: this.state.score3 - 1 })} className={this.classes.addPoint}>-1</Button>
                                <h2>{`${this.state.score3}`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score3: this.state.score3 + 1 })} className={this.classes.subtractPoint}>+1</Button></li>

                            <li className="namePoints"><h2>{`${this.state.player4}:`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score4: this.state.score4 - 1 })} className={this.classes.addPoint}>-1</Button>
                                <h2>{`${this.state.score4}`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score4: this.state.score4 + 1 })} className={this.classes.subtractPoint}>+1</Button></li>

                            <li className="namePoints"><h2>{`${this.state.player5}:`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score5: this.state.score5 - 1 })} className={this.classes.addPoint}>-1</Button>
                                <h2>{`${this.state.score5}`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score5: this.state.score5 + 1 })} className={this.classes.subtractPoint}>+1</Button></li>

                            <li className="namePoints"><h2>{`${this.state.player6}:`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score6: this.state.score6 - 1 })} className={this.classes.addPoint}>-1</Button>
                                <h2>{`${this.state.score6}`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score6: this.state.score6 + 1 })} className={this.classes.subtractPoint}>+1</Button></li>

                            <li className="namePoints"><h2>{`${this.state.player7}:`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score7: this.state.score7 - 1 })} className={this.classes.addPoint}>-1</Button>
                                <h2>{`${this.state.score7}`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score7: this.state.score7 + 1 })} className={this.classes.subtractPoint}>+1</Button></li>

                            <li className="namePoints"><h2>{`${this.state.player8}:`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score8: this.state.score8 - 1 })} className={this.classes.addPoint}>-1</Button>
                                <h2>{`${this.state.score8}`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score8: this.state.score8 + 1 })} className={this.classes.subtractPoint}>+1</Button></li>

                            <li className="namePoints"><h2>{`${this.state.player9}:`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score9: this.state.score8 - 1 })} className={this.classes.addPoint}>-1</Button>
                                <h2>{`${this.state.score9}`}</h2>
                                <Button variant="contained" onClick={() => this.setState({ score9: this.state.score9 + 1 })} className={this.classes.subtractPoint}>+1</Button></li>
                        </ul>
                    </div>
                )
                break;
        }
    }

    //Posts player names initially
    handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(`${APIURL}/player-scores/startgame`);
        fetch(`${APIURL}/player-scores/startgame`, {
        // fetch(`http://localhost:3000/player-scores/startgame`, {
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
                this.setState({ currentGame: logData.id });
            })
            .then(() => {
                this.setState({ showGameplay: true });

            })
            .catch(err => {
                console.log(err, "Fetch failed");
            })
    };

    //posts final score and then also posts user history (still working user-history post)
    handlePutSubmit = (e: any) => {
        e.preventDefault();
        console.log(`${APIURL}/player-scores/update/${this.state.currentGame}`);
        fetch(`${APIURL}/player-scores/update/${this.state.currentGame}`, {
        // fetch(`http://localhost:3000/player-scores/update/${this.state.currentGame}`, {

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
                this.setState({ showGameplay: false });
                console.log('gameplay set true');
            })
            .catch(err => {
                console.log(err, "Fetch failed");
            });
        //user-history post
        fetch(`${APIURL}/user-history/post`, {
            method: 'POST',
            body: JSON.stringify({
                userHistory: {

                    triviaTopic: this.props.postTriviaTopic,
                    difficulty: this.props.postDifficulty,
                    winner: this.takeOutNull(this.submitWinner()),
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
                this.props.setRedirect('/ViewScores')
            })
            .catch(err => {
                console.log(err, "Fetch not working");
            })
            
            
    };
takeOutNull = (value: any) => {
    if (value == null){
        return "Nobody";
    } else {
        return value;
    }
}

//creates input fields for users to enter name... switch statement so that it only shows correct # of users
formCreator = () => {
    console.log("form creator called")
    switch (this.state.numberOfPlayers) {
        case 1:
            return (
                <>
                    <p className="nameDirection">Enter player names:</p>
                    <form onSubmit={this.handleSubmit} className="playerNameForm">
                        <input placeholder="PLAYER 1" onChange={(e) => this.setState({ player1: e.target.value })} className={this.classes.root}></input>
                        <br />
                        <Button type="submit" className={this.classes.root} variant="contained" color="primary"> NEXT 🢂</Button>
                    </form>
                </>
            );
            break;
        case 2:
            return (
                <>
                <h5 className="nameDirection">Input player names:</h5>
                <form onSubmit={this.handleSubmit} className="playerNameForm">
                    <input placeholder="PLAYER 1" onChange={(e) => this.setState({ player1: e.target.value })} className={this.classes.root}></input>
                    <input placeholder="PLAYER 2" onChange={(e) => this.setState({ player2: e.target.value })} className={this.classes.root}></input>
                    <br />
                    <Button type="submit" className={this.classes.root} variant="contained" color="primary">NEXT 🢂</Button>
                </form>
                </>
            );
            break;
        case 3:
            return (
                <>
                <h5 className="nameDirection">Input player names:</h5>
                <form onSubmit={this.handleSubmit} className="playerNameForm">
                    <input placeholder="PLAYER 1" onChange={(e) => this.setState({ player1: e.target.value })} className={this.classes.root}></input>
                    <input placeholder="PLAYER 2" onChange={(e) => this.setState({ player2: e.target.value })} className={this.classes.root}></input>
                    <input placeholder="PLAYER 3" onChange={(e) => this.setState({ player3: e.target.value })} className={this.classes.root}></input>
                    <br />
                    <Button type="submit" className={this.classes.root} variant="contained" color="primary">NEXT 🢂</Button>
                </form>
                </>
            );
            break;
        case 4:
            return (
                <>
                <h5 className="nameDirection">Input player names:</h5>
                <form onSubmit={this.handleSubmit} className="playerNameForm">
                    <input placeholder="PLAYER 1" onChange={(e) => this.setState({ player1: e.target.value })} className={this.classes.root}></input>
                    <input placeholder="PLAYER 2" onChange={(e) => this.setState({ player2: e.target.value })} className={this.classes.root}></input>
                    <input placeholder="PLAYER 3" onChange={(e) => this.setState({ player3: e.target.value })} className={this.classes.root}></input>
                    <input placeholder="PLAYER 4" onChange={(e) => this.setState({ player4: e.target.value })} className={this.classes.root}></input>
                    <br />
                    <Button type="submit" className={this.classes.root} variant="contained" color="primary">NEXT 🢂</Button>
                </form>
                </>
            );
            break;
        case 5:
            return (
                <>
                <h5 className="nameDirection">Input player names:</h5>
                <form onSubmit={this.handleSubmit} className="playerNameForm">
                    <input placeholder="PLAYER 1" onChange={(e) => this.setState({ player1: e.target.value })} className={this.classes.root}></input>
                    <input placeholder="PLAYER 2" onChange={(e) => this.setState({ player2: e.target.value })} className={this.classes.root}></input>
                    <input placeholder="PLAYER 3" onChange={(e) => this.setState({ player3: e.target.value })} className={this.classes.root}></input>
                    <input placeholder="PLAYER 4" onChange={(e) => this.setState({ player4: e.target.value })} className={this.classes.root}></input>
                    <input placeholder="PLAYER 5" onChange={(e) => this.setState({ player5: e.target.value })} className={this.classes.root}></input>
                    <br />
                    <Button type="submit" className={this.classes.root} variant="contained" color="primary">NEXT 🢂</Button>
                </form>
                </>
            );
            break;
        case 6:
            return (
                <>
                <h5 className="nameDirection">Input player names:</h5>
                <form onSubmit={this.handleSubmit} className="playerNameForm">
                    <input placeholder="PLAYER 1" onChange={(e) => this.setState({ player1: e.target.value })} className={this.classes.root}></input>
                    <input placeholder="PLAYER 2" onChange={(e) => this.setState({ player2: e.target.value })} className={this.classes.root}></input>
                    <input placeholder="PLAYER 3" onChange={(e) => this.setState({ player3: e.target.value })} className={this.classes.root}></input>
                    <input placeholder="PLAYER 4" onChange={(e) => this.setState({ player4: e.target.value })} className={this.classes.root}></input>
                    <input placeholder="PLAYER 5" onChange={(e) => this.setState({ player5: e.target.value })} className={this.classes.root}></input>
                    <input placeholder="PLAYER 6" onChange={(e) => this.setState({ player6: e.target.value })} className={this.classes.root}></input>
                    <br />
                    <Button type="submit" className={this.classes.root} variant="contained" color="primary">NEXT 🢂</Button>
                </form>
                </>
            );
            break;
        case 7:
            return (
                <>
                <h5 className="nameDirection">Input player names:</h5>
                <form onSubmit={this.handleSubmit} className="playerNameForm">
                    <input placeholder="PLAYER 1" onChange={(e) => this.setState({ player1: e.target.value })} className={this.classes.root}></input>
                    <input placeholder="PLAYER 2" onChange={(e) => this.setState({ player2: e.target.value })} className={this.classes.root}></input>
                    <input placeholder="PLAYER 3" onChange={(e) => this.setState({ player3: e.target.value })} className={this.classes.root}></input>
                    <input placeholder="PLAYER 4" onChange={(e) => this.setState({ player4: e.target.value })} className={this.classes.root}></input>
                    <input placeholder="PLAYER 5" onChange={(e) => this.setState({ player5: e.target.value })} className={this.classes.root}></input>
                    <input placeholder="PLAYER 6" onChange={(e) => this.setState({ player6: e.target.value })} className={this.classes.root}></input>
                    <input placeholder="PLAYER 7" onChange={(e) => this.setState({ player7: e.target.value })} className={this.classes.root}></input>
                    <br />
                    <Button type="submit" className={this.classes.root} variant="contained" color="primary">NEXT 🢂</Button>
                </form>
                </>
            );
            break;
        case 8:
            return (
                <>
                <h5 className="nameDirection">Input player names:</h5>
                <form onSubmit={this.handleSubmit} className="playerNameForm">
                    <input placeholder="PLAYER 1" onChange={(e) => this.setState({ player1: e.target.value })} className={this.classes.root}></input>
                    <input placeholder="PLAYER 2" onChange={(e) => this.setState({ player2: e.target.value })} className={this.classes.root}></input>
                    <input placeholder="PLAYER 3" onChange={(e) => this.setState({ player3: e.target.value })} className={this.classes.root}></input>
                    <input placeholder="PLAYER 4" onChange={(e) => this.setState({ player4: e.target.value })} className={this.classes.root}></input>
                    <input placeholder="PLAYER 5" onChange={(e) => this.setState({ player5: e.target.value })} className={this.classes.root}></input>
                    <input placeholder="PLAYER 6" onChange={(e) => this.setState({ player6: e.target.value })} className={this.classes.root}></input>
                    <input placeholder="PLAYER 7" onChange={(e) => this.setState({ player7: e.target.value })} className={this.classes.root}></input>
                    <input placeholder="PLAYER 8" onChange={(e) => this.setState({ player8: e.target.value })} className={this.classes.root}></input>
                    <br />
                    <Button type="submit" className={this.classes.root} variant="contained" color="primary">NEXT 🢂</Button>
                </form>
                </>
            );
            break;
        case 9:
            return (
                <>
                <h5 className="nameDirection">Input player names:</h5>
                <form onSubmit={this.handleSubmit} className="playerNameForm">
                    <input placeholder="PLAYER 1" onChange={(e) => this.setState({ player1: e.target.value })} className={this.classes.root}></input>
                    <input placeholder="PLAYER 2" onChange={(e) => this.setState({ player2: e.target.value })} className={this.classes.root}></input>
                    <input placeholder="PLAYER 3" onChange={(e) => this.setState({ player3: e.target.value })} className={this.classes.root}></input>
                    <input placeholder="PLAYER 4" onChange={(e) => this.setState({ player4: e.target.value })} className={this.classes.root}></input>
                    <input placeholder="PLAYER 5" onChange={(e) => this.setState({ player5: e.target.value })} className={this.classes.root}></input>
                    <input placeholder="PLAYER 6" onChange={(e) => this.setState({ player6: e.target.value })} className={this.classes.root}></input>
                    <input placeholder="PLAYER 7" onChange={(e) => this.setState({ player7: e.target.value })} className={this.classes.root}></input>
                    <input placeholder="PLAYER 8" onChange={(e) => this.setState({ player8: e.target.value })} className={this.classes.root}></input>
                    <input placeholder="PLAYER 9" onChange={(e) => this.setState({ player9: e.target.value })} className={this.classes.root}></input>
                    <br />
                    <Button type="submit" className={this.classes.root} variant="contained" color="primary">NEXT 🢂</Button>
                </form>
                </>
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
    if (winnerKey == "p1" && this.state.player1 !== "" && this.state.score1 !== 0) {
        return (this.state.player1)
    } else if (winnerKey == "p2" && this.state.player2 !== "" && this.state.score2 !== 0) {
        return (this.state.player2)
    } else if (winnerKey == "p3" && this.state.player3 !== "" && this.state.score3 !== 0) {
        return (this.state.player3)
    } else if (winnerKey == "p4" && this.state.player4 !== "" && this.state.score4 !== 0) {
        return (this.state.player4)
    } else if (winnerKey == "p5" && this.state.player5 !== "" && this.state.score5 !== 0) {
        return (this.state.player5)
    } else if (winnerKey == "p6" && this.state.player6 !== "" && this.state.score6 !== 0) {
        return (this.state.player6)
    } else if (winnerKey == "p7" && this.state.player7 !== "" && this.state.score7 !== 0) {
        return (this.state.player7)
    } else if (winnerKey == "p8" && this.state.player8 !== "" && this.state.score8 !== 0) {
        return (this.state.player8)
    } else if (winnerKey == "p9" && this.state.player9 !== "" && this.state.score9 !== 0) {
        return (this.state.player9)
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
    if (winnerKey == "p1" && this.state.player1 !== "" && this.state.score1 !== 0) {
        return (
            <div><h5 className="winner">{`${this.state.player1} is in first place with ${this.state.score1} points!`}</h5></div>
        )
    } else if (winnerKey == "p2" && this.state.player2 !== "" && this.state.score2 !== 0) {
        return (
            <div><h5 className="winner">{`${this.state.player2} is in first place with ${this.state.score2} points!`}</h5></div>
        )
    } else if (winnerKey == "p3" && this.state.player3 !== "" && this.state.score3 !== 0) {
        return (
            <div><h5 className="winner">{`${this.state.player3} is in first place with ${this.state.score3} points!`}</h5></div>
        )
    } else if (winnerKey == "p4" && this.state.player4 !== "" && this.state.score4 !== 0) {
        return (
            <div><h5 className="winner">{`${this.state.player4} is in first place with ${this.state.score4} points!`}</h5></div>
        )
    } else if (winnerKey == "p5" && this.state.player5 !== "" && this.state.score5 !== 0) {
        return (
            <div><h5 className="winner">{`${this.state.player5} is in first place with ${this.state.score5} points!`}</h5></div>
        )
    } else if (winnerKey == "p6" && this.state.player6 !== "" && this.state.score6 !== 0) {
        return (
            <div><h5 className="winner">{`${this.state.player6} is in first place with ${this.state.score6} points!`}</h5></div>
        )
    } else if (winnerKey == "p7" && this.state.player7 !== "" && this.state.score7 !== 0) {
        return (
            <div><h5 className="winner">{`${this.state.player7} is in first place with ${this.state.score7} points!`}</h5></div>
        )
    } else if (winnerKey == "p8" && this.state.player8 !== "" && this.state.score8 !== 0) {
        return (
            <div><h5 className="winner">{`${this.state.player8} is in first place with ${this.state.score8} points!`}</h5></div>
        )
    } else if (winnerKey == "p9" && this.state.player9 !== "" && this.state.score9 !== 0) {
        return (
            <div><h5 className="winner">{`${this.state.player9} is in first place with ${this.state.score9} points!`}</h5></div>
        )
    }


}

//function that computes the highest score out of the "scoreboard" variable
findWinner = (obj: any) => {
    var keys = Object.keys(obj);
    var max = keys[0];
    for (var i = 1, n = keys.length; i < n; ++i) {
        var k = keys[i];
        if (obj[k] > obj[max]) {
            max = k
        }
    }

    return max;
}

render() {

    return (<div>
        {this.displayWinner()}
        {this.gameplayCreator()}

    </div>);
}
}

//export default NewGameSetup;

export default withStyles((theme) => ({
    root: {
        fontFamily: "Roboto",
        fontWeight: 'bold',
        fontSize: '2.5vw',
        border: '3px solid white',
    },

    addPoint: {
        fontWeight: 'bold',
        margin: '.5vw',
        background: '#3f51b5',
        '&:hover': {
            backgroundColor: '#757de8',
        },
        height: '2.5vw',
        width: '.5vw',
        borderTop: '3px solid #3f51b5',
        borderBottom: '3px solid #3f51b5',
    },

    subtractPoint: {
        fontWeight: 'bold',
        margin: '.5vw',
        background: '#f44336',
        '&:hover': {
            backgroundColor: '#ff7961',
        },
        height: '2.5vw',
        width: '.5vw',
        borderTop: '3px solid #f44336',
        borderBottom: '3px solid #f44336',
    },

    record: {
        fontWeight: 'bolder',
        marginTop: '2vw',
        border: '3px solid white',
    },

    radio: {
        color: 'white',
    }


}))(NewGameSetup);