import * as React from "react"
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
  const [sessionId, setSessionId] = useState(null);
  
  return (
    <div className="app">
      <BrowserRouter>
      <Navbar />
      <main>
      <Routes>
     <Route path="/" element={ <Home />}/>
     <Route path="/register" element={ <Signup setAppState={setAppState} sessionId={sessionId} setSessionId={setSessionId}/>}/>
     <Route path="/login" element={ <Login appState={appState} setAppState={setAppState} sessionId={sessionId} setSessionId={setSessionId}/>}/>
     <Route path="/sleep" element={ <Sleep appState={appState}/>}/>
     <Route path="/exercise" element={ <Exercise appState={appState}/>}/>
     <Route path="/nutrition" element={ <Nutrition appState={appState} sessionId={sessionId}/>}/>
     <Route path="/Recordnutrition" element={ <RecordNutrition  appState={appState} sessionId={sessionId}/>}/>
     <Route path="/Activity" element={ <Activity setSessionId={setSessionId}  appState={appState} setAppState={setAppState} sessionId={sessionId}/>}/>
     <Route path="/AddExercise" element={ <AddExercise appState={appState}/>}/>
     {/* <Route path="/Addsleep" element={ <AddSleep />}/> */}
        </Routes>

      </main>
    
     
      </BrowserRouter>
    
    
    </div>
  );
}

export default App;
