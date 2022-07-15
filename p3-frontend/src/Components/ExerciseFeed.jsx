import * as React from "react"
import "./ExerciseFeed.css"
import ExerciseCard from ".//ExerciseCard"
import apiClient from "../services/apiClient"
import { useEffect, useState } from "react"

export default function ExerciseFeed(props){
   
    const [isFetching, setIsFetching] = useState(false)
    const [exercise, setExercise] = useState([])
    const [error, setError] = useState(null)
    useEffect(() => {
        const fetchExercises = async () => {
          if(!(Object.keys(props.user).length === 0)){
            setIsFetching(true)
            console.log("users.", props.user)
        
            const { data, error } = await apiClient.listExercises(props.user.id)
            if(error){
                setError(error)
            }
            if(data){
                console.log("data", data)
                setExercise(data.exercises)
            }
            setIsFetching(false)
          }
        }
    
        fetchExercises()
      }, [])
    return (
        <div className="exercise-feed">
            {exercise.length === 0 ?
            <div className="empty">
                <h2>Nothing here yet.</h2>
            </div>
            :
            exercise.map((element, idx) => {
                const date = new Date(element.created_at)
                const enUSFormatter = new Intl.DateTimeFormat('en-US')
                return <ExerciseCard key={idx} name={element.name} duration={element.duration} intensity={element.intensity} category={element.category} created_at={enUSFormatter.format(date)}></ExerciseCard>
            })}
        </div>
    )
}