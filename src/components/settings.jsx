import React from "react";
import NavBar from "./Navbar";
import { useParams } from "react-router-dom";

const Settings=()=>{
    const param = useParams ()
    console.log(param);
    return(
        <>
        <NavBar/>
        <h1 className="display-6">Settings Page {param.SettingsId}</h1>
        </>
    )
}
export default Settings;