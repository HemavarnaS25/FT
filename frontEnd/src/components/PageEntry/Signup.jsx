import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Signup.css";

const Signup = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      console.log("Event Trigger");
      const req = await axios.post("https://ft-8dbj.onrender.com/signup", {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
      });
      console.log(req);
      alert(req.data);
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
          <label htmlFor="firstname">First Name:</label>
          <input 
            type="text" 
            id="firstname" 
            name="firstname" 
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required 
          />
          <label htmlFor="lastname">Last Name:</label>
          <input 
            type="text" 
            id="lastname" 
            name="lastname" 
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required 
          />
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          <button type="submit">Signup</button>
        </form>
        <p className='signup-link'>
          
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
