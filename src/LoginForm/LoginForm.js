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
        this.validatePasswordOnBlur = this.validatePasswordOnBlur.bind(this)
    }
    validateNotEmpty(field, value)
    {
        console.log(value.length)
        if(value.length <= 0) {
            return `${field} must be filled out`
        }
    }
    checkErrorExist(errors, error) 
    {
        return errors.includes(error)
    }
    validateUsernameOnBlur(event) 
    {
        const username = event.target.value
        const errors = this.state.errors

        var validate_result = this.validateNotEmpty("Username", username)
        if (validate_result) {
            this.setState({username : ""})
            if(!this.checkErrorExist(errors, validate_result))
            {
                errors.push(validate_result)
            }
        }

        this.setState({username, errors})
        //console.log(this.state)

    }
    
    validatePasswordOnBlur(event) 
    {
        const password = event.target.value
        const errors = this.state.errors

        var validate_result = this.validateNotEmpty("Password", password)
        if(validate_result)
        {
            this.setState({password : ""})
            if(!this.checkErrorExist(errors, validate_result))
            {
                errors.push(validate_result)
            }
        }
        this.setState({password, errors})
    }

    validatePasswordConfirmationOnBlur(event)
    {
        const passwordConfirmation = event.target.value
        const errors = this.state.errors

        if(passwordConfirmation !== this.state.password)
        {
            var error = "Password must match"
            if(!this.checkErrorExist(errors, error))
            {
                errors.push(error)
            }
        }
        this.setState({passwordConfirmation, errors})
    }

    validateEmailFormat(fieldName, value) 
    {
        let [lhs, rhs] = value.split('@')
        lhs = lhs || ""
        rhs = rhs || ""
        
        if(lhs.length <= 0 || rhs.length <= 0) 
        {
            return `${fieldName} must be in standard emailformat`
        }
    }

    validateEmailOnBlur(event) 
    {
        const email = event.target.value
        const errors = this.state.errors

        var validate_result = this.validateEmailFormat("Email", email)
        if(validate_result)
        {
            this.setState({email : ""})
            errors.push(validate_result)
        }
    }
    
    submit() 
    {
        alert("Submitted!")
    }

    displayErrors() 
    {
        return (
            <div id="errorsDiv">
                {this.state.errors.map((err, index) => <p key={index}>{err}</p>)}
            </div>
        )

    }

    render() {
        return (
            <div className="App">
                Username: <input type="text" onBlur={this.validateUsernameOnBlur.bind(this)} /><br />
                Password: <input type="text" onBlur={this.validatePasswordOnBlur} /><br />
                Password Confirmation: <input type="text" onBlur={this.validatePasswordConfirmationOnBlur.bind(this)} /><br />
                Email: <input type="text" onBlur={this.validateEmailOnBlur.bind(this)} /><br />
                <button onClick={this.submit}>Submit</button>
                {/*console.log(this.state.errors)*/}
                {this.displayErrors()}
            </div>)
    }

}

export default LoginForm;