import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Container = styled(motion.div)`
    display: flex;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #000000, #4B0082, #0000FF); /* Gradient from black to indigo to blue */
    padding: 0 20px;
`;

const TextContainer = styled.div`
    flex: 1;
    text-align: left;
    z-index: 1;
`;

const Title = styled.h1`
    color: #FFFFFF; /* White title */
    margin-bottom: 20px;
    font-size: 3rem;
`;

const Description = styled.p`
    color: #FAF7F0; /* Light text color */
    margin-bottom: 30px;
    font-size: 1.5rem;
`;

const DownloadButton = styled.a`
    background-color: #0000FF; /* Blue button */
    color: #FFFFFF;
    padding: 15px 30px;
    border-radius: 10px;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    transition: background-color 0.3s, transform 0.3s;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #4B0082; /* Indigo on hover */
        transform: scale(1.05);
    }
`;

const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`;

const BackgroundImage = styled.img`
    width: 75%; 
`;

function Home() {
    return (
        <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <TextContainer>
                <Title>Welcome to My Portfolio</Title>
                <Description>I am a passionate developer specializing in AI and web development.</Description>
                <DownloadButton href="/resume.pdf" download>
                    Download My Resume
                </DownloadButton>
            </TextContainer>
            {/* <ImageContainer>
                <BackgroundImage src="/my_photo.jpeg" alt="My Photo" />
            </ImageContainer> */}
        </Container>
    );
}

export default Home;
