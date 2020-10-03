import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
import logo from '../images/logos/Group 1329.png'

const Header = () => {

    return (
        <div>
            <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home"><img src={logo} alt=""/></Navbar.Brand>
                <Nav className="ml-auto" >
                    <NavLink className="NavLink" to="/home">Home</NavLink>
                    <NavLink className="NavLink" to="/donation">donation</NavLink>
                    <NavLink className="NavLink" to="/events">events</NavLink>
                    <NavLink className="NavLink" to="/blog">Blog</NavLink>
                    <NavLink className="NavLink" to="/register">register</NavLink>
                    <NavLink className="NavLink" variant="primary" to="/admin">Admin</NavLink>
                </Nav>
            </Navbar>

        </div>
    );
};

export default Header;