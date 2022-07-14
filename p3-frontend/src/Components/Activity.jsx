import "./Activity.css";
import * as React from "react"
import { useState } from "react";

export default function Activity({appState, sessionId, setSessionId}) {
  console.log(sessionId)
  setSessionId(sessionId)
return(
<div className="activity">
    
    
    <div className="header">
       

<ul>
<div className="activitytitle">
    <h1>Activity Feed</h1>
    </div>
        <li>
          <a href="/AddExercise ">Add Exercise</a>
        </li>

        <li>
          <a href="/Addsleep ">Log sleep</a>
        </li>

        <li>
          <a href="/Recordnutrition ">Record Nutrition</a>
        </li>
        </ul>
    </div>
</div>
);
}