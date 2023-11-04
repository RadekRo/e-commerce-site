import React, {Component} from 'react'

class BlogPostWriter extends Component {
    constructor(props) {
        super()
        this.state = {
            postMessage : "",
            totalCharacters : 0
        } 
    this.validatePostMessageLength = this.validatePostMessageLength.bind(this)
    }   
    validatePostMessageLength()
    {
        console.log(this.state.totalCharacters)
        if (this.state.totalCharacters <= 100) {
            alert("Uwaga za mało znaków")
        }
        else {
            alert("Cool bro!")
        }
    }
    countTotalCharacters()
    {
        this.setState({totalCharacters: this.state.totalCharacters + 1})
    }


    render() {
        return (<div>{this.props.title} <br />
        <textarea id="identity" onChange={this.countTotalCharacters.bind(this)}>
        </textarea> <br />
        <button onClick={this.validatePostMessageLength}> Send</button> <br />
        <p>
            Total characters: {this.state.totalCharacters}
        </p>
        </div>)
    }
}
export default BlogPostWriter;