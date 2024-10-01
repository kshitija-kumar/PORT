import React, { useState } from 'react'; 

const styles = {
    container: {
        height: '100vh', // Full height
        width: '100vw', // Full width
        padding: '60px',
        background: 'linear-gradient(135deg, #000000, #4B0082, #0000FF)', // Gradient background
        textAlign: 'center',
        overflow: 'hidden', // Prevent overflow
    },
    title: {
        color: '#FFFFFF', // White text for better visibility
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
        border: '2px solid #FFFFFF', // White for contrast
        borderRadius: '8px',
        transition: 'border-color 0.3s',
        color: '#FFFFFF', // White text for better visibility
        background: 'rgba(255, 255, 255, 0.1)', 
    },
    textarea: {
        width: '80%',
        maxWidth: '400px',
        padding: '15px',
        margin: '10px 0',
        border: '2px solid #FFFFFF', // White for contrast
        borderRadius: '8px',
        transition: 'border-color 0.3s',
        color: '#FFFFFF', // White text for better visibility
        background: 'rgba(255, 255, 255, 0.1)', 
    },
    button: {
        background: 'linear-gradient(135deg, #0000FF, #4B0082)', // Gradient background for the button
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
