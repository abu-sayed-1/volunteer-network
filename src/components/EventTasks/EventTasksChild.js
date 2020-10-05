import React from 'react';
import { Row, Col } from 'react-bootstrap'
import EventTask from "../images/images/extraVolunteer.png"
import "./EventTasksChild.css"


const EventTasksChild = (props) => {
    const { date, _id, tasks } = props.volunteerData;
    const handleDelEvent = props.handleDelEvent;
    const volunteerId = (id) => {
        fetch(`https://frozen-dawn-85435.herokuapp.com/delete/${id}`, {
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
                <Col>
                    <p>{date}</p>
                    <p>{tasks}</p>
                    <div>
                        <div><button onClick={() => volunteerId(_id)}>Cancel</button></div>
                    </div>
                </Col>
            </Row>

        </div>
    );
};

export default EventTasksChild;