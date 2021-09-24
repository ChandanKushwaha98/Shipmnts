import React from 'react'
import { Nav } from "react-bootstrap";
import logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHome } from '@fortawesome/free-solid-svg-icons';

const LeftPanel = () => {

    return (
        <div className="m-3">
            <Nav className="sidebar"
                onSelect={selectedKey => alert(`selected ${selectedKey}`)}>
                <img src={logo} alt="logo" className="logo" />
                <div className="sidebar-sticky"></div>

                <Nav.Item className="menu">
                    <FontAwesomeIcon icon={
                        faHome
                    } color="white" className="fa-lg"/>
                    <Nav.Link className="link" href="/home">Home</Nav.Link>
                </Nav.Item >
                <Nav.Item className="menu">
                    <Nav.Link className="link" eventKey="link-1">Explore</Nav.Link>
                </Nav.Item >
                <Nav.Item className="menu">
                    <Nav.Link className="link" eventKey="link-2">Notification</Nav.Link>
                </Nav.Item>

                <Nav.Item className="menu">
                    <Nav.Link className="link" eventKey="link-2">Messages</Nav.Link>
                </Nav.Item>
                <Nav.Item className="menu">
                    <Nav.Link className="link" eventKey="link-2">Bookmarks</Nav.Link>
                </Nav.Item>
                <Nav.Item className="menu">
                    <Nav.Link className="link" eventKey="link-2">Lists</Nav.Link>
                </Nav.Item>
                <Nav.Item className="menu">
                    <Nav.Link className="link" eventKey="link-2">Profile</Nav.Link>
                </Nav.Item>
                <Nav.Item className="menu">
                    <Nav.Link className="link" eventKey="link-2">More</Nav.Link>
                </Nav.Item>
                <Nav.Item className="menu">
                    <Nav.Link className="link" eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default LeftPanel
