import React, {useState} from "react";
import "./IconTemp.css";
import {WeatherThemeProvider, Sunny, Rain, Cloudy, Snow} from "weather-styled-icon";

export const YELLOW = '#FFEB3B';
export const AMBER = '#FFC107';
export const GREY = '#607D8B';
export const WHITE = '#FFFFFF';
export const LIGHT_BLUE = '#2196F3';
export const INDIGO_LIGHT = '#E8EAF6';
export const RED ='#FF4F5E';


export default function IconTemp(props){
    
  const codeMapping={
    "01d": <Sunny/>,
    "01n": <Sunny />, // change the color of the sun to a dark one
    "02d": <Cloudy/>,
    "02n": <Cloudy />,
    "03d": <Cloudy />,
    "03n": <Cloudy />,
    "04d": <Cloudy />,
    "04n": <Cloudy />,
    "09d": <Rain />,
    "09n": <Rain />,
    "10d": <Rain />,
    "10n": <Rain />,
    "11d": <Snow />,
    "11n": <Snow />,
    "13d": <Snow />,
    "13n": <Snow />,
    "50d": <Cloudy />,
    "50n": <Cloudy />,
   
  };

  const myCustomTheme = {
  sunColor: YELLOW,
  raysColor: RED,
  cloudsColor: GREY,
  dropsColor: RED,
  snowColor: LIGHT_BLUE,
  boltColor: LIGHT_BLUE,
  backgroundColor: WHITE,
  
 };

    const Icon=()=> (
  <div>
    <WeatherThemeProvider theme={myCustomTheme}>
    {codeMapping[props.icon]}
    </WeatherThemeProvider>
  </div>
 );


 
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
   return Math.round((props.temperature* 9)/5+ 32); 
 }
 
    if (unit === "celsius"){
       return(
         <div className ="row">
            <div className = "col-2">
          <span className="Icon">
            <Icon/>
            </span>
            </div>
            <div className = "col-2">
          <div className="temperature">
            {Math.round(props.temperature)}    
                °C| 
                <span onClick={convertToFahrenheit}>
                  °F </span>
                       </div> 
                    </div>
                    </div>
     ); 
     } else {
      return(
        <div className="IconTemp">
          <Icon/>
             <div className="temperature">
          {Math.round(fahrenheit())} 
          <span className="unit">
             <span onClick={convertToCelsius}>
               °C |</span> °F 
                       </span>
                         
          </div>
            </div>  
      );
      }
}
