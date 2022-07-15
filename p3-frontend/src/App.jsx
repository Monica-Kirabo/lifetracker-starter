
import * as React from "react"
import { useState,useEffect } from "react";
//import logo from "./logo.svg";
import "./App.css";
//import Button from "@mui/material/Button";
//import Container from "@mui/material/Container";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
//import {React} from "react"
//import { AuthContextProvider, useAuthContext } from "./context/auth";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home"
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Sleep from "./Components/Sleep";
import Exercise from "./Components/ExerciseCard";
import Nutrition from "./Components/Nutrition";
import RecordNutrition from "./Components/RecordNutrition";
import Activity from "./Components/Activity";
import ExercisePage from "./Components/ExercisePage";
import LoginPage from "./Components/LoginPage";
import SignUpPage from "./Components/SignUpPage";
//import { AddSleep } from "./Components/AddSleep";
import AddExercise from "./Components/AddExercise";
import apiClient from "./services/apiClient";
import ActivityPage from "./Components/ActivityPage";
function App() {
  const [count, setCount] = useState(0);
  const [appState, setAppState] = useState({})
  const [sessionId, setSessionId] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [ user, setUser ] = useState("hi monica");
  const [isFetching, setIsFetching] = useState(false);
  const [isFetchingExercise, setIsFetchingExercise] = useState(false);
  const [isFetchingSleep, setIsFetchingSleep] = useState(false);
  const [isFetchingActivity, setIsFetchingActivity] = useState(false);
  const [activity, setActivity] = useState([]);
  const [sleep, setSleep] = useState([]);
  const [exercise, setExercise] = useState([]);
  const [nutrition, setNutrition] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await apiClient.fetchUserFromToken();
      if (data) {
        setUser(data.user);
      }
      if (error) {
        setError(error);
      }
    };

    const token = localStorage.getItem("lifetracker_token");
    if (token) {
      apiClient.setToken(token);
      fetchUser();
    }
  }, [setUser]);

  const addNutrition = (newNutrition) => {
    setNutrition((oldNutrition) => [newNutrition, ...oldNutrition]);
  };

  const addExercise = (newExercise) => {
    setExercise((oldExercise) => [newExercise, ...oldExercise]);
  };

  const addSleep = (newSleep) => {
    setSleep((oldSleep) => [newSleep, ...oldSleep]);
  };

  const handleLogout = async () => {
    await apiClient.logoutUser();
    setUser({});
    setError(null);
  };
  const handleNutritonForm = async () => {
    const fetchActivites = async () => {
      setIsFetchingActivity(true);

      const { data, error } = await apiClient.listActivities();
      if (data) {
        setActivity(data.activities);
      }
      if (error) {
        setError(error);
      }
      setIsFetchingActivity(false);
    };

    fetchActivites();
  };
  return (
    <div className="app">
      <BrowserRouter>
      <Navbar   handleLogout={handleLogout}
              isLogin={isLogin}
              user={user}
              setUser={setUser}/>
      <main>
      <Routes>
     <Route path="/" element={ <Home />}/>
     {/* <Route path="/register" element={ <Signup setAppState={setAppState} sessionId={sessionId} setSessionId={setSessionId}/>}/> */}
     {/* <Route path="/login" element={ <Login appState={appState} setAppState={setAppState} sessionId={sessionId} setSessionId={setSessionId}/>}/> */}
     <Route path="/sleep" element={ <Sleep appState={appState}/>}/>
     {/* <Route path="/exercise" element={ <Exercise appState={appState}/>}/> */}
     <Route path="/nutrition" element={ <Nutrition appState={appState} sessionId={sessionId}/>}/>
     <Route path="/Recordnutrition" element={ <RecordNutrition  appState={appState} sessionId={sessionId}/>}/>
     <Route path="/activity" element={ <ActivityPage  activity={activity}
                    isLogin={isLogin}
                    user={user}
                    setUser={setUser}/>}/>
     <Route path="/AddExercise" element={ <AddExercise appState={appState}/>}/>
     <Route
                path="/login"
                element={
                  <LoginPage
                    isLogin={isLogin}
                    user={user}
                    setUser={setUser}
                  ></LoginPage>
                }
              ></Route>
                 <Route
                path="/register"
                element={
                  <SignUpPage
                    user={user}
                    setUser={setUser}
                    isLogin={isLogin}
                  ></SignUpPage>
                }
              ></Route>
     <Route
                path="/exercise/*"
                element={
                  <ExercisePage
                    exercise={exercise}
                    addExercise={addExercise}
                    user={user}
                    setUser={setUser}
                  ></ExercisePage>
                }
              ></Route>
     {/* <Route path="/Addsleep" element={ <AddSleep />}/> */}
        </Routes>

      </main>
    
     
      </BrowserRouter>
    
    
    </div>
  );
}

export default App;
