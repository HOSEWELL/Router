import React from "react";
import NavBar from "./Navbar";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Profile=()=>{
    const profiles = ["Ian", "Clinton", "Amira", "Hosewell"]
    const params = useParams()
    console.log(params);
    return(
        <>
        <NavBar/>
            <div className="row">
                <div className="col-md-5">
                    {
                        profiles.map((profiles, index)=>{
                            return(
                                <h1>
                                    <Link to={"/profile/"+profiles}>{profiles}</Link>
                                </h1>
                            )
                        })
                    }
                </div>
                <div className="col-md-6">
                    <h1>Profile : {params.profileId}</h1>
                </div>
            </div>
        </>
    )
}
export default Profile;