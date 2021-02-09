import React, {useState} from "react";
import "./Temp.css";


export default function Temp(props){
 const[unit,setUnit]=useState("celsius");
   
 function convertToFahrenheit(event){
  setUnit("fahrenheit");    
 }

 function convertToCelsius(event){
   setUnit("celsius");
 }

 function fahrenheit(){
   return Math.round((props.temperature* 9)/5+ 32)
 }
    if (unit === "celsius"){
       return(
         <div className ="row">
          <span className="unit">
            {props.temperature}   
              °C|<button onClick = {convertToFahrenheit}>°F</button>
            </span>
                    </div>
     ); 
     } else {
      return(
        <div className="row">
             <div className="unit">
          {fahrenheit()} °F|
                <button onClick = {convertToCelsius}>°C |</button>
                </div>
                       </div>
            
      );
      }
}
