import React, {Component} from 'react'
class Answer  extends answer {
    constructor(props) {
        super()
        this.title = "Answer"
        
        
    }

    render() {
        return (<div className="App">
            <h1>{this.title}</h1>
            Name:<input type='text'></input>
          
             <button >submit</button>

        </div>)
    }

}

export default Answer;