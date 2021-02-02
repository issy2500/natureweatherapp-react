import React, {useState} from "react";
import "./SearchForm.css";
import axios from "axios";

export default function Search(props){
 
 const [weatherData,setWeatherData]=useState({ready : false});

    function handleApiResponse(response){
        setWeatherData({
            ready:true,
            temperature:response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            precipitation:response.data.main.precipitation,
            city:response.data.name,
            description:response.data.weather[0].description,

        });
      
    }

    if (weatherData.ready){
        return(
         <div className="Search">
        <div className="row">
                <div className="row">
                 <input type ="value" placeholder="Enter City" autofocus="on">
                 </input>
                     <input type="submit" value="Search">
                          </input>
                             </div>
                                </div>

                                  <div className="Search">
                                      <span className="Temperature">
                                          {Math.round(weatherData.temperature)}
                                          {weatherData.wind}
                                          {weatherData.description}
                                          {weatherData.humidity}
                                          {weatherData.city}
                                          {weatherData.precipitation}
                                        
                                      </span>
                                      </div>
                                </div>
                                
       
    );
    }else{
          
    let city = "New York";
    const apiKey="9979b8bdc3d06bd98cddbd046eb5962f";
    const apiUrl=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleApiResponse);

    return "Loading"

    }
}