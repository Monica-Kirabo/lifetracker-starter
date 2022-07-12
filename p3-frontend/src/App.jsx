import { useState } from "react";
//import logo from "./logo.svg";
import "./App.css";
//import Button from "@mui/material/Button";
//import Container from "@mui/material/Container";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
//import {React} from "react"
import Navbar from "./Components/Navbar";
import Home from "./Components/Home"
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Sleep from "./Components/Sleep";
import Exercise from "./Components/Exercise";
import Nutrition from "./Components/Nutrition";
import RecordNutrition from "./Components/RecordNutrition";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <BrowserRouter>
      <Navbar />
      <main>
      <Routes>
     <Route path="/" element={ <Home />}/>
     <Route path="/register" element={ <Signup />}/>
     <Route path="/login" element={ <Login />}/>
     <Route path="/sleep" element={ <Sleep />}/>
     <Route path="/exercise" element={ <Exercise />}/>
     <Route path="/nutrition" element={ <Nutrition />}/>
     <Route path="/Recordnutrition" element={ <RecordNutrition />}/>
        </Routes>

      </main>
    
     
      </BrowserRouter>
    
    
    </div>
  );
}

export default App;
