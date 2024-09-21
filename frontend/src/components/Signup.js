import React, { useState } from 'react';
import axios from 'axios';
import './Auth.css'; // Import the CSS file

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/signup', {
                username,
                email,
                password,
            });
            alert(response.data.message);
        } catch (error) {
            // Check if error.response exists
            if (error.response) {
                // Server responded with a status other than 200 range
                alert(error.response.data.message);
            } else if (error.request) {
                // Request was made but no response received
                alert("No response received from the server.");
            } else {
                // Something happened in setting up the request that triggered an Error
                alert("Error: " + error.message);
            }
        }
    };    

    return (
        <form onSubmit={handleSignup}>
            <h2>Sign Up</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default Signup;
