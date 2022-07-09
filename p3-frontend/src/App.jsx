import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home"
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Navbar />
      <Home />
    
    </div>
  );
}

export default App;
