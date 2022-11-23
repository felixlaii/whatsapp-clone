import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";

import ChatPage from "./Components/ChatPage";
import { useState } from "react";
import Login from "./Components/Login";
import db, { auth } from "./firebase";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        setUser(null);
        localStorage.removeItem("user");
      })
      .catch((err) => alert(err.message));
  };
  return (
    <Router>
      <div className="App">
        {user ? (
          <Routes>
            <Route
            path="/:emailID"
            element={<ChatPage currentUser={user} signOut={signOut} />}
            />
            
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
