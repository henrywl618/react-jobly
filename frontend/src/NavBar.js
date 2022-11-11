import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Container, Navbar, Nav, NavItem, } from 'reactstrap';
import "./NavBar.css";

const NavBar = () => {
    return (
        <Container>
            <Navbar expand="md">
                <NavLink exact to="/" className="navbar-brand">Jobly</NavLink>
                <Nav navbar>
                    <NavItem>
                        <NavLink exact to="/companies">Companies</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to="/jobs">Jobs</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to="/profile">Profile</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to="/login">Login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to="/signup">Sign Up</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </Container>

    )
};

export default NavBar;