import React, { Component } from 'react';
import Post from './Post';

class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tweet: "",
            user: "",
            flag: 0,
            isValid: false

        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(e) {
        console.log(e.target.value.length)
        if (e.target.value.length < 1) {
            console.log("inside<1")
            this.setState({
                isValid: false
            });
        }
        else if (e.target.value.length < 140) {
            console.log("be less than 140 words");
            this.setState({
                tweet: e.target.value,
                isValid: true,
                flag: 0
            });
        } else
            if (e.target.value.length > 140) {
                console.log("should be less than 140 words");
                this.setState({
                    isValid: false
                });
            }

    }
    clearTextBox() {
        this.setState({
            tweet: "",
            flag: 0
        });
    }

    handleTweet(e) {
        if (this.state.isValid) {
            console.log(this.state.tweet);
            this.setState({
                flag: 1,
            })
        } else { }
    }
    render() {
        return (
            <div>
                <div className="createPost">
                    <div className="txtarea">
                        <textarea rows="6" cols="70" placeholder="What's on your mind..." onChange={this.handleInputChange} />
                        {this.state.isValid ? "" : <h4 className="txtred"> Should be greater than 0 and less than 140 charcters</h4>}
                    </div>
                    <div className="tweet">
                        {this.state.isValid ? <button type="button" className="tweet_btn" onClick={e => this.handleTweet(e)}>Tweet</button> : <button type="button" className="tweet_btn" disabled>Tweet</button>}

                    </div>

                </div>
                {this.state.flag === 1 && <Post msg={this.state.tweet} />}
            </div >
        );
    }
}

export default CreatePost;

