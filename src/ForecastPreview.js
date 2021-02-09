import React from "react";
import Icon from "./WeatherIcon";
import "./ForecastPreview.css";


export default function ForecastPreview(props){
function hours (){
    let date = new Date(props.data.dt* 1000)
    let hours = date.getHours()
     return`${hours}:00`
}

function temperature (){
    let temperature= Math.round(props.data.main.temp);  
    return `${temperature} °C`;
}
return(
    <div clasName="row">
        <span className="hours">
         {hours()}
         </span>
            <span className="IconTemp">
            <Icon icon={props.data.weather[0].icon}/>
            </span>
              <span className="forecast-temp">
               {temperature()}
            </span>
        </div>
        );
}