import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './About.css'; 

const skills = [
    "Java", "C", "Python", "HTML", "CSS", "JavaScript", "ReactJS", "SQL", "R"
];

const SkillItem = motion.div;

function About() {
    return (
        <div className="AboutContainer" style={{ height: '100vh', width: '100vw' }}>
            <h2 style={{ margin: '0' }}>About Me</h2>
            <h3 style={{ margin: '0' }}>My Skills</h3>
            <div className="SkillsList">
                {skills.map((skill, index) => (
                    <SkillItem key={index} initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} className="SkillItem">
                        {skill}
                    </SkillItem>
                ))}
            </div>

            <h3 style={{ margin: '0' }}>My Certificates</h3>
            <div className="CertificateButtons">
                <Link to="/certificates/academic" className="DownloadButton">
                    View Academic Certificates
                </Link>
                <Link to="/certificates/non-academic" className="DownloadButton">
                    View Non-Academic Certificates
                </Link>
            </div>
        </div>
    );
}

export default About;
