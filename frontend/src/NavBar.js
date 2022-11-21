import { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Container, Navbar, Nav, NavItem, } from 'reactstrap';
import "./NavBar.css";
import { UserContext } from './Context';

const NavBar = ({ logout }) => {
    const { user } = useContext(UserContext);
    return (
        <Container>
            <Navbar expand="md">
                <NavLink exact to="/" className="navbar-brand">Jobly</NavLink>
                <Nav navbar>
                    {
                        user ?
                        <>
                            <NavItem>
                                <NavLink exact to="/companies">Companies</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink exact to="/jobs">Jobs</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink exact to="/profile">{user}</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink exact to="/" onClick={logout}>Logout</NavLink>
                            </NavItem>
                        </>
                        :
                        <>
                            <NavItem>
                                <NavLink exact to="/login">Login</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink exact to="/signup">Sign Up</NavLink>
                            </NavItem>                        
                        </>
                    }
                </Nav>
            </Navbar>
        </Container>

    )
};

export default NavBar;