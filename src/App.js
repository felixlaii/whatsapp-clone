import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/chatpage" element={<h1>ChatPage</h1>} />

          element={<Home currentUser={user} signOut={signOut} />}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
