import * as React from "react"
import "./Summary.css"
import {useState} from "react"

export default function Summary(props){
    return (
        <div className="summary-stat">
            <div className={props.type}>
                <div className="secondary-statistic">
                    <p>{props.substat}</p>
                </div>
                <div className="primary-statistic">
                    <h3>{props.stat.toFixed(1)}</h3>
                </div>
                <div className="stat-label">
                    <p>{props.label}</p>
                </div>
            </div>
        </div>
    )
}