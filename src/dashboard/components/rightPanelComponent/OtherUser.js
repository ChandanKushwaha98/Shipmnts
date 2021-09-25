import React, { Component } from 'react'
import { Card, Button, CardImg, CardText, CardBody } from 'reactstrap';
import dp from "../../../images/dp.jpg"
import '../../../App.css'

class OtherUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            follow: false,
            user: ""


        }
    }
    followChanged = (props) => {

        this.setState({
            follow: !this.state.follow,
            user: ""
        })
    }

    render() {
        return (
            <div>
                <Card className="otherUserCard">
                    <span className="dp-name-otherUser">
                        <CardImg className="dp-otherUser" src={this.props.img} alt="Card image cap" /><span className="dp-text-otherUser txtwhite">{this.props.name}</span></span>
                    <CardBody>
                        {
                            this.state.follow
                                ? <div> <Button color="primary" onClick={e => this.followChanged(e)}>Unfollow</Button><CardText>You are now following</CardText></div>
                                : <Button color="primary" onClick={e => this.followChanged(e)}>Follow</Button>
                        }
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default OtherUser;

