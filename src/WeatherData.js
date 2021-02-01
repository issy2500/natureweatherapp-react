import React, {useState} from "react";
import "./WeatherData.css";
import axios from "axios";
import Weather from "./Weather";
import "./WeatherData.css";

export default function WeatherData(){
    return(
        <div className="WeatherData">
        <ul>
            <li> Humidity: %</li>
            <li> Precitipation: %</li>
            <li> Wind:  km/h</li>
        </ul>
        </div>
    );
}