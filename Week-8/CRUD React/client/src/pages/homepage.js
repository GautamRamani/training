import {useContext} from "react"
// import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

function Homepage(){
    const {user}=useContext(AuthContext)
    return (
        <>
            <h1>Homepage</h1>
            {
                user?
                <>
                    <h2>{user.email} is logged in </h2>
                </>
                :
                <>
                    <p>There is no user data</p>
                </>

            }
        </>
    )
}

export default Homepage;