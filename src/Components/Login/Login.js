import React from 'react'
import db, { auth, googleProvider } from "../../firebase";
import { useNavigate } from "react-router-dom";
import "./login.scss";

function Login({ setUser }) {
    const navigate = useNavigate();
    const signInWithGoogle = () => {
        auth
        .signInWithPopup(googleProvider)
        .then((result) => {
            const newUser = {
                fullname: result.user.displayName,
                email: result.user.email,
                photoURL: result.user.photoURL,
            };
        })
    }
  return (
    <div>Login</div>
  )
}

export default Login