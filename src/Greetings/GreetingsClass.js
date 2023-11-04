import React, {Component} from 'react'

class GreetingsClass extends Component {
    constructor(props) {
        super()

    }

    render() {
        return (<div>Hej ku {this.props.name}!</div>)
    }

}

export default GreetingsClass;