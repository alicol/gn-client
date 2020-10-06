import { S_IFSOCK } from 'constants';
import React, {useEffect, useState} from 'react';

export interface GamePlayProps {
    
}
 
const GamePlay: React.SFC<GamePlayProps> = () => {
    const [questionResults, setQuestionResults] = useState<any>([]);
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
   
    const nextQuestion = () => {
        setCurrentQuestionNumber(currentQuestionNumber + 1);
    }

    const nextButton = () => {
        if (questionResults.length !== 0 && questionResults.length >= currentQuestionNumber + 2){
            return (<div>
                <button onClick={() => nextQuestion()}>Next Question</button>
            </div>)
        } else if(questionResults.length !== 0 ) {
            alert("This is the last question!")
        } else {
            return (<div><p>Questions loading...</p></div>
                
            )
        }
    }

    const answerQuestionFunction = () => {
        //ADD WHATEVER VISUAL AFFECT THE CORRECT ANSWER PROVIDES!
        alert(`The correct answer is: ${questionResults[currentQuestionNumber].correct_answer}`);
    }

    const fetchQuestions = () => {
        fetch('https://opentdb.com/api.php?amount=50&category=11&difficulty=medium&type=multiple', {
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
                    
                </div>
            )
        } else {
            return (<div>Nothing to return</div>)
        }
    }

    const mapQuestions = () => {
        if (questionResults !== []){
            questionResults.map((oneQuestion: any) => {
                const actualQuestion = oneQuestion.question;
                console.log(actualQuestion);
                return (<div><p>{actualQuestion}</p></div>)
            })
            // return(
            //     <div>
            //         <h5>{`Question #${currentQuestionNumber + 1}`}</h5>
            //         <p>{`${questionResults[currentQuestionNumber]}`}</p>
            //     </div>
            // )
            
        } else {
            console.log("Second Map function ran");
            return (<div>No Question at this time.</div>)
        }
    }


    return ( <div>
        {thisOneQuestion()}
        {nextButton()}
        
        </div> );
}
 
export default GamePlay;