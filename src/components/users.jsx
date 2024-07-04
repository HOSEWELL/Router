import React from "react";
import NavBar from "./Navbar";
import { Link } from "react-router-dom";
import UserCard from "./usercard";

const User = () => {
    const users = [
        {
            name: "Dan",
            age: 56,
            profession: "Driver",
            country: "Kenya"
        },
        {
            name: "Mark",
            age: 40,
            profession: "SE",
            country: "Uganda"
        },
        {
            name: "Alvin",
            age: 32,
            profession: "Lawyer",
            country: "Tanzania"
        },
        {
            name: "Hellen",
            age: 20,
            profession: "Cabin crew",
            country: "Rwanda"
        }

    ]
    return (

        <>
            <NavBar />
            <h1>Users</h1>

            <div className="row justify-content-around">
                {
                    users.map((user, index) => {
                        return (
                          <UserCard user={user}/>
                        )
                    })
                }
            </div>

        </>
    )
}
export default User