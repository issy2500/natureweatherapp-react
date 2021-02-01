import React from "react";
import Weather from "./Weather";
import "./WeatherCity.css";


export default function WeatherCity(props){
    return(
        
            <ul>
        <h1>
             Buscalan
        </h1>
        <h4>
            Monday 13:44
        </h4>
        <h6 className ="text-capitalize">
           Sunny and Beautiful
        </h6>
        </ul>
    );
    
}