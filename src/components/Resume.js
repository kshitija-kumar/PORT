import React from 'react';
import styled from 'styled-components';

const ResumeContainer = styled.div`
    padding: 40px;
    background: linear-gradient(135deg, #000000, #4B0082, #0000FF); /* Black to Indigo to Blue */
    text-align: center;
`;

const DownloadButton = styled.a`
    display: inline-block;
    margin-top: 20px;
    padding: 15px 30px; 
    background-color: #0000FF; /* Blue background */
    color: #FFFFFF; 
    border-radius: 10px; 
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
        background-color: #4B0082; /* Indigo on hover */
        transform: scale(1.05); 
    }
`;

function Resume() {
    return (
        <ResumeContainer>
            <h2 style={{ color: '#FFFFFF' }}>Download My Resume</h2> {/* White title */}
            <p style={{ color: '#FFFFFF' }}>You can download my resume by clicking the button below:</p> {/* White text */}

            <DownloadButton href="/resume.pdf" download>
                Download Resume
            </DownloadButton>
        </ResumeContainer>
    );
}

export default Resume;
