import React from 'react';
import './Home.css';
import data from "../data.json";
import { Button, Form, FormControl } from 'react-bootstrap'
import HomeInfo from './HomeInfo';

const Home = () => {
    return (
        <div className="home_container">
            <h1>I GROW BY HELPING PEOPLE IN NEED</h1>
            <Form inline>
                <FormControl style={{width:'400px'}} type="text" placeholder="Search" className=" mr-sm-2" />
                <Button type="submit">Submit</Button>
            </Form>
           <div className='container'>
            {
              data.map(data => <HomeInfo key={data.id} data={data}></HomeInfo>)
            }
           </div>
        </div>
    );
};

export default Home;