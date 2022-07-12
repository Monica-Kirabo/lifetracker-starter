import "./Nutrition.css";
import { React } from "react";

export default function Nutrition() {
  return (
    <div className="nutrition">
      <div className="title">
        <h1>Nutrition</h1>
      </div>

      <div className="header">
        <h1>Overview</h1>

        <ul>
          <li>
            <a href="/Recordnutrition ">Record Nutrition</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
