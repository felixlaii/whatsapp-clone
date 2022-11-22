import React from "react";
import { useNavigate } from "react-router-dom";

function UserProfile({ name, photoURL, email, lastMessage }) {
  const navigate = useNavigate();
  const goToUser = (emailId) => {
    if (emailId) {
      navigate(`/${emailId}`);
    }
  };
  return (
    <div className="user-profile" onClick={() => goToUser(email)}>
      
  </div>
    );
}

export default UserProfile;
