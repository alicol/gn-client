import { S_IFSOCK } from 'constants';
import React, {useEffect, useState} from 'react';

export interface GamePlayProps {
    
}
 
const GamePlay: React.SFC<GamePlayProps> = () => {
    const [questionResults, setQuestionResults] = useState<any>([]);
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
    const [numberOfQuestions, setNumberOfQuestions] = useState(50);
    const [questionEditor, setQuestionEditor] = useState("Off");
    const [category, setCategory] = useState(11);
    const [difficulty, setDifficulty] = useState("medium");
    const [winner, setWinner] = useState();
   
    const nextQuestion = () => {
        setCurrentQuestionNumber(currentQuestionNumber + 1);
    }

    const nextButton = () => {
        if (questionResults.length !== 0 && questionResults.length >= currentQuestionNumber + 2){
            return (<div>
                <button onClick={() => nextQuestion()}>Next Question</button>
            </div>)
        } else if(questionResults.length !== 0 ) {
            return(<div>LAST QUESTION!</div>)
        } else {
            return (<div><p>Questions loading...</p></div>
                
            )
        }
    }



    const triviaSelector = () => {

        if (questionEditor == "On"){
        return( <div>
        <h5>Edit Questions</h5>
        <form>
            <p>Number of Questions</p>
        <label>10</label><input type="radio" name="numberqs" onChange={(e) => setNumberOfQuestions(10)} />
        <br />
        <label>25</label><input type="radio" name="numberqs" onChange={(e) => setNumberOfQuestions(25)} />
        <br />
        <label>50</label><input type="radio" name="numberqs" onChange={(e) => setNumberOfQuestions(50)} />
        <p>Difficulty</p>
        <label>Easy</label><input type="radio" name="diff" onChange={(e) => setDifficulty("easy")} />
        <br />
        <label>Medium</label><input type="radio" name="diff" onChange={(e) => setDifficulty("medium")} />
        <br />
        <label>Hard</label><input type="radio" name="diff" onChange={(e) => setDifficulty("hard")} />
            <p>Category</p>
        <label>Sports</label><input type="radio" name="cat" onChange={(e) => setCategory(21)} />
        <br />
        <label>Television</label><input type="radio" name="cat" onChange={(e) => setCategory(14)} />
        <br />
        <label>Politics</label><input type="radio" name="cat" onChange={(e) => setCategory(24)} />
        <br />
        <label>History</label><input type="radio" name="cat" onChange={(e) => setCategory(23)} />
        <br />
        <label>Movies</label><input type="radio" name="cat" onChange={(e) => setCategory(11)} />
        <br />
        <label>Geography</label><input type="radio" name="cat" onChange={(e) => setCategory(22)} />
        <br />
        <label>Celebrities</label><input type="radio" name="cat" onChange={(e) => setCategory(26)} />
        <br />
        <label>Music</label><input type="radio" name="cat" onChange={(e) => setCategory(12)} />
        <br />
        <label>Natural Science</label><input type="radio" name="cat" onChange={(e) => setCategory(17)} />
        <br />
        <label>Animals</label><input type="radio" name="cat" onChange={(e) => setCategory(27)} />
        
        </form>
        <button onClick={(e) => fetchQuestions()}>Apply Changes</button>
        <button onClick={(e) => setQuestionEditor("Off")}>Exit Editor</button>
        </div>
        )
        } 
    }

    const answerQuestionFunction = () => {
        //ADD WHATEVER VISUAL AFFECT THE CORRECT ANSWER PROVIDES!
        alert(`The correct answer is: ${questionResults[currentQuestionNumber].correct_answer}`);
    }

    const fetchQuestions = () => {
        fetch(`https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=${difficulty}&type=multiple`, {
            method: "GET",
        })
        .then((res) => res.json())
        .then((json) => {
            console.log(json);
            setQuestionResults(json.results);
        })
    }
    

    useEffect(() => {
        fetchQuestions();
    }, []);

    const thisOneQuestion = () => {
        if (questionResults.length !== 0 && questionResults.length >= currentQuestionNumber){
           
        return(
                <div>
                    <h5>{`Question #${currentQuestionNumber + 1}`}</h5>
                    <p>{`${questionResults[currentQuestionNumber].question}`}</p>
                    <p>Choose from the following:</p>
                    <p>{`A: ${questionResults[currentQuestionNumber].incorrect_answers[0]}`}</p>
                    <p>{`B: ${questionResults[currentQuestionNumber].incorrect_answers[1]}`}</p>
                    <p>{`C: ${questionResults[currentQuestionNumber].correct_answer}`}</p>
                    <p>{`D: ${questionResults[currentQuestionNumber].incorrect_answers[2]}`}</p>
                    <button onClick={() => answerQuestionFunction()}>Correct Answer</button>
                    <button onClick={() => setQuestionEditor("On")}>Edit Questions</button>
                    
                </div>
            )
        } else {
            return (<div>Nothing to return</div>)
        }
    }

    // const mapQuestions = () => {
    //     if (questionResults !== []){
    //         questionResults.map((oneQuestion: any) => {
    //             const actualQuestion = oneQuestion.question;
    //             console.log(actualQuestion);
    //             return (<div><p>{actualQuestion}</p></div>)
    //         })
    //         // return(
    //         //     <div>
    //         //         <h5>{`Question #${currentQuestionNumber + 1}`}</h5>
    //         //         <p>{`${questionResults[currentQuestionNumber]}`}</p>
    //         //     </div>
    //         // )
            
    //     } else {
    //         console.log("Second Map function ran");
    //         return (<div>No Question at this time.</div>)
    //     }
    // }


    return ( <div>

        {triviaSelector()}
        {thisOneQuestion()}
        {nextButton()}
        
        </div> );
}
 
export default GamePlay;