import React from "react";
import "./IconTemp.css";



export default function IconTemp(props){
return(
<div className="IconTemp">
<img src ="https://ssl.gstatic.com/onebox/weather/64/snow.png"/>
<span className="celsius-temp">
{props.temperature}    
    </span> °C

<span className="fahrenheit-temp">
   |  °F
</span>
            </div>
);
}
