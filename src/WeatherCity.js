import React from "react";
import "./WeatherCity.css";



export default function WeatherCity(props){
    return(
        
            <ul>
        <h1>
             {props.city}
        </h1>
        <h4 className ="text-capitalize">
            {props.description}
        </h4>
        </ul>
    );
    
}