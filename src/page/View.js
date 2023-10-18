// ViewUser.js
import React from "react";
import  {Link }  from "react-router-dom";


const View = () => {
  const users = JSON.parse(localStorage.getItem("user")) || [];

  return (
    <div>
       <div className="container">
      <div className="card">
        <div className="card-body">
        <form>
          
      <h1 className="text-center"> -- View --</h1>
      <div>
      <label>Id : {users.id}</label>
      </div>
      <div>
      <label>Name : {users.name}</label>
      
      </div>
      <div>
      <label>Email : {users.email}</label>
      </div>
      <div>
      <label>Contact : {users.contact}</label>
      </div>
      <div>
      <Link className="btn btn-info"  to="/Home"   >Back</Link>
      </div>
      </form>
      </div>
      </div>
      </div> 
    </div>
  );
};

export default View;
