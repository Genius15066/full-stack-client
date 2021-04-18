import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './TourCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';

const TourCard = (props) => {
    const { imageURL, description, cost, duration, title,_id } = props.data;

    const history=useHistory()
    const handleClick=(data)=>{
        const url=`/dashboard/book/${_id}`
        history.push(url)
    }
    return (
        <Col md={4}>
            <div className="tour-container">
                <div className="tour-img">
                    <img src={imageURL} className="w-100 tour-img" alt="" />
                </div>
                <div className="tour-price">
                    <h4 className="price">$ {cost}/<small className="special-text">per person</small></h4>
                </div>
            </div>

            <div >
                <Card className="tour-info" onClick={()=>handleClick(props.data)}>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="footer-style">
                     <small>  <FontAwesomeIcon  icon={faClock} /> {duration} days </small>
                    </Card.Footer>
                </Card>
            </div>

        </Col>
    );
};

export default TourCard;