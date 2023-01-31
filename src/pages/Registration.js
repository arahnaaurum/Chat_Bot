import { Button, TextField } from "@mui/material";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from '../hooks/AuthProvider';
import firebase from "../services/firebase";
import { Link } from "react-router-dom";

const Registration = () => {

    const [email, setEmail] = useState ('') ;
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const auth = getAuth(firebase);
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            setError(error.message);
        }
};

 return (
     <div>
         <form onSubmit={handleSubmit}>
        <p>Fill in the form below to register new account.</p>
        <div>
            <TextField
                placeholder="Email"
                name="email"
                type="email"
                onChange={handleEmail}
                value={email}
            />
        </div>
        <br />
        <div>
            <TextField
                placeholder="Password"
                name="password"
                onChange={handlePassword}
                value={password}
                type="password"
            />
        </div>
        <br />
        <div>
            {error && <p>{error}</p>}
            <Button variant="outlined" type="submit">Register</Button>
        </div>
    <p>
        Already have an account? <Link to="/login">Sign in</Link>
    </p>
</form>
     </div>
 )   
}

export default Registration