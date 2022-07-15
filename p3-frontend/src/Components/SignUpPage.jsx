import * as React from "react";
import "./SignUpPage.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Signup from "./Signup";

export default function SignUpPage(props) {
  const navigate = useNavigate();
  return (
    <div className="registration-page">
      {<Signup setUser={props.setUser}></Signup>}
    </div>
  );
}