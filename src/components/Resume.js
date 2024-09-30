import React from 'react';
import styled from 'styled-components';

const ResumeContainer = styled.div`
    padding: 40px;
    background-color: #D1BB9E; 
    text-align: center;
`;

const DownloadButton = styled.a`
    display: inline-block;
    margin-top: 20px;
    padding: 15px 30px; 
    background-color: #A79277; 
    color: #FFFFFF; 
    border-radius: 10px; 
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
        background-color: #D1BB9E; 
        transform: scale(1.05); 
    }
`;

function Resume() {
    return (
        <ResumeContainer>
            <h2 style={{ color: '#4A3C3C' }}>Download My Resume</h2> 
            <p style={{ color: '#4A3C3C' }}>You can download my resume by clicking the button below:</p>

            <DownloadButton href="/resume.pdf" download>
                Download Resume
            </DownloadButton>
        </ResumeContainer>
    );
}

export default Resume;
