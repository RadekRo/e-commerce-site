import React, {Component} from 'react'

class InventoryItem extends Component {
    constructor(props) {
        super()

    }

    render() 
    {
        return (<div>Nazwa bardziewia: {this.props.name}, Cena badziewia: {this.props.price}</div>)
    }

}

export default InventoryItem;