import React from "react";
import "./IconTemp.css";




export default function IconTemp(props){
return(
<div className="IconTemp">
<img src ={props.icon}/>
<span className="celsius-temp">
{props.temperature}    
    </span> °C

<span className="fahrenheit-temp">
   |  °F
</span>
            </div>
);
}
