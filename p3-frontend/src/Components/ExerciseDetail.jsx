import * as React from "react";
import "./ExerciseDetail.css";
import ExerciseCard from "./ExerciseCard";
import { useParams } from "react-router-dom";

export default function ExerciseDetail(props) {
  const { exerciseId } = useParams();
 
  return (
    <div className="exercise-detail">
      {props.exercise.map((element, idx) => {
        if (element.id == exerciseId) {
          const date = new Date(element.created_at);
          const enUSFormatter = new Intl.DateTimeFormat("en-US");
          return (
            <ExerciseCard
              key={idx}
              name={element.name}
              duration={element.duration}
              intensity={element.intensity}
              category={element.category}
              created_at={enUSFormatter.format(date)}
            ></ExerciseCard>
          );
        }
      })}
    </div>
  );
}