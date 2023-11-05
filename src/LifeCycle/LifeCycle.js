import React, {Component} from 'react'

class LifeCycle extends Component {
    constructor(props) {
        super()
        this.title = "Life Cycle"
        this.state = {
            cycle : 0
        }
        console.log("Constructor")
        console.log("Cycle:" + this.state.cycle)
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log("ComponentDidUpdate")
        console.log("Cycle: " + this.state.cycle)
        console.log("prevProp:", prevProps)
        console.log("prevState:", prevState)
    }

    componentDidMount() {
        console.log("ComponentDidMount")

        setInterval(
            () => this.setState({cycle : this.state.cycle + 1}), 5000
        )
    }

    render() {
        console.log("Render")
        return (<div>
            <h1>Lifecycle</h1>
            {this.state.cycle}
        </div>)
    }

}

export default LifeCycle;