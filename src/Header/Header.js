import React, {Component} from 'react'

class Header extends Component {
    constructor(props) {
        super()

    }

    render() {
        return (<div>{this.props.title}</div>)
    }

}

export default Header;