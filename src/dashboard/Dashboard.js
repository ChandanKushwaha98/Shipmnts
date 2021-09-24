import React from 'react'
import LeftPanel from './components/LeftPanel'
import MainPanel from './components/MainPanel'
import RightPanel from './components/RightPanel'
import {Container,Row,Col} from 'react-bootstrap'

const Dashboard = () => {
    return (
        <div className="main">
            
            <LeftPanel />
            <MainPanel />
            <RightPanel />

   
        </div>
    )
}

export default Dashboard
