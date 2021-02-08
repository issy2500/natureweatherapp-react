import React, {useState} from "react";
import "./Temp.css";



export default function Temp(props){
    
  
 const[unit,setUnit]=useState("celsius");
   
 
 function convertToFahrenheit(event){
  event.preventDefault();
  setUnit("fahrenheit");
      
 };

 function convertToCelsius(event){
   event.preventDefault();
   setUnit("celsius");
 }

 function fahrenheit(){
   return (
     Math.round((props.temperature* 9)/5+ 32)
   )
 }
    if (unit === "celsius"){
       return(
         <div className ="row">
          <span className="unit">
            {Math.round(fahrenheit())}   
              °C|
          <a href="/" onClick={convertToFahrenheit} rel="noreferrer">
            °F
          </a>
            </span>
                  
                    </div>
     ); 
     } else {
      return(
        <div className="row">
             <div className="unit">
          {Math.round(fahrenheit())} 
                <a href="/" onClick={convertToCelsius} rel="noreferrer" >
               °C|</a>
                   °F
                </div>
                       </div>
            
      );
      }
}
