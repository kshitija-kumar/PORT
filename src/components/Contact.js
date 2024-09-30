import React, { useState } from 'react';

const styles = {
    container: {
        padding: '60px',
        backgroundColor: '#D1BB9E', 
        textAlign: 'center',
    },
    title: {
        color: '#4A3C3C', 
        marginBottom: '40px',
        fontSize: '2.5rem', 
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    input: {
        width: '80%', 
        maxWidth: '400px', 
        padding: '15px',
        margin: '10px 0',
        border: '2px solid #AD8C7D', 
        borderRadius: '8px',
        transition: 'border-color 0.3s',
        color: '#4A3C3C', 
        backgroundColor: '#F5E5D2', 
    },
    textarea: {
        width: '80%',
        maxWidth: '400px',
        padding: '15px',
        margin: '10px 0',
        border: '2px solid #AD8C7D', 
        borderRadius: '8px',
        transition: 'border-color 0.3s',
        color: '#4A3C3C', 
        backgroundColor: '#F5E5D2', 
    },
    button: {
        backgroundColor: '#A79277', 
        color: '#FFFFFF',
        padding: '15px 30px',
        border: 'none',
        borderRadius: '8px',
        fontSize: '18px',
        marginTop: '10px',
        transition: 'background-color 0.3s, transform 0.3s',
        cursor: 'pointer',
    },
};

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const contactInfo = {
            name,
            email,
            message,
        };

        console.log(contactInfo);
        alert('Your message has been sent!'); 
        
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Get in Touch</h2>
            <form style={styles.form} onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Your Name" 
                    style={styles.input} 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required 
                />
                <input 
                    type="email" 
                    placeholder="Your Email" 
                    style={styles.input} 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                />
                <textarea 
                    placeholder="Your Message" 
                    style={styles.textarea}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required 
                ></textarea>
                <button type="submit" style={styles.button}>Send Message</button>
            </form>
        </div>
    );
}

export default Contact;
