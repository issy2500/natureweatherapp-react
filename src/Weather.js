import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(){

    const [ weatherData, setWeatherData] = useState({ready : false});

    function handleApiResponse(response){
        setWeatherData({
            ready:true,
            temperature: response.data.main.temp,
            humidity:response.data.main.humidity,
            wind: response.data.wind.speed,
            city:response.data.name,
            description:response.data.weather[0].description,
            date:response.data.date,
            iconUrl:"https://ssl.gstatic.com/onebox/weather/64/snow_light.png",
        });
     
    }
 if (weatherData.ready) {
    return (
        <div className="Weather">
            <h1>
                {weatherData.city}
            </h1>
            <span className="day-weather">
            <ul>
                <li> {weatherData.date}</li>
                <li className = "text-capitalize">
                    {weatherData.description}</li>
            </ul>
            </span>
            <div className="row">
                <div className="col-3">
                    <img src ={weatherData.iconUrl} />
                    <span className="temperature">
                        {Math.round(weatherData.temperature)}
                    </span>
                    <span className="unit-celsius">
                    °C </span>|
                    <span className="unit-fahrenheit">°F 
                    </span>
                </div>
                <div className="col-3">
                     <form>
                <input type = "search" placeholder = "Enter a city"
                className ="search-input"/>
                </form>
                </div>
                <div className ="col-3">
                    <form>
                <input type = "submit" value = "Search"
                className="search-button"/>
                </form>
                </div>
                <div className="col-3">
                    <span className="day-forecast">
                    <ul>
                <li> Precipitation: {weatherData.precipitation}% </li>
                <li> Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind.speed}km/h</li>
                </ul>
                </span>
                    </div>
            </div>
            </div>
    );
} else {
       let apiKey ="9979b8bdc3d06bd98cddbd046eb5962f";
    let city = "Buscalan";
    let apiUrl =`http://api.openweathermap.org/data/2.5/
    weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleApiResponse);
   
 }
}