import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({user}) => {
    return (
        <>
            <div className="col-md-3-card" style={{ width: "18rem", margin: "2px", border: "solid 1px" }} >
                <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{user.age}</h6>
                    <p className="card-text">{user.profession}</p>
                    <p className="card-text">{user.country}</p>
                    <Link to="/user-profile" state={user} className="card-link" style={{ marginRight: "5em" }}>View more</Link>

                </div>
            </div>
        </>
    )
}
export default UserCard