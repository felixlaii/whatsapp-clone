import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/chatpage" element={<h1>ChatPage</h1>} />

          <Route path="/" element={<h1>HomePage</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
