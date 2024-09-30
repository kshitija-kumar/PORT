import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    background-color: #D1BB9E; /* Soft beige */
    color: #4A3C3C; /* Dark chocolate text color */
    text-align: center;
    padding: 20px;
    position: relative;
    bottom: 0;
    width: 100%;
    border-top: 1px solid #AD8C7D; /* Muted taupe border */
`;

function Footer() {
    return <FooterContainer>© 2024 My Portfolio. All rights reserved.</FooterContainer>;
}

export default Footer;
