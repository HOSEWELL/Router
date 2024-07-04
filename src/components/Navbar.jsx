import React from "react";

import { Link } from "react-router-dom";

const NavBar = ()=>{
    return(
        <>
    <nav className="navbar bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
        <a className="navbar-brand">Router 📶 🛜 
</a>
     
        <form className="d-flex" role="search">

        <Link to="/Home" className="nav-brand">Home</Link>
        <Link to="/Profile" className="nav-brand">Profile</Link>
        <Link to="/Settings" className="nav-brand">Settings</Link>
        
        <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit" style={{color:'white',border:'1px solid'}}>
              Search
            </button>

         </form>
        </div>
    </nav>
        </>
    )
}
export default NavBar;