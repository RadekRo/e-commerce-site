import React, {Component} from 'react'

class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
             username : "",
             password : "",
             passwordConfirmation : "",
             email : "",
             errors : []
        }
    }
    validateNotEmpty(field, value)
    {
        console.log(value.length)
        if(value.length <= 0) {
            return `${field} must be filled out`
        }
    }
    validateUsernameOnBlur(event) 
    {
        console.log(event)
        console.log(this)
        const username = event.target.value;
        const errors = this.state.errors;

        var validate_result = this.validateNotEmpty("Username", username)
        if (validate_result) {
            this.setState({username : ""})
            errors.push(validate_result);
        }

        this.setState({username, errors})
        console.log(this.state)

    }
    displayErrors() 
    {
        return (
            <div>
                {this.state.errors.map((err, index) => <p>{err}</p>)}
            </div>
        )

    }

    render() {
        return (
            <div className="App">
                Username: <input type="text" onBlur={this.validateUsernameOnBlur.bind(this)} /><br />
                Password: <input type="text" /><br />
                Password Confirmation: <input type="text" /><br />
                Email: <input type="text" /><br />
                <button>Submit</button>
                {/*console.log(this.state.errors)*/}
                {this.displayErrors()}
            </div>)
    }

}

export default LoginForm;