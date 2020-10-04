import React from 'react';
import { Row, Col } from 'react-bootstrap'
import EventTask from "../images/images/extraVolunteer.png"
import "./EventTasksChild.css"


const EventTasksChild = (props) => {
    const {title, date, email, _id} = props.volunteerData;
    // console.log(props.volunteerData)

    // function deleteProduct(id){
       
 
    //  }
  
     const volunteerId = (id) => {
        fetch(`/delete/${id}`,{
            method:'DELETE'
          })
          .then(res => res.json())
          .then(result => {
            console.log('delete successfully')
          })
     }





    return (
        <div className="EventTasksChild_container" >
            <Row className="row_container row_1">
                <Col><img src={EventTask} alt="" /></Col>
                <Col>{date}
                 <br/>
                 {email}
                 {/*  <button onclick="deleteProduct('${pd._id}')">delete</button> */}
                <br />
                    <button onClick={() => volunteerId(_id)}>Cancel</button>
                </Col>
            </Row>
{/* 
            <Row className="row_container row_2">
                <Col><img src={EventTask} alt="" /></Col>
                <Col>2 of Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, soluta.
                  <br />
                    <button>Cancel</button>
                </Col>
            </Row> */}
        </div>
    );
};

export default EventTasksChild;