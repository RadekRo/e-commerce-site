import React, {Component} from 'react'
import Comment from '../Comment/Comment'
class Comments extends Component {
    constructor(props) {
        super()
        this.title = "Comments"
        this.state = {
        
                "comments": [
                  {
                    "name": "John Smith",
                    "text": "This is an awesome page. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque, purus ac feugiat eleifend, ex.",
                    "image": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80",
                    "time": "Oct 02, 2019",
                    "comments": [
                      {
                        "name": "Karen Michaels",
                        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque, purus ac feugiat eleifend, ex.",
                        "image": "https://images.unsplash.com/photo-1567336273898-ebbf9eb3c3bf?auto=format&fit=crop&w=200&q=80",
                        "time": "Oct 10, 2019"
                      },
                      {
                        "name": "Tim Parker",
                        "text": "Tullam elementum vulputate lectus sed pellentesque. Maecenas convallis orci at elit consectetur tempus ac id.",
                        "image": "https://images.unsplash.com/photo-1505247964246-1f0a90443c36?auto=format&fit=crop&w=200&q=80",
                        "time": "Oct 05, 2019"
                      }
                    ]
                  },
                  {
                    "name": "Sarah James",
                    "text": "Nice! Nullam elementum vulputate lectus sed pellentesque. Maecenas convallis orci at elit consectetur tempus ac id.",
                    "image": "https://images.unsplash.com/photo-1552607676-17f088307dce?auto=format&fit=crop&w=200&q=80",
                    "time": "Sept 22, 2019"
                  }
                ]
              }
        
    }

    render() {
        return (<div className="App">
            <h1>{this.title}</h1>
            <Comment name={this.state.comments[0].name }
            time={this.state.comments[0].time }
            text={this.state.comments[0].text}
            image={this.state.comments[0].image}
            />
            

        </div>)
    }

}

export default Comments;