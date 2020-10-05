import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import EventTasksChild from './EventTasksChild';

const EventTasks = () => {

  const [registrationData, setRegistrationData] = useState([]);
  console.log(registrationData, 'this is your data')
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  console.log(registrationData)

  const [del, setDel] = useState(false);
  useEffect(() => {
    fetch('https://frozen-dawn-85435.herokuapp.com/register?email=' + loggedInUser.email, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
          authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(data => setRegistrationData(data));
         }, [del])

    const handleDelEvent = () => {
      setDel(!del);
    }
  return (
    <div style={{ maxWidth: '1015px', marginLeft: '80px' }}>
      {
        registrationData.map(data => <EventTasksChild key={data._id} handleDelEvent={handleDelEvent} volunteerData={data}></EventTasksChild>)
      }
    </div>
  );
};

export default EventTasks;