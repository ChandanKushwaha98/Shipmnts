import React from 'react'

const CreatePost = () => {
    return (
        <div className="createPost">
            <div className="txtarea">
                <textarea rows="6" cols="90" />
            </div>
            <div className="tweet">
                <button type="button" className="tweet_btn">Tweet</button>
                </div>
        </div>
    )
}

export default CreatePost
