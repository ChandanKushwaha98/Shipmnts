import React from 'react'
import { Nav } from "react-bootstrap";
import logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faBookmark, faEnvelope, faHashtag, faHome, faList, faUser } from '@fortawesome/free-solid-svg-icons';

const LeftPanel = () => {

    return (
        <div className="m-3">
            <Nav className="sidebar"
                onSelect={selectedKey => alert(`selected ${selectedKey}`)}>
                <img src={logo} alt="logo" className="logo" />
                <div className="sidebar-sticky"></div>

                <Nav.Item className="menu">
                    <FontAwesomeIcon icon={faHome} color="white" className="fa-lg"/>
                    <Nav.Link className="link" href="/home">Home</Nav.Link>
                </Nav.Item >
                <Nav.Item className="menu">
                <FontAwesomeIcon icon={  faHashtag  } color="white" className="fa-lg"/>
                    <Nav.Link className="link" eventKey="Explore">Explore</Nav.Link>
                </Nav.Item >
                <Nav.Item className="menu">
                <FontAwesomeIcon icon={faBell} color="white" className="fa-lg"/>
                    <Nav.Link className="link" eventKey="Notification">Notification</Nav.Link>
                    
                </Nav.Item>

                <Nav.Item className="menu">
                <FontAwesomeIcon icon={faEnvelope} color="white" className="fa-lg"/>
                    <Nav.Link className="link" eventKey="Messages">Messages</Nav.Link>
                </Nav.Item>
                <Nav.Item className="menu">
                <FontAwesomeIcon icon={faBookmark} color="white" className="fa-lg"/>
                    <Nav.Link className="link" eventKey="Bookmarks">Bookmarks</Nav.Link>
                </Nav.Item>
                <Nav.Item className="menu">
                <FontAwesomeIcon icon={faList} color="white" className="fa-lg"/>
                    <Nav.Link className="link" eventKey="Lists">Lists</Nav.Link>
                </Nav.Item>
                <Nav.Item className="menu">
                <FontAwesomeIcon icon={faUser} color="white" className="fa-lg"/>
                    <Nav.Link className="link" eventKey="Profile">Profile</Nav.Link>
                </Nav.Item>
                
                
            </Nav>
        </div>
    )
}

export default LeftPanel
