import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from '../hooks/AuthProvider';
import firebase from "../services/firebase";
import { Link } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const auth = useAuth();

    let from = location.state?.from?.pathname || '/'

    const [error, setError] = useState('');
   
    const handleClick = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await auth.signout( ()=>{
                navigate(from, {replace: true});
            })
        } catch (e) {
            console.error(e);
        }
        await auth.signout( ()=>{
            navigate(from, {replace: true});
        })

    };

 return (
     <div>
        <p>Logout</p>
        <div>
            <p>Do you want to log out?</p>
            {error && <p>{error}</p>}
            <Button onClick={handleClick} variant="outlined" type="submit">Logout</Button>
        </div>
     </div>
 )   
}

export default Logout