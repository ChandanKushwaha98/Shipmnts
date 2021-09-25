// import React from 'react'

// const CreatePost = () => {
//     return (
//         <div className="createPost">
//             <div className="txtarea">
//                 <textarea rows="6" cols="70" placeholder="What's on your mind..." />
//             </div>
//             <div className="tweet">

//                 <button type="button" className="tweet_btn">Tweet</button>
//                 </div>
//         </div>
//     )
// }

// export default CreatePost

import React, { Component } from 'react';
import Post from './Post';

class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tweet: "",
            user: "",
            flag: 0,

        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(e) {
        // if(e.target.value.length)
        console.log(e.target.value.length);
        this.setState({
            tweet: e.target.value,
            flag: 0
        });

    }
    clearTextBox() {
        this.setState({
            tweet: "",
            flag: 0
        });
    }
   
    handleTweet(e) {
        console.log(this.state.tweet);
        this.setState({
            flag: 1,
        })
    }
    render() {
        console.log(this.state.tweet);
        return (
            <div>
                <div className="createPost">
                    <div className="txtarea">
                        <textarea rows="6" cols="70" placeholder="What's on your mind..." onChange={this.handleInputChange} />
                    </div>
                    <div className="tweet">
                        <button type="button" className="tweet_btn" onClick={e => this.handleTweet(e)}>Tweet</button>
                    </div>
                    {this.state.flag === 1 && <Post msg={this.state.tweet} />}
                </div>
            </div>
        );
    }
}

export default CreatePost;

