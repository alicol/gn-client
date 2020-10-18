import { stringify } from 'querystring';
// import { S_IFSOCK } from 'constants';
// import { readFileSync } from 'fs';
import React, {useEffect, useState} from 'react';

export interface GameplayProps {
    // postDifficulty: string,
    // postTriviaTopic: string,
    setPostTriviaTopic: any,
    setPostDifficulty: any
}
 
export interface GameplayState {
    questionResults: any,
    currentQuestionNumber: number,
    numberOfQuestions: number,
    questionEditor: string,
    category: number,
    difficulty: string, 
    winner: any,


}
 
class Gameplay extends React.Component<GameplayProps, GameplayState> {
    constructor(props: GameplayProps) {
        super(props);
        this.state = { questionResults: [], currentQuestionNumber: 0, numberOfQuestions: 50, questionEditor: "Off", category: 11, difficulty: "medium", winner: null };
    }
    componentDidMount(){
        this.fetchQuestions();
    }


     nextButton = () => {
        if (this.state.questionResults.length !== 0 && this.state.questionResults.length >= this.state.currentQuestionNumber + 2){
            return (<div>
                <button onClick={() => this.setState({currentQuestionNumber: this.state.currentQuestionNumber + 1})}>Next Question</button>
            </div>)
        } else if(this.state.questionResults.length !== 0 ) {
            return(<div>LAST QUESTION!</div>)
        } else {
            return (<div><p>Questions loading...</p></div>
                
            )
        }
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
    }

    answerQuestionFunction = () => {
                //ADD WHATEVER VISUAL AFFECT THE CORRECT ANSWER PROVIDES!
                alert(`The correct answer is: ${this.state.questionResults[this.state.currentQuestionNumber].correct_answer}`);
            }



   thisOneQuestion = () => {
        if (this.state.questionResults.length !== 0 && this.state.questionResults.length >= this.state.currentQuestionNumber){
        const randomizedAnswerOrder = () => {
            let randomNumber = Math.floor(Math.random() * 4) + 1;
            if (randomNumber == 1){
                return (<div>     
                <p>{`A: ${this.state.questionResults[this.state.currentQuestionNumber].correct_answer}`}</p>               
                <p>{`B: ${this.state.questionResults[this.state.currentQuestionNumber].incorrect_answers[0]}`}</p>
                <p>{`C: ${this.state.questionResults[this.state.currentQuestionNumber].incorrect_answers[1]}`}</p>
                <p>{`D: ${this.state.questionResults[this.state.currentQuestionNumber].incorrect_answers[2]}`}</p>
                </div>)
            } else if (randomNumber == 2){
                return (<div>     
                    <p>{`A: ${this.state.questionResults[this.state.currentQuestionNumber].incorrect_answers[0]}`}</p>
                    <p>{`B: ${this.state.questionResults[this.state.currentQuestionNumber].correct_answer}`}</p>  
                    <p>{`C: ${this.state.questionResults[this.state.currentQuestionNumber].incorrect_answers[1]}`}</p>
                    <p>{`D: ${this.state.questionResults[this.state.currentQuestionNumber].incorrect_answers[2]}`}</p>
                    </div>)
            } else if (randomNumber == 3){
                return (
                    <div>
                    <p>{`A: ${this.state.questionResults[this.state.currentQuestionNumber].incorrect_answers[0]}`}</p>
                    <p>{`B: ${this.state.questionResults[this.state.currentQuestionNumber].incorrect_answers[1]}`}</p>
                    <p>{`C: ${this.state.questionResults[this.state.currentQuestionNumber].correct_answer}`}</p>
                    <p>{`D: ${this.state.questionResults[this.state.currentQuestionNumber].incorrect_answers[2]}`}</p>
                    </div>
                )
            } else if (randomNumber == 4){
                return (<div>     
                    <p>{`A: ${this.state.questionResults[this.state.currentQuestionNumber].incorrect_answers[0]}`}</p> 
                    <p>{`B: ${this.state.questionResults[this.state.currentQuestionNumber].incorrect_answers[1]}`}</p>
                    <p>{`C: ${this.state.questionResults[this.state.currentQuestionNumber].incorrect_answers[2]}`}</p>
                    <p>{`D: ${this.state.questionResults[this.state.currentQuestionNumber].correct_answer}`}</p> 
                    </div>)
            }
            
        }   

        return(
                <div>
                    <h5>{`Question #${this.state.currentQuestionNumber + 1}`}</h5>
                    <p>{`${this.state.questionResults[this.state.currentQuestionNumber].question}`}</p>
                    <p>Choose from the following:</p>
                    {randomizedAnswerOrder()}
                    <button onClick={() => this.answerQuestionFunction()}>Show Answer</button>
                    <button onClick={() => this.setState({questionEditor: "On"})}>Edit Questions</button>
                    
                </div>
            )
        } else {
            return (<div>Nothing to return</div>)
        }
    }

    triviaSelector = () => {

        if (this.state.questionEditor == "On"){
        return( <div>
        <h5>Edit Questions</h5>
        <form>
            <p>Number of Questions</p>
        <label>10</label><input type="radio" name="numberqs" onChange={(e) => this.setState({numberOfQuestions: 10})} />
        <br />
        <label>25</label><input type="radio" name="numberqs" onChange={(e) => this.setState({numberOfQuestions: 25})} />
        <br />
        <label>50</label><input type="radio" name="numberqs" onChange={(e) => this.setState({numberOfQuestions: 50})} />
        <p>Difficulty</p>
        <label>Easy</label><input type="radio" name="diff" onChange={(e) => {this.setState({difficulty: "easy"}); this.props.setPostDifficulty("Easy")}}/>
        <br />
        <label>Medium</label><input type="radio" name="diff" onChange={(e) => {this.setState({difficulty: "medium"}); this.props.setPostDifficulty("Medium")}} />
        <br />
        <label>Hard</label><input type="radio" name="diff" onChange={(e) => {this.setState({difficulty: "hard"}); this.props.setPostDifficulty("Hard")}} />
            <p>Category</p>
        <label>Sports</label><input type="radio" name="cat" onChange={(e) => {this.setState({category: 21}); this.props.setPostTriviaTopic("Sports")}} />
        <br />
        <label>Television</label><input type="radio" name="cat" onChange={(e) => {this.setState({category: 14}); this.props.setPostTriviaTopic("Television")}} />
        <br />
        <label>Politics</label><input type="radio" name="cat" onChange={(e) => {this.setState({category: 24}); this.props.setPostTriviaTopic("Politics")}} />
        <br />
        <label>History</label><input type="radio" name="cat" onChange={(e) => {this.setState({category: 23}); this.props.setPostTriviaTopic("History")}} />
        <br />
        <label>Movies</label><input type="radio" name="cat" onChange={(e) => {this.setState({category: 11}); this.props.setPostTriviaTopic("Movies")}} />
        <br />
        <label>Geography</label><input type="radio" name="cat" onChange={(e) => {this.setState({category: 22}); this.props.setPostTriviaTopic("Geography")}} />
        <br />
        <label>Celebrities</label><input type="radio" name="cat" onChange={(e) => {this.setState({category: 26}); this.props.setPostTriviaTopic("Celebrities")}} />
        <br />
        <label>Music</label><input type="radio" name="cat" onChange={(e) => {this.setState({category: 12}); this.props.setPostTriviaTopic("Music")}} />
        <br />
        <label>Natural Science</label><input type="radio" name="cat" onChange={(e) => {this.setState({category: 17}); this.props.setPostTriviaTopic("Natural Science")}} />
        <br />
        <label>Animals</label><input type="radio" name="cat" onChange={(e) => {this.setState({category: 27}); this.props.setPostTriviaTopic("Animals")}} />
        
        </form>
        <button onClick={(e) => this.fetchQuestions()}>Apply Changes</button>
        <button onClick={(e) => this.setState({questionEditor: "Off"})}>Exit Editor</button>
        </div>
        )
        } 
    }


    render() { 
        return ( <div>
            Gameplay
        {this.triviaSelector()}
        {this.thisOneQuestion()}
       {this.nextButton()}
        </div> );
    }
}
 
export default Gameplay;


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
 
