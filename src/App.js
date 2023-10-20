import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./componets/SignIn";
import HomePage from "./componets/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
