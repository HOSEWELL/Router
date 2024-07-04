import React from "react";
import NavBar from "./Navbar";
import { useLocation } from "react-router-dom";


const UserProfile=()=>{
    const location = useLocation()
    const user = location.state;
    console.log(location.state);
    return(
        <>
        <NavBar/>
        <div className="user-profilecard">
            <h1>{user.name} </h1>
            <h2>{user.profession}</h2>
            <h5>{user.age} years</h5>
            <h2>{user.country}</h2>
        </div>
        
        </>
    )
}
export default UserProfile;