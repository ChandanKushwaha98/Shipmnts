import React from 'react'
import { Card, CardImg, CardText, CardBody,} from 'reactstrap';
import dp from "../../../images/dp.jpg"

const Post = (props) => {
    return (

        <div className="postCardDiv">
            <Card className="postCard">
                <span className="dp-name">
                    <CardImg className="dp" src={dp} alt="Card image cap" /><span className="dp-text">Chandan Kushwaha</span></span>
                <CardBody>

                    <CardText className="card-text">{props.msg}</CardText>

                </CardBody>
            </Card>
        </div>
    )
}

export default Post
