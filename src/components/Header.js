import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
    background-color: #A79277; 
    color: #FFFFFF; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px; 
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); 
`;

const Logo = styled.h1`
    font-size: 2.5rem; 
    margin: 0; 
`;

const NavLinks = styled.div`
    display: flex;
    gap: 25px; 
`;

const NavLink = styled(Link)`
    color: #FFFFFF; /* White text for links */
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2rem; /* Increased font size for links */
    position: relative; /* For hover effect */
    transition: color 0.3s;

    &:hover {
        color: #D1BB9E; /* Soft beige on hover */
    }

    &:after {
        content: '';
        display: block;
        height: 2px; /* Height of underline */
        background: #D1BB9E; /* Soft beige underline color */
        width: 0; /* Initial width */
        transition: width 0.3s; /* Smooth transition */
        position: absolute; /* Positioning for underline */
        left: 50%; /* Center the underline */
        bottom: -5px; /* Position it below the text */
        transform: translateX(-50%); /* Center adjustment */
    }

    &:hover:after {
        width: 100%; /* Full width on hover */
    }
`;

function Header() {
    return (
        <Navbar>
            <Logo>KSHITIJA K</Logo>
            <NavLinks>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </NavLinks>
        </Navbar>
    );
}

export default Header;
