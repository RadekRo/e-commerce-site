import React, {Component} from 'react'

class CounterClass extends Component {
    constructor(props) {
        super()
        this.title = "Counter"
        this.state = {
            clickCounter : 0
        }

    }
    setCounter(event)
    {
        
        this.setState({clickCounter : this.state.clickCounter + 1})
    }
    render() {
        return (<div>{this.title}: {this.state.clickCounter} <br />
        <button onClick={() => this.setCounter()}>guzik</button>
        </div>)
    }

}

export default CounterClass;