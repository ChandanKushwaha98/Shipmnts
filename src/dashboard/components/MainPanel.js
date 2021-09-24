import React from 'react'
import CreatePost from './mainPanelComponents/CreatePost'
import Header from './mainPanelComponents/Header'
import Post from './mainPanelComponents/Post'


const MainPanel = () => {
    return (
        <div className="mainPanel">

            <Header />
            <CreatePost />
            <Post />


        </div>
    )
}

export default MainPanel
