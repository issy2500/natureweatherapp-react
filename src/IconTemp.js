import React, {useState} from "react";
import "./IconTemp.css";
import Search from "./Search";

export default function IconTemp(response){
return(
<div className="IconTemp">
<img src ="https://ssl.gstatic.com/onebox/weather/64/snow.png"/>
<span className="celsius-temp">
    70
    </span> °C

<span className="fahrenheit-temp">
   |  °F
</span>
            </div>
);
}
