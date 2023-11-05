import React, {Component} from 'react'

class Quiz extends Component {
    constructor(props) {
        super()
        this.title = "Quiz"
        this.state = {
            playerScore : 0,
            questions: [
            {
                title: "What animal barks?",
                possibleAnswers: ["Dog", "Cat"],
                rightAnswer: "Dog",
                playerChoice: null
            },
            {
                title: "What animal is more closely related to a tiger?",
                possibleAnswers: ["Dog", "Cat", "Elephant"],
                rightAnswer: "Cat",
                playerChoice: null
            }]
        }
       
    }

    displayQuestion(index) {
        const question = this.state.questions[index]
        console.log(question)
        console.log("Player score: ", this.state.playerScore)
        return (
            <div className="App">
                <p>{question.title}</p>
                {/* {question.possibleAnswers.map((answer, answerIndex) =>  */}
                {question.possibleAnswers.map((answer) => 
                <button onClick={() => this.answerQuestion(index, answer)}>{answer}</button>
                )}

                {/* <button onClick={() => this.answerQuestion(index, question.possibleAnswers[0])}>{question.possibleAnswers[0]}</button>
                
                <button onClick={() => this.answerQuestion(index, question.possibleAnswers[1])}>{question.possibleAnswers[1]}</button>
                 */}
                {this.displayResult(index)}
            </div>
        )
    }

    displayResult(index) {
        const question = this.state.questions[index]
        if(!question.playerChoice) { return }
        if(question.playerChoice === question.rightAnswer){
            return (<div><p>Your answer is correct!</p></div>)
        }
        else {
            return(<div><p>Your answer is incorrect!</p></div>)
        }
    }

    answerQuestion(index, choice) {
       const answeredQuestion = this.state.questions[index]
       answeredQuestion.playerChoice = choice 
       const allQuestions = this.state.questions
       allQuestions[index] = answeredQuestion
       this.setState({
        questions : allQuestions
       }, () => {this.updatePlayerScore()})
    }

    updatePlayerScore() {
        const playerScore = this.state.questions.filter(q => q.rightAnswer === q.playerChoice).length
        this.setState({
            playerScore
        })
        console.log("New player score:", playerScore)

    }

    render() {
        return (<div className="App">
            <h1>Quiz</h1>
            {this.state.questions.map((question, index) => this.displayQuestion(index))}
            {/*
            {this.displayQuestion(0)}
            {this.displayQuestion(1)}
            */}
        </div>)
    }

}

export default Quiz;