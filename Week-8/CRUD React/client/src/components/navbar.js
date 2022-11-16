
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material"
import { useContext, useEffect } from "react"
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom"

function Navbar() {
    let navigate = useNavigate();
    const { user, logout } = useContext(AuthContext)
    useEffect(() => {

        console.log(user)
    }, [])
    const onLogout = () => {
        logout();
        navigate("/");
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" component="div">
                        <Link to="/" style={{ textDescription: "none", color: "white" }}>ReactLogin</Link>
                    </Typography>
                    <Box alignItems="right" sx={{ flexGrow: 1, textAlign: "right" }}>
                        {user ?
                            <>
                                <Button style={{ textDescription: "none", color: "white" }} onClick={onLogout}>Logout</Button>
                            </>
                            :
                            <>
                                <Link to="/login" style={{ textDescription: "none", color: "white", marginRight: "10px" }}>Login</Link>
                                <Link to="/register" style={{ textDescription: "none", color: "white" }}>Register</Link>
                            </>
                        }
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar;