import React, { useContext, useEffect, useState } from 'react';
import './Register.css'
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import { useHistory, useParams } from 'react-router-dom';
import data from "../data.json"

const Register = () => {

  const { loggedInUser, setLoggedInUser, usersData, setUsersData } = useContext(UserContext)
  console.log(usersData);
  const [registration, setRegistration] = useState({
    date: '',
    description: '',
  });

  const { id } = useParams();

  useEffect(() => {
    const userData = data.find(data => data.id == id);
    const titleId = userData.title;
    console.log(titleId)
    const title = {
      tasks: titleId,
    }
    setUsersData(title);
  }, [])

  const { register, handleSubmit, watch, errors } = useForm();
  const history = useHistory()
  const onSubmit = () => {
    history.push('/eventTasks')
    const newRegistration = { ...loggedInUser, ...registration, ...usersData };
    fetch('https://frozen-dawn-85435.herokuapp.com/addRegister', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(newRegistration)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data, 'rakib khan');
      })
  }



  //handle Input Field--------------------
  const handleInput = e => {
    let isDescriptionValid = true;
    if (e.target.name === 'description') {
      isDescriptionValid = e.target.value.length > 4;
    }
    if (e.target.name === 'date') {
      isDescriptionValid = e.target.value.length > 4;
    }
    if (isDescriptionValid) {
      const newUserInfo = { ...registration };
      newUserInfo[e.target.name] = e.target.value;
      setRegistration(newUserInfo);

    }
  }

  return (
    <div className="register_container">
      <div className='input_container'>
        <form className='register_form' onSubmit={handleSubmit(onSubmit)}>
          {/* <h1>title:{usersData.title}</h1> */}
          <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Full Name" />
          <br />
          {errors.name && <span className="error">Full Name required</span>}
          <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Username or Email" />
          <br />
          {errors.email && <span className="error">Email is required</span>}
          <input type="date" name="date" onBlur={handleInput} ref={register({ required: true })} placeholder="date" />
          <br />
          {errors.date && <span className="error">date is required</span>}
          <input type="text" name="description" onBlur={handleInput} ref={register({ required: true })} placeholder="description" />
          <br />
          {errors.description && <span className="error">description is required</span>}
          <input name="organize" defaultValue={usersData.tasks} ref={register({ required: true })} placeholder="organize books at the library" />
          {errors.organize && <span className="error">organize books at the library is required</span>}
          <br />
          <input className="registerBtn" type="submit" value="Registration" />
        </form>
      </div>
    </div>
  );
};

export default Register;