import React, {useState} from "react";
import "./Weather.css";
import WeatherCity from "./WeatherCity";
import IconTemp from "./IconTemp";
import Search from "./Search";
import WeatherData from "./WeatherData";


export default function Weather(props){
  
    return (
        <div className="Weather">
            <span className="day-weather">
                <WeatherCity/>
            </span>
            <div className="row">
                <div className = "col-4">
            <span className ="icon-temp">
            <IconTemp/>
             </span>
                 </div>
                 <div className="col-4">
                     <Search/>
                 </div>
                 <div className="col-4">
                     <WeatherData/>
                 </div>
            </div>
            <div className="row">
                <div className="col-12">
                "Forecast goes here"
                </div>
            </div>
            </div>
    );
}
