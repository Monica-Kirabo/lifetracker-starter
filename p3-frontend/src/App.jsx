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
import Activity from "./Components/Activity";
//import { AddSleep } from "./Components/AddSleep";
import AddExercise from "./Components/AddExercise";
function App() {
  const [count, setCount] = useState(0);
  const [appState, setAppState] = useState({})
  return (
    <div className="app">
      <BrowserRouter>
      <Navbar />
      <main>
      <Routes>
     <Route path="/" element={ <Home />}/>
     <Route path="/register" element={ <Signup setAppState={setAppState} />}/>
     <Route path="/login" element={ <Login setAppState={setAppState} />}/>
     <Route path="/sleep" element={ <Sleep />}/>
     <Route path="/exercise" element={ <Exercise />}/>
     <Route path="/nutrition" element={ <Nutrition />}/>
     <Route path="/Recordnutrition" element={ <RecordNutrition />}/>
     <Route path="/Activity" element={ <Activity />}/>
     <Route path="/AddExercise" element={ <AddExercise />}/>
     {/* <Route path="/Addsleep" element={ <AddSleep />}/> */}
        </Routes>

      </main>
    
     
      </BrowserRouter>
    
    
    </div>
  );
}

export default App;
