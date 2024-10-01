import React from 'react'; 
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
    background: linear-gradient(135deg, #C2C2E8, #E3E3E3); 
    color: #6a11cb; 
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

    @media (max-width: 768px) {
        flex-direction: column; 
        align-items: center; 
    }
`;

const NavLink = styled(Link)`
    color: #6a11cb; 
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2rem; 
    position: relative; 
    transition: color 0.3s;

    &:hover {
        color: #6a11cb; 
    }

    &:after {
        content: '';
        display: block;
        height: 2px; 
        background: #6a11cb; 
        width: 0; 
        transition: width 0.3s; 
        position: absolute; 
        left: 50%; 
        bottom: -5px; 
    }

    &:hover:after {
        width: 100%; 
        left: 0; 
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
