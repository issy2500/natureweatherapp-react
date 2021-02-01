import React, {useState} from "react";
import "./IconTemp.css"
import axios from "axios";

export default function IconTemp(){
return(
<div className="IconTemp">
<img src ="https://ssl.gstatic.com/onebox/weather/64/snow.png"/>
<span className="celsius-temp">
    38°C
</span>
<span className="fahrenheit-temp">
   |  °F
</span>
            </div>
);
}
