import React, {useState} from "react";
import axios from "axios";
import "./Search.css";
import WeatherData from "./WeatherData";
import WeatherCity from "./WeatherCity";
import IconTemp from "./IconTemp";
import FormattedDate from "./FormattedDate"


export default function Search(props){

const [weatherData,setWeatherData]=useState({ready : false});
const [city,setCity]=useState(props.defaultCity);

    function handleApiResponse(response){
        setWeatherData({
            ready:true,
            temperature:response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            precipitation:response.data.main.precipitation,
            date: new Date(response.data.dt*1000),
            city:response.data.name,
            description:response.data.weather[0].description, 
            icon:response.data.weather[0].icon,    
        });
     
    }

    function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function updateCity(event){
      setCity(event.target.value);
    }

     function search(){
    const apiKey="9979b8bdc3d06bd98cddbd046eb5962f";
    const apiUrl=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleApiResponse);

    }
    if (weatherData.ready){
        return (
           <div className="WeatherInfo" >
             <div className="WeatherCity">
                 <div className="row">
                     <div className="col-12">
                        <WeatherCity city ={weatherData.city} description={weatherData.description}/>
                         <FormattedDate date= {weatherData.date}/>
                     </div>
                 </div>
             </div>
              <div className="Search">
               <div className="row">
                   <div className="col-4">
                   <IconTemp temperature= {Math.round(weatherData.temperature)} icon={weatherData.icon}/>
                   </div>
                   <div className="row">
                   <form onSubmit={handleSubmit}>
                
                 <input type ="value" 
                 placeholder="Enter City" 
                 autofocus="on"
                 onChange={updateCity}>
                 </input>
                        <input type="submit" value="Search">
                          </input>
                          </form>
                          </div>
                             <div className="col-4">
                                  <div className="WeatherData">
                                <WeatherData wind={weatherData.wind}  humidity ={weatherData.humidity}  precipitation ={weatherData.precipitation}/>   
                                      </div>
                                      </div>
                                      </div>
                                </div>
                                </div> 
    );
    }else {
        search();
    return "Loading";
    }
}