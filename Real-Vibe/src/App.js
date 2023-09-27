import Game from "./components/Game";
import Home from "./components/Home"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React from "react";


function App() {


  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </Router>
    );
}

export default App;
