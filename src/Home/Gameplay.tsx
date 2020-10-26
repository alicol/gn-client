import { stringify } from 'querystring';
// import { S_IFSOCK } from 'constants';
// import { readFileSync } from 'fs';
import React, {useEffect, useState} from 'react';
import {Button, withStyles, Radio } from '@material-ui/core'


export interface GameplayProps {
    // postDifficulty: string,
    // postTriviaTopic: string,
    setPostTriviaTopic: any,
    setPostDifficulty: any,
    classes: any,
}
 
export interface GameplayState {
    questionResults: any,
    currentQuestionNumber: number,
    numberOfQuestions: number,
    questionEditor: string,
    category: number,
    difficulty: string, 
    winner: any,
    selectedValue: any,


}
 
class Gameplay extends React.Component<GameplayProps, GameplayState> {
    classes : any
    constructor(props: GameplayProps) {
        super(props);
        this.state = { questionResults: [], currentQuestionNumber: 0, numberOfQuestions: 50, questionEditor: "On", category: 11, difficulty: "medium", winner: null, selectedValue: "0" };
        this.classes = this.props.classes;
        

    }
    componentDidMount(){
        this.fetchQuestions();
        // this.thisOneQuestion();
    }


     nextButton = () => {
        if (this.state.questionResults.length !== 0 && this.state.questionResults.length >= this.state.currentQuestionNumber + 2){
            return (<div>
                <Button className={this.classes.nextQuestion} variant="contained" color="secondary" onClick={() => this.setState({currentQuestionNumber: this.state.currentQuestionNumber + 1})}>🢂 Next Question 🢂</Button>
            </div>)
        } else if(this.state.questionResults.length !== 0 ) {
            return(<div> 
            <Button className={this.classes.lastQuestion} disabled >LAST QUESTION! </Button>
            </div>)
        } else {
            return (<div><p>Questions loading...</p></div>
                
            )
        }
    }
    backButton = () => {
        if (this.state.questionResults.length !== 0 && this.state.currentQuestionNumber > 0){
            return (<div>
                <Button className={this.classes.previousQuestion} color="secondary" variant="contained" onClick={() => this.setState({currentQuestionNumber: this.state.currentQuestionNumber - 1})}>🢀 Previous Question 🢀</Button>
            </div>)
        }
    }
    neutralize = (str: string) => {
        let updated = str.replace(/&quot;/g, `"`).replace(/&#039;/g, `'`).replace(/&ldquo;/g, `"`).replace(/&rdquo;/g, `"`).replace(/&hellip;/g, `...`).replace(/&amp;/g, `&`);
        console.log(updated);
        return (updated);
        
    }

    fetchQuestions = () => {
        fetch(`https://opentdb.com/api.php?amount=${this.state.numberOfQuestions}&category=${this.state.category}&difficulty=${this.state.difficulty}&type=multiple`, {
            method: "GET",
        })
        .then((res) => res.json())
        .then((json) => {
            console.log(json);
            this.setState({questionResults: json.results})
        })
        .catch(err => {
            console.log(err, "Fetch not working");
        })
    }

    answerQuestionFunction = () => {
                //ADD WHATEVER VISUAL AFFECT THE CORRECT ANSWER PROVIDES!
                alert(`The correct answer is: ${this.neutralize(this.state.questionResults[this.state.currentQuestionNumber].correct_answer)}`);
            }



   thisOneQuestion = () => {
    //    if(prevState.currentQuestionNumber !== this.state.currentQuestionNumber){
        if (this.state.questionResults.length !== 0 && this.state.questionResults.length >= this.state.currentQuestionNumber){
        const randomizedAnswerOrder = () => {
            let randomNumber = Math.floor(Math.random() * 4) + 1;
            if (randomNumber == 1){
                return (<div>     
                <p className="options"><b>A</b>{`: ${this.neutralize(this.state.questionResults[this.state.currentQuestionNumber].correct_answer)}`}</p>               
                <p className="options"><b>B</b>{`: ${this.neutralize(this.state.questionResults[this.state.currentQuestionNumber].incorrect_answers[0])}`}</p>
                <p className="options"><b>C</b>{`: ${this.neutralize(this.state.questionResults[this.state.currentQuestionNumber].incorrect_answers[1])}`}</p>
                <p className="options"><b>D</b>{`: ${this.neutralize(this.state.questionResults[this.state.currentQuestionNumber].incorrect_answers[2])}`}</p>
                </div>)
            } else if (randomNumber == 2){
                return (<div>     
                    <p className="options"><b>A</b>{`: ${this.neutralize(this.state.questionResults[this.state.currentQuestionNumber].incorrect_answers[0])}`}</p>
                    <p className="options"><b>B</b>{`: ${this.neutralize(this.state.questionResults[this.state.currentQuestionNumber].correct_answer)}`}</p>  
                    <p className="options"><b>C</b>{`: ${this.neutralize(this.state.questionResults[this.state.currentQuestionNumber].incorrect_answers[1])}`}</p>
                    <p className="options"><b>D</b>{`: ${this.neutralize(this.state.questionResults[this.state.currentQuestionNumber].incorrect_answers[2])}`}</p>
                    </div>)
            } else if (randomNumber == 3){
                return (
                    <div>
                    <p className="options"><b>A</b>{`: ${this.neutralize(this.state.questionResults[this.state.currentQuestionNumber].incorrect_answers[0])}`}</p>
                    <p className="options"><b>B</b>{`: ${this.neutralize(this.state.questionResults[this.state.currentQuestionNumber].incorrect_answers[1])}`}</p>
                    <p className="options"><b>C</b>{`: ${this.neutralize(this.state.questionResults[this.state.currentQuestionNumber].correct_answer)}`}</p>
                    <p className="options"><b>D</b>{`: ${this.neutralize(this.state.questionResults[this.state.currentQuestionNumber].incorrect_answers[2])}`}</p>
                    </div>
                )
            } else if (randomNumber == 4){
                return (<div>     
                    <p className="options"><b>A</b>{`: ${this.neutralize(this.state.questionResults[this.state.currentQuestionNumber].incorrect_answers[0])}`}</p> 
                    <p className="options"><b>B</b>{`: ${this.neutralize(this.state.questionResults[this.state.currentQuestionNumber].incorrect_answers[1])}`}</p>
                    <p className="options"><b>C</b>{`: ${this.neutralize(this.state.questionResults[this.state.currentQuestionNumber].incorrect_answers[2])}`}</p>
                    <p className="options"><b>D</b>{`: ${this.neutralize(this.state.questionResults[this.state.currentQuestionNumber].correct_answer)}`}</p> 
                    </div>)
            }
         
        }   

        return(
                <div>
                    <div>
                    <Button className={this.classes.changeQuestions} variant="contained" color="primary" onClick={() => this.setState({questionEditor: "On"})} >🢁 Change Questions 🢁</Button>
                    </div>
                    <br />
                    <h5 className="questionNumberHeading">{`QUESTION #${this.state.currentQuestionNumber + 1}`}</h5>
                    <br />
                    <h5 className="questionNumberHeading">{`${this.neutralize(this.state.questionResults[this.state.currentQuestionNumber].question)}`}</h5>
                    <br />
                    {randomizedAnswerOrder()}
                    {/* <p>Choose from the following:</p> */}
                    {/* <p className="options"><b>A: </b>{` ${this.state.questionResults[this.state.currentQuestionNumber].incorrect_answers[0]}`}</p>
                    <p className="options"><b>B: </b>{` ${this.state.questionResults[this.state.currentQuestionNumber].incorrect_answers[1]}`}</p>
                    <p className="options"><b>C: </b>{` ${this.state.questionResults[this.state.currentQuestionNumber].correct_answer}`}</p>
                    <p className="options"><b>D: </b>{` ${this.state.questionResults[this.state.currentQuestionNumber].incorrect_answers[2]}`}</p>                     */}
                    <Button variant="contained" color="secondary" onClick={() => this.answerQuestionFunction()} className={this.classes.showAnswer}>Show Answer</Button>
                    <br />  
                </div>
            )
        } else {
            return (<div className="lastQuestion">Invalid Question Criteria</div>)
        }
    }

    triviaSelector = () => {

        if (this.state.questionEditor == "On"){
        return( <div>

        {/* <h5 className="editQuestionsHeading">CHOOSE QUESTIONS</h5> */}
        <form className="gameOptionForm">
            <p className="choose">HOW MANY QUESTIONS?</p>
        
        <label className="gameOption">10<Radio checked={this.state.selectedValue === '10'} onChange={(e) => this.setState({numberOfQuestions: 10, selectedValue: '10'})} className={this.classes.radio} value="10" name="numberqs" inputProps={{ 'aria-label': '10'}} /></label>

        <label className="gameOption">25<Radio checked={this.state.selectedValue === '25'} onChange={(e) => this.setState({numberOfQuestions: 25, selectedValue: '25'})} className={this.classes.radio} value="25" name="numberqs" inputProps={{ 'aria-label': '25'}} /></label>

        <label className="gameOption">50<Radio checked={this.state.selectedValue === '50'} onChange={(e) => this.setState({numberOfQuestions: 50, selectedValue: '50'})} className={this.classes.radio} value="50" name="numberqs" inputProps={{ 'aria-label': '50'}} /></label>

        {/* <label className="gameOption">10</label><input type="radio" name="numberqs" onChange={(e) => this.setState({numberOfQuestions: 10})} />
    
        <label className="gameOption">25</label><input type="radio" name="numberqs" onChange={(e) => this.setState({numberOfQuestions: 25})} />
    
        <label className="gameOption">50</label><input type="radio" name="numberqs" onChange={(e) => this.setState({numberOfQuestions: 50})} /> */}
        < br />
        <p className="choose">HOW DIFFICULT?</p>

        <label className="gameOption">Easy<Radio checked={this.state.selectedValue === 'easy'} onChange={(e) => {this.setState({difficulty: "easy", selectedValue: 'easy'}); this.props.setPostDifficulty("Easy")}} className={this.classes.radio} name="diff" inputProps={{ 'aria-label': 'Easy'}} /></label>

        <label className="gameOption">Medium<Radio checked={this.state.selectedValue === 'medium'} onChange={(e) => {this.setState({difficulty: "medium", selectedValue: 'medium'}); this.props.setPostDifficulty("Medium")}} className={this.classes.radio} name="diff" inputProps={{ 'aria-label': 'Medium'}} /></label>

        <label className="gameOption">Hard<Radio checked={this.state.selectedValue === 'hard'}onChange={(e) => {this.setState({difficulty: "hard", selectedValue: 'hard'}); this.props.setPostDifficulty("Hard")}} className={this.classes.radio} name="diff" inputProps={{ 'aria-label': 'Hard'}} /></label>
{/* 
        <label className="gameOption">Easy</label><input type="radio" name="diff" onChange={(e) => {this.setState({difficulty: "easy"}); this.props.setPostDifficulty("Easy")}}/>
        
        <label className="gameOption">Medium</label><input type="radio" name="diff" onChange={(e) => {this.setState({difficulty: "medium"}); this.props.setPostDifficulty("Medium")}} />
        
        <label className="gameOption">Hard</label><input type="radio" name="diff" onChange={(e) => {this.setState({difficulty: "hard"}); this.props.setPostDifficulty("Hard")}} /> */}
        <br />
            <p className="choose">WHAT CATEGORY?</p>
        
            <label className="gameOption">Sports<Radio onChange={(e) => {this.setState({category: 21, selectedValue: "21"}); this.props.setPostTriviaTopic("Sports")}} className={this.classes.radio} name="cat" inputProps={{ 'aria-label': 'Sports'}} value="21" checked={this.state.selectedValue === '21'}/></label>

            <label className="gameOption">Television<Radio checked={this.state.selectedValue === '14'} className={this.classes.radio} name="cat" onChange={(e) => {this.setState({category: 14, selectedValue: '14'}); this.props.setPostTriviaTopic("Television")}} inputProps={{ 'aria-label': 'Television'}}/></label>

            <label className="gameOption">History<Radio checked={this.state.selectedValue === '23'} className={this.classes.radio} name="cat" onChange={(e) => {this.setState({category: 23, selectedValue: '23'}); this.props.setPostTriviaTopic("History")}} inputProps={{ 'aria-label': 'History'}}/></label>

            <label className="gameOption">Movies<Radio checked={this.state.selectedValue === '11'} className={this.classes.radio} name="cat" onChange={(e) => {this.setState({category: 11, selectedValue: '11'}); this.props.setPostTriviaTopic("Movies")}} inputProps={{ 'aria-label': 'Movies'}}/></label>

            <label className="gameOption">Geography<Radio checked={this.state.selectedValue === '22'} className={this.classes.radio} name="cat" onChange={(e) => {this.setState({category: 22, selectedValue: '22'}); this.props.setPostTriviaTopic("Geography")}} inputProps={{ 'aria-label': 'Geography'}}/></label>
        
            <label className="gameOption">Music<Radio checked={this.state.selectedValue === '12'} className={this.classes.radio} name="cat" onChange={(e) => {this.setState({category: 12, selectedValue: '12'}); this.props.setPostTriviaTopic("Music")}} inputProps={{ 'aria-label': 'Music'}}/></label>

            <label className="gameOption">Natural Science<Radio checked={this.state.selectedValue === '17'} className={this.classes.radio} name="cat" onChange={(e) => {this.setState({category: 17, selectedValue: '17'}); this.props.setPostTriviaTopic("Natural Science")}} inputProps={{ 'aria-label': 'Natural Science'}}/></label>


        {/* <label className="gameOption">Sports</label><input type="radio" name="cat" onChange={(e) => {this.setState({category: 21}); this.props.setPostTriviaTopic("Sports")}} />
        
        <label className="gameOption">Television</label><input type="radio" name="cat" onChange={(e) => {this.setState({category: 14}); this.props.setPostTriviaTopic("Television")}} />
        
        <label className="gameOption">History</label><input type="radio" name="cat" onChange={(e) => {this.setState({category: 23}); this.props.setPostTriviaTopic("History")}} />
        
        <label className="gameOption">Movies</label><input type="radio" name="cat" onChange={(e) => {this.setState({category: 11}); this.props.setPostTriviaTopic("Movies")}} />
        
        <label className="gameOption">Geography</label><input type="radio" name="cat" onChange={(e) => {this.setState({category: 22}); this.props.setPostTriviaTopic("Geography")}} />
                
        <label className="gameOption">Music</label><input type="radio" name="cat" onChange={(e) => {this.setState({category: 12}); this.props.setPostTriviaTopic("Music")}} />
        
        <label className="gameOption">Natural Science</label><input type="radio" name="cat" onChange={(e) => {this.setState({category: 17}); this.props.setPostTriviaTopic("Natural Science")}} /> */}


        {/* MALFUNCTIONING TOPICS */}
        {/* <label className="gameOption">Animals</label><input type="radio" name="cat" onChange={(e) => {this.setState({category: 27}); this.props.setPostTriviaTopic("Animals")}} /> */} 

        {/*         
        <label className="gameOption">Politics</label><input type="radio" name="cat" onChange={(e) => {this.setState({category: 24}); this.props.setPostTriviaTopic("Politics")}} /> */} 

        {/* <label className="gameOption">Celebrities</label><input type="radio" name="cat" onChange={(e) => {this.setState({category: 26}); this.props.setPostTriviaTopic("Celebrities")}} /> */}




        <br />
        <div className="editorButtons">
        <Button className={this.classes.applyChanges} variant="contained" onClick={(e) => {this.fetchQuestions(); this.setState({questionEditor: "Off"})}}>Apply Changes</Button>
        <Button className={this.classes.exitEditor} variant="contained" onClick={(e) => this.setState({questionEditor: "Off"})}>Exit Editor</Button>
        </div>

        </form>

        </div>
        )
        } 
    }


    render() { 
        
        return ( <div>
        {this.triviaSelector()}
        {this.thisOneQuestion()}
        <div className="backNext">
        {this.backButton()}
       {this.nextButton()}
       </div>
        </div> );
    }
}

export default withStyles((theme) => ({
    root: {
        fontFamily: "Roboto",
    },

    showAnswer: {
        fontWeight: 'bold',
        marginBottom: '2vw',
        border: '3px solid white',
    },

    changeQuestions: {
        fontWeight: 'bold',
        border: '3px solid white',
    },

    nextQuestion: {
        fontWeight: 'bold',
        marginBottom: '2vw',
        marginLeft: '.25vw',
        border: '3px solid white',
    },

    previousQuestion: {
        fontWeight: 'bold',
        marginBottom: '.5vw',
        marginRight: '.25vw',
        border: '3px solid white',
    },

    lastQuestion: {
        fontWeight: 'bold',
        border: '3px solid white',
        color: '#C6FF00',
        marginLeft: '.25vw',

    },

    applyChanges: {
        fontWeight: 'bold',
        marginRight: '1vw',
        border: '3px solid white',
    },

    exitEditor: {
        fontWeight:'bold',
        marginLeft: '1vw',
        border: '3px solid white',
    },

    radio: {
        color: 'white',
    },

}))(Gameplay);


// export interface GamePlayProps {
  
// }

 
// const GamePlay: React.SFC<GamePlayProps> = () => {
//     const [questionResults, setQuestionResults] = useState<any>([]);
//     const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
//     const [numberOfQuestions, setNumberOfQuestions] = useState(50);
//     const [questionEditor, setQuestionEditor] = useState("Off");
//     const [category, setCategory] = useState(11);
//     const [difficulty, setDifficulty] = useState("medium");
//     const [winner, setWinner] = useState();
   
//     const nextQuestion = () => {
//         setCurrentQuestionNumber(currentQuestionNumber + 1);
//     }

//     const nextButton = () => {
//         if (questionResults.length !== 0 && questionResults.length >= currentQuestionNumber + 2){
//             return (<div>
//                 <button onClick={() => nextQuestion()}>Next Question</button>
//             </div>)
//         } else if(questionResults.length !== 0 ) {
//             return(<div>LAST QUESTION!</div>)
//         } else {
//             return (<div><p>Questions loading...</p></div>
                
//             )
//         }
//     }



//     const triviaSelector = () => {

//         if (questionEditor == "On"){
//         return( <div>
//         <h5>Edit Questions</h5>
//         <form>
//             <p>Number of Questions</p>
//         <label>10</label><input type="radio" name="numberqs" onChange={(e) => setNumberOfQuestions(10)} />
//         <br />
//         <label>25</label><input type="radio" name="numberqs" onChange={(e) => setNumberOfQuestions(25)} />
//         <br />
//         <label>50</label><input type="radio" name="numberqs" onChange={(e) => setNumberOfQuestions(50)} />
//         <p>Difficulty</p>
//         <label>Easy</label><input type="radio" name="diff" onChange={(e) => setDifficulty("easy")}/>
//         <br />
//         <label>Medium</label><input type="radio" name="diff" onChange={(e) => setDifficulty("medium")} />
//         <br />
//         <label>Hard</label><input type="radio" name="diff" onChange={(e) => setDifficulty("hard")} />
//             <p>Category</p>
//         <label>Sports</label><input type="radio" name="cat" onChange={(e) => setCategory(21)} />
//         <br />
//         <label>Television</label><input type="radio" name="cat" onChange={(e) => setCategory(14)} />
//         <br />
//         <label>Politics</label><input type="radio" name="cat" onChange={(e) => setCategory(24)} />
//         <br />
//         <label>History</label><input type="radio" name="cat" onChange={(e) => setCategory(23)} />
//         <br />
//         <label>Movies</label><input type="radio" name="cat" onChange={(e) => setCategory(11)} />
//         <br />
//         <label>Geography</label><input type="radio" name="cat" onChange={(e) => setCategory(22)} />
//         <br />
//         <label>Celebrities</label><input type="radio" name="cat" onChange={(e) => setCategory(26)} />
//         <br />
//         <label>Music</label><input type="radio" name="cat" onChange={(e) => setCategory(12)} />
//         <br />
//         <label>Natural Science</label><input type="radio" name="cat" onChange={(e) => setCategory(17)} />
//         <br />
//         <label>Animals</label><input type="radio" name="cat" onChange={(e) => setCategory(27)} />
        
//         </form>
//         <button onClick={(e) => fetchQuestions()}>Apply Changes</button>
//         <button onClick={(e) => setQuestionEditor("Off")}>Exit Editor</button>
//         </div>
//         )
//         } 
//     }

//     const answerQuestionFunction = () => {
//         //ADD WHATEVER VISUAL AFFECT THE CORRECT ANSWER PROVIDES!
//         alert(`The correct answer is: ${questionResults[currentQuestionNumber].correct_answer}`);
//     }

//     const fetchQuestions = () => {
//         fetch(`https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=${difficulty}&type=multiple`, {
//             method: "GET",
//         })
//         .then((res) => res.json())
//         .then((json) => {
//             console.log(json);
//             setQuestionResults(json.results);
//         })
//     }
    

//     useEffect(() => {
//         fetchQuestions();
//     }, []);

//     const thisOneQuestion = () => {
//         if (questionResults.length !== 0 && questionResults.length >= currentQuestionNumber){
           
//         return(
//                 <div>
//                     <h5>{`Question #${currentQuestionNumber + 1}`}</h5>
//                     <p>{`${questionResults[currentQuestionNumber].question}`}</p>
//                     <p>Choose from the following:</p>
//                     <p>{`A: ${questionResults[currentQuestionNumber].incorrect_answers[0]}`}</p>
//                     <p>{`B: ${questionResults[currentQuestionNumber].incorrect_answers[1]}`}</p>
//                     <p>{`C: ${questionResults[currentQuestionNumber].correct_answer}`}</p>
//                     <p>{`D: ${questionResults[currentQuestionNumber].incorrect_answers[2]}`}</p>
//                     <button onClick={() => answerQuestionFunction()}>Show Answer</button>
//                     <button onClick={() => setQuestionEditor("On")}>Edit Questions</button>
                    
//                 </div>
//             )
//         } else {
//             return (<div>Nothing to return</div>)
//         }
//     }


//     return ( <div>

//         {triviaSelector()}
//         {thisOneQuestion()}
//         {nextButton()}
        
//         </div> );
// }
 
