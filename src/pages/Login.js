import { Button, TextField } from "@mui/material";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from '../hooks/AuthProvider';
import firebase from "../services/firebase";
import { Link } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const auth = useAuth();

    let from = location.state?.from?.pathname || '/'

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
        setError('');
        try {
            await auth.signin({email, password}, ()=>{
                navigate(from, {replace: true});
            })
        } catch (e) {
            console.error(e);
        }
        await auth.signin({email, password}, ()=>{
            navigate(from, {replace: true});
        })

    };

 return (
     <div>
         <form onSubmit={handleSubmit}>
        <p>Login</p>
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
            <Button variant="outlined" type="submit">Login</Button>
        </div>
    <p> Do not have an account? <Link to="/registration">Register</Link></p>
</form>
     </div>
 )   
}

export default Login