import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const PortfolioContainer = styled(motion.div)`
    height: 100vh; /* Full height */
    width: 100vw; /* Full width */
    padding: 40px;
    background: linear-gradient(135deg, #000000, #4B0082, #0000FF); /* Gradient from black to indigo to blue */
    text-align: center;
    overflow: hidden; /* Prevent overflow */
`;

const ProjectCard = styled.div`
    background-color: rgba(255, 255, 255, 0.2); /* Semi-transparent white for contrast */
    border: 1px solid #E4E4E4;
    border-radius: 8px;
    padding: 20px;
    margin: 20px auto;
    width: 300px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const projects = [
    { title: 'Project 1', description: 'Description of project 1' },
    { title: 'Project 2', description: 'Description of project 2' },
    { title: 'Project 3', description: 'Description of project 3' },
];

const slideIn = {
    hidden: { x: '-100vw' },
    visible: { x: 0, transition: { type: 'spring', stiffness: 50 } }
};

function Portfolio() {
    return (
        <PortfolioContainer
            initial="hidden"
            animate="visible"
            variants={slideIn}
        >
            <h2 style={{ color: '#FFFFFF' }}>My Projects</h2> {/* White text for better visibility */}
            {projects.map((project, index) => (
                <ProjectCard key={index}>
                    <h3 style={{ color: '#FFFFFF' }}>{project.title}</h3> {/* White text for project titles */}
                    <p style={{ color: '#FFFFFF' }}>{project.description}</p> {/* White text for project descriptions */}
                </ProjectCard>
            ))}
        </PortfolioContainer>
    );
}

export default Portfolio;
