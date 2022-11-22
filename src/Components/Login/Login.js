import React from "react";
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
        navigate("/");
        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));
        db.collection("user").doc(result.user.email).set(newUser);
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <div className="login-container">
        <img className="login-logo" src="./whatsapp-logo.png" alt="" />
        <p className="login-name">WhatsApp Web</p>
      </div>
    </div>
  );
}

export default Login;
