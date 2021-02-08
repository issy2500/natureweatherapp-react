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
     <div className ="row">
     {Math.round((props.temperature* 9)/5+ 32)} 
     °C| <span 
     onClick={convertToFahrenheit}>
       °F </span>
     </div>
   )
 }
    if (unit === "celsius"){
       return(
         <div className ="row">
            <div className = "col-2">
            </div>
            <div className = "col-2">
          <div className="temperature">
            {fahrenheit()}   
                       </div> 
                    </div>
                    </div>
     ); 
     } else {
      return(
         
             <div className="temperature">
          {Math.round(fahrenheit())} 
               <div className="Temp row">
                <span onClick={convertToCelsius}>
               °C|°F</span>
                </div>
                       </div>
         
            
      );
      }
}
