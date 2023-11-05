import React, {Component} from 'react'

class Comment extends Component {
    constructor(props) {
        super()

                       }
    render() {
        return (<div className="App">
            <h1>{this.props.name}</h1>
            <p>{this.props.time}</p>
            <p>{this.props.text}</p>
            <img src={this.props.image} />
            
            <button>answer</button>

            
            
            
        </div>)
    }

}

export default Comment;