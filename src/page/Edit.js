import React, { useState } from "react";
// import "./Style.css";
import {  useNavigate } from "react-router-dom";
const Edit = () => {
 
    const navigator=useNavigate();

    const [input, setInput] =useState({
        name: "",
        contact:"",
        email: "",
        password: "",
    });
   
    const handleSubmit =(e) =>{
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(input));
        navigator("/Home");
    };

  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <h2>--Edit--</h2>

              <div>
                <label>Name:</label>
                <input type="text" name="name" 
                value={input.name}  
                onChange={(e) => setInput({...input, [e.target.name]: e.target.value})}
                required />
                
              </div>
              <div>
                <label>Contact:</label>
                <input type="tel" name="contact" 
                value={input.contact}  
                onChange={(e) => setInput({...input, [e.target.name]: e.target.value})}
                required />
              
              </div>
              <div>
                <label>Email:</label>
                <input type="email" 
                name="email" 
                value={input.email}  
                onChange={(e) => setInput({...input, [e.target.name]: e.target.value})} 
                required/>
                
              </div>
              <div>
                <label>Password:</label>
                <input type="password" name="password" 
                value={input.password}  
                onChange={(e) => setInput({...input, [e.target.name]: e.target.value})}
                required/>
                
              </div>
              <div>
                <button type="submit">Save</button>
              </div>
            </form>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
