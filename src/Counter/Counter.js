import React, {Component} from 'react'

class Counter extends Component {
    constructor() {
        super()
        this.title = "Counter"
        this.state = {
             clickCounter : 0
        }
    }

    setCounter(increment = "down") 
    {
        if (increment == "up") 
        {
            this.setState({clickCounter : this.state.clickCounter + 1})
        }
        else
        {
            this.setState({clickCounter : this.state.clickCounter - 1})
        }
    }
    render() {
        return (<div>{this.title}: {this.state.clickCounter}
             <br/><button onClick={() => this.setCounter("up")}>+1</button>
             <br/><button onClick={() => this.setCounter()}>-1</button>
            </div>)
    }

}

export default Counter;