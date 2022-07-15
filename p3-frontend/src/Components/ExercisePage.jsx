import * as React from "react";
import "./ExercisePage.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ExerciseOverview from "./ExerciseOverview";
import ExerciseNew from "./ExerciseNew";
import ExerciseDetail from "./ExerciseDetail";
import Signup from "./Signup";
import SignUpPage from "./SignUpPage";
import Login from "./Login";
import LoginPage from "./LoginPage";
import ActivityPage from "./ActivityPage";
export default function ExercisePage(props) {
  return (
    <div className="exercise-page">
      {/* {props.user.email ? ( */}
        <main>
          <div className="banner">
            <h1>Exercise</h1>
          </div>
          <Routes>
            <Route
              path="/"
              element={
                <ExerciseOverview
                  exercise={props.exercise}
                  user={props.user}
                ></ExerciseOverview>
              }
            ></Route>
            <Route
              path="/create"
              element={
                <ExerciseNew addExercise={props.addExercise}></ExerciseNew>
              }
            ></Route>
            <Route
              path="/id/:exerciseId"
              element={
                <ExerciseDetail exercise={props.exercise}></ExerciseDetail>
              }
            ></Route>
          </Routes>
        </main>
      {/* ) : (
        <Login user={props.user} setUser={props.setUser}></Login>
      )} */}
    </div>
  );
}