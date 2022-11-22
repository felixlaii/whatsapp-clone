import React from 'react'
import db, { auth, googleProvider } from "../../firebase";
import { useNavigate } from "react-router-dom";
import "./login.scss";

function Login({ setUser }) {
    const navigate = useNavigate();
  return (
    <div>Login</div>
  )
}

export default Login