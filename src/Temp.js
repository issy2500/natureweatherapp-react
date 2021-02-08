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
            <div className = "col-2">
            
            <div className = "col-2">
                <div className = "row">
                  <span className="unit">
            {fahrenheit()}   
          °C|°F
          <a href="/" onClick={convertToFahrenheit}>
          </a>
          </span>
          </div> 
                   </div>
                    </div>
                    </div>
     ); 
     } else {
      return(
         
             <div className="temperature">
          {Math.round(fahrenheit())} 
               <div className="Temp row">
                <a href="/" onClick={convertToCelsius}>
               °C|</a>
               °F
                </div>
                       </div>
            
      );
      }
}
