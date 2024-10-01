import React from 'react'; 
import styled from 'styled-components';

const FooterContainer = styled.footer`
    background: linear-gradient(135deg, #C2C2E8, #E3E3E3); 
    color: #4A3C3C; 
    text-align: center;
    padding: 20px;
    position: relative;
    bottom: 0;
    width: 100%;
    border-top: 1px solid #4A3C3C; 
`;

function Footer() {
    return (
        <FooterContainer>
        </FooterContainer>
    );
}

export default Footer;
