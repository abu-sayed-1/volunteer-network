import React from 'react';
import { Row, Col } from 'react-bootstrap'
import EventTask from "../images/images/extraVolunteer.png"
import "./EventTasksChild.css"


const EventTasksChild = (props) => {
    const { date, email, _id } = props.volunteerData;
    const handleDelEvent = props.handleDelEvent;
    const volunteerId = (id) => {
        fetch(`http://localhost:3200/delete/${id}`, {
            method: 'DELETE'
        })
            .then(result => {
                handleDelEvent()
                console.log(result, 'delete successfully')
            })
    }


    return (
        <div className="EventTasksChild_container" >
            <Row className="row_container row_1">
                <Col><img src={EventTask} alt="" /></Col>
                <Col>{date}
                    <br />
                    {email}
                    <br />
                    <button onClick={() => volunteerId(_id)}>Cancel</button>
                </Col>
            </Row>

        </div>
    );
};

export default EventTasksChild;