import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import EventTasksChild from './EventTasksChild';

const EventTasks = () => {
 const [registrationData, setRegistrationData] = useState([]);
 const [loggedInUser, setLoggedInUser] = useContext(UserContext);
 console.log(registrationData)
    fetch('http://localhost:3200/register?email=' + loggedInUser.email,{
      method:'GET',
      headers:{
        'Content-type': 'application/json',
        authorization:`Bearer ${sessionStorage.getItem('token')}`
      }
    })
    .then(res => res.json())
    .then(data => setRegistrationData(data));
  return (
    <div className='container'>
      {
         registrationData.map(data =><EventTasksChild key={data._id} volunteerData={data}></EventTasksChild>)
      }
      
    </div>
  );
};

export default EventTasks;