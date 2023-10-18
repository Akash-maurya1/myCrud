import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {

  const navigator=useNavigate();

    const [input, setInput] =useState({
        email: "",
        password: "",
    })

    const handleLogin= (e) =>{
        e.preventDefault();
        const loggeduser=JSON.parse(localStorage.getItem("user"));

        if(input.email === loggeduser.email && input.password === loggeduser.password)
        {
          localStorage.setItem("loggeduser", true);
        navigator("/Home");
       }
       else{
        alert("Wrong Email or password");
       }
      };

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <form  onSubmit={handleLogin} className="register-form">
            <h2>Login</h2>

            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                value={input.email}  
                onChange={(e) => setInput({...input, [e.target.name]: e.target.value})} 
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={input.password}  
                onChange={(e) => setInput({...input, [e.target.name]: e.target.value})} 
                
                placeholder="Enter your password"
                required
              />
            </div>
            <div>
              <button type="submit" className="register-button">
                Login
              </button>
            </div>
          </form>
          <p>
            Don't have an account? <Link to="/">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
