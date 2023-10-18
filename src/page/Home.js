import React from "react";
import {Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const users = JSON.parse(localStorage.getItem("user")) || [];

  
  const handleView = () => {
    // Navigate to the View page (adjust the path as needed)
    navigate("/view");
  };

  const handleEdit = () => {
    // Navigate to the Edit page (adjust the path as needed)
    navigate("/Edit");
  };

  const handleDelete = () => {
    localStorage.removeItem("user");
    navigate("/Home");

    
  };

  
  const buttonStyles = {
    marginRight: "4px", // Adjust the margin as needed
    padding: "6px 12px", // Adjust the padding as needed
  };

  return (
    <div>
      <div className="container row-12">
      
        <div className="card col">
          <div className="card-body">
            <h1 className="text-center"> Dashboard</h1>
            <div className="add_btn mt-2 mb-2">
            <Link className="btn btn-primary" to="/" > Add Data +</Link>
            </div>
            <div className="table-responsive">
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{users.id}</td>
                    <td>{users.name}</td>
                    <td>{users.email}</td>
                    <td>{users.contact}</td>
                    <td>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <button
                          style={buttonStyles}
                          className="btn btn-warning"
                          onClick={handleEdit}
                        >
                          Edit
                        </button>
                        <button
                          style={buttonStyles}
                          
                          className="btn btn-success"
                          onClick={handleView}
                        >
                          View
                        </button>
                        <button style={buttonStyles} onClick={handleDelete} className="btn btn-danger">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
           

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
