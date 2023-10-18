import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <header>
        <nav className="navbar bg-primary" >
      <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">
      Home
    </NavLink>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
      >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/Login">
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Home">
            Dashboard
          </NavLink>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
</nav>
    </header>
  );
};

export default Navbar;
