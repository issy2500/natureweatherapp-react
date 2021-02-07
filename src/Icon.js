import React from "react";
import "./Icon.css";
import {WeatherThemeProvider, Sunny, Rain, Cloudy, Snow} from "weather-styled-icon";


export const YELLOW = '#FFEB3B';
export const AMBER = '#FFC107';
export const GREY = '#607D8B';
export const WHITE = '#FFFFFF';
export const LIGHT_BLUE = '#2196F3';
export const INDIGO_LIGHT = '#E8EAF6';
export const RED ='#FF4F5E';

export default function Icon(props){
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
  <div className="Icon">
    <WeatherThemeProvider theme={myCustomTheme}>
    {codeMapping[props.icon]}
    </WeatherThemeProvider>
  </div>
 );


 


}