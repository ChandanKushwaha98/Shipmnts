import React from 'react'
import CreatePost from './mainPanelComponents/CreatePost'
import Header from './mainPanelComponents/Header'

const MainPanel = () => {
    return (
        <div className="mainPanel">
            <Header />
            <CreatePost />
        </div>
    )
}

export default MainPanel
