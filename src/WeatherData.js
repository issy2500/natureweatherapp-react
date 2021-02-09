import React from "react";
import "./WeatherData.css";


export default function WeatherData(props){
    return(
        <div className="WeatherData">
            
        <ul>
            <li> Humidity: {props.humidity} %</li>
            <li> Wind: {props.wind}km/h</li>
        </ul>
        </div> 
    );
}