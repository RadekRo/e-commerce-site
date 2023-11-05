import React, {Component} from 'react'

class GameResult extends Component {
    constructor(props) {
        super()
       
        this.state = {
             teamOne : props.teamOne,
             teamTwo : props.teamTwo,
             teamOneScore: 0,
             teamTwoScore: 0,
             scorersOne : [],
             scorersTwo : []
        }
    }
    updateScore() {
        
    }

    render() {
        return (<div className="Result">
            <table>
                <tbody>
                    <tr className="score">
                        <td>{this.state.teamOne} {this.state.teamOneScore}</td><td>:</td><td>{this.state.teamTwoScore} {this.state.teamTwo}</td>
                    </tr>
                    <tr className="shooter">
                        <td>{this.scorersOne}</td><td></td><td>{this.scorersTwo}</td>
                    </tr>
                    <tr>
                        <td>Szczelec:<br /><input type="text" id="scorerOne" /><br /><button>{this.state.teamOne} goal!</button></td>
                        <td></td>
                        <td>Szczelec:<br /> <input type="text" id="scorerTwo" /><br /><button>{this.state.teamTwo} goal!</button></td>
                    </tr>
                           </tbody>
            </table>
        </div>)
    }
}

export default GameResult;