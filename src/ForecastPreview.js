import React from "react";
import IconTemp from "./IconTemp";


export default function ForecastPreview(props){

function hours (){
    let date = new Date(props.data.dt* 1000)
    let hours = date.getHours()
     return`${hours}:00`

}

function temperature (){
    let temperature= Math.round(props.data.main.temp);  
    return `${temperature} °C|°F`;
}
return(
    <div clasName="row">
    <div className="Forecast ">
           {hours()}
            <span className="icon">
            <IconTemp icon={props.data.weather[0].icon}/>
            </span>
            {temperature()}
        </div>  
        </div>
        );
}