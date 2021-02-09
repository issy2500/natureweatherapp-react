import React, {useState} from "react";
import axios from "axios";
import "./Forecast.css";
import ForecastPreview from "./ForecastPreview.js";



export default function Forecast(props){
  
    const [loaded,setLoaded]= useState(false);
    const [forecast,setForecast]= useState(null);

    function handleApiResponse(response){
          setForecast(response.data);  
            setLoaded(true)
        console.log(response.data)
    }

    if (loaded){
        return (
        <div className ="forecastpreview">
           <div className ="row">
               <div className ="col-2">
         <ForecastPreview  data={forecast.list[0]}/> 
         </div>
              <div className ="col-2">
          <ForecastPreview  data={forecast.list[1]}/>
          </div>
               <div className ="col-2">
           <ForecastPreview  data={forecast.list[2]}/>
           </div>
                <div className ="col-2">
            <ForecastPreview  data={forecast.list[3]}/>
            </div>
              </div>
              </div>
             
        );
    }else {

    
    const apiKey= "9979b8bdc3d06bd98cddbd046eb5962f";
    const apiUrl=`https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleApiResponse);
    return null;
    }
}