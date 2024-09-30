import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const PortfolioContainer = styled(motion.div)`
    padding: 40px;
    background-color: #D1BB9E; 
    text-align: center;
`;

const ProjectCard = styled.div`
    background-color: #F5E5D2; 
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
            <h2 style={{ color: '#4A3C3C' }}>My Projects</h2>
            {projects.map((project, index) => (
                <ProjectCard key={index}>
                    <h3 style={{ color: '#4A3C3C' }}>{project.title}</h3> 
                    <p style={{ color: '#4A3C3C' }}>{project.description}</p>
                </ProjectCard>
            ))}
        </PortfolioContainer>
    );
}

export default Portfolio;
