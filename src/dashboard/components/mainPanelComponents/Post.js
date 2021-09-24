import React from 'react'
import {
    Card, CardImg, CardText, CardBody, Button
} from 'reactstrap';
import dp from "../../../images/dp.jpg"

const Post = () => {
    return (
        <div className="postCardDiv">
            <Card className="postCard">
                <span className="dp-name">
                    <CardImg className="dp" src={dp} alt="Card image cap" /><span className="dp-text">Chandan Kushwaha</span></span>
                <CardBody>

                    <CardText className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's contentSome quick example text to build on the card title and make up the bulk of the card's contentSome quick example text to build on the card title and make up the bulk of the card's content</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default Post
