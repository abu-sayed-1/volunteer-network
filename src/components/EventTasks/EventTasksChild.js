import React from 'react';
import { Row, Col } from 'react-bootstrap'
import EventTask from "../images/images/extraVolunteer.png"
import "./EventTasksChild.css"


const EventTasksChild = () => {
    return (
        <div className="EventTasksChild_container" >
            <Row className="row_container row_1">
                <Col><img src={EventTask} alt="" /></Col>
                <Col>2 of Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, soluta.
                <br />
                    <button>Cancel</button>
                </Col>
            </Row>

            <Row className="row_container row_2">
                <Col><img src={EventTask} alt="" /></Col>
                <Col>2 of Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, soluta.
                  <br />
                    <button>Cancel</button>
                </Col>
            </Row>
        </div>
    );
};

export default EventTasksChild;