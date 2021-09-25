import React, { Component } from 'react'
import { Card, Button, CardImg, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap';
import dp from "../../../images/dp.jpg"
import '../../../App.css'

// const OtherUser = () => {

//     return (

//         <Card className="otherUserCard">
//             <span className="dp-name-otherUser">
//                     <CardImg className="dp-otherUser" src={dp} alt="Card image cap" /><span className="dp-text-otherUser txtwhite">Chandan Kushwaha</span></span>
//         <CardBody>
//         <Button color="primary">Follow</Button>{' '}
//         </CardBody>
//       </Card>

//     )
// }

// export default OtherUser
class OtherUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            follow: false,
            user: ""


        }
        // this.handleInputChange = this.handleInputChange.bind(this);
    }
    followChanged = () => {

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
                        <CardImg className="dp-otherUser" src={dp} alt="Card image cap" /><span className="dp-text-otherUser txtwhite">Chandan Kushwaha</span></span>
                    <CardBody>
                        {/* <Button color="primary" onClick={e => this.followChanged(e)}>{this.state.follow ? "Unfollow" : "Follow"}</Button> */}

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

