import * as React from "react";
import "./ActivityPage.css";
import { useState } from "react";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import Activity from "./Activity";

export default function ActivityPage(props) {
  console.log("propsAP", props);
  const navigate = useNavigate();
  return (
    <div className="activie-page">
      {/* {props.user.email ? ( */}
        <Activity
          activity={props.activity}
          user={props.user}
        ></Activity>
      {/* ) : (
        <LoginForm user={props.user} setUser={props.setUser}></LoginForm>
      )} */}
    </div>
  );
}