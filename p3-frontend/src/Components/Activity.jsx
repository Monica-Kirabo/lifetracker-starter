import * as React from "react";
import "./Activity.css";
import Summary from "./Summary";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import apiClient from "../services/apiClient";

export default function Activity(props) {

  const [isFetching, setIsFetching] = useState(false);
  const [activity, setActivity] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchActivities = async () => {
      if (!(Object.keys(props.user).length === 0)) {
        setIsFetching(true);

        const { data, error } = await apiClient.listActivities(props.user.id);
        if (error) {
          setError(error);
        }
        if (data) {
          setActivity(data.activities);
        }
        setIsFetching(false);
      }
    };

    fetchActivities();
  }, []);
  return (
    <div className="activity-feed">
      <div className="actions">
        <h2>Activity Feed</h2>
        <div className="btnd">
          <Link className="button-e" to="/exercise/create">
            Record Exercise
          </Link>
          <Link className="button-n" to="/Recordnutrition">
            Record Nutrition
          </Link>
          <Link className="button-s" to="/sleep/create">
            Record Sleep
          </Link>
        </div>
      </div>
      <div className="stats">
        <h4>Average Calories Per Category</h4>
        {activity.length === 0 ? (
          <div className="empty">
            <h2 className="here">Nothing here yet.</h2>
          </div>
        ) : (
          <div className="per-category">
            {activity.length > 6
              ? activity.slice(0, 6).map((element, idx) => {
                  return (
                    <Summary
                      type={"card-cat"}
                      stat={element.sum / element.count}
                      label={"calories"}
                      substat={element.category}
                      key={idx}
                    ></Summary>
                  );
                })
              : activity.map((element, idx) => {
                  return (
                    <Summary
                      type={"card-cat"}
                      stat={element.sum / element.count}
                      label={"calories"}
                      substat={element.category}
                      key={idx}
                    ></Summary>
                  );
                })}
          </div>
        )}
      </div>
    </div>
  );
}





// import "./Activity.css";
// import * as React from "react"
// import { useState } from "react";

// export default function Activity({appState, sessionId, setSessionId}) {
//   console.log(sessionId)
//   setSessionId(sessionId)
// return(
// <div className="activity">
    
    
//     <div className="header">
       

// <ul>
// <div className="activitytitle">
//     <h1>Activity Feed</h1>
//     </div>
//         <li>
//           <a href="/AddExercise ">Add Exercise</a>
//         </li>

//         <li>
//           <a href="/Addsleep ">Log sleep</a>
//         </li>

//         <li>
//           <a href="/Recordnutrition ">Record Nutrition</a>
//         </li>
//         </ul>
//     </div>
// </div>
// );
// }