import React from "react";
import Icon from "./WeatherIcon";
import "./ForecastPreview.css";


export default function ForecastPreview(props){
    console.log()
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
    <div className="forecast-preview">
         {hours()}
            <span className="IconTemp">
            <Icon icon={props.data.weather[0].icon}/>
            </span>
              <span className="new-temperature">
               {temperature()}
            </span>
        </div>  
        </div>
        );
}