import React, { useContext,  useState } from 'react';
import './Register.css'
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import { useHistory, useParams } from 'react-router-dom';
import data from "../data.json"
// import Button from 'react-bootstrap/Button'
// import Link from '@material-ui/core/Link';
// import EventTasks from '../EventTasks/EventTasks';

// import { Button } from "react-Bootstrap"
// import 'date-fns';
// import Grid from '@material-ui/core/Grid';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';

const Register = () => {

  // const [selectedDate, setSelectedDate] = useState({
  //     date: new Date(),
  // });

  // const handleDateChange = e => {
  //     console.log('date')
  // }

  // const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));

  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  // };




  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  // const [tasks, setTasks] = useState({
  //   title:''
  // })
  const [registration, setRegistration] = useState({
    date: '',
    description: '',
    // title:''
  });
  const { id } = useParams();

  const userData = data.find(data => data.id == id);
  // setTasks(userData.title);
  // console.log(userData,'user data register')

  const { register, handleSubmit, watch, errors } = useForm();
  const history = useHistory()
    const onSubmit = () => {
      history.push('/eventTasks')
      // const userTitle = {...tasks}
      const newRegistration = { ...loggedInUser, ...registration,};
      // const newId = (userTitle,newRegistration)
        fetch('http://localhost:3200/addRegister', {
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
          <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Full Name" />
          <br />
          {errors.name && <span className="error">Full Name required</span>}
          <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Username or Email" />
          <br />
          {errors.email && <span className="error">Email is required</span>}
          <input name="date" onBlur={handleInput} ref={register({ required: true })} placeholder="date" />
          <br />
          {errors.date && <span className="error">date is required</span>}
          <input type="text" name="description" onBlur={handleInput} ref={register({ required: true })} placeholder="description" />
          <br />
          {errors.description && <span className="error">description is required</span>}
          <input name="organize" defaultValue={userData.title} ref={register({ required: true })} placeholder="organize books at the library" />
          {errors.organize && <span className="error">organize books at the library is required</span>}
          <br />
          <input className="registerBtn" type="submit" value="Registration" />
        </form>








        {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                    <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="check Out Date"
                            format="dd/MM/yyyy"
                            value={selectedDate.date}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </Grid>
                </MuiPickersUtilsProvider> */}
        {/* <div>
                          
<MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
                      </div> */}


  {/* <EventTasks></EventTasks> */}
      </div>
    </div>
  );
};

export default Register;