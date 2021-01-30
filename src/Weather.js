import React from "react";
import "./Weather.css";

export default function Weather(){
    return(
        <div className="Weather">
           
            <h1>
                Buscalan
            </h1>
            <ul>
                <li> Friday 13:27</li>
                <li>Beautiful Sunny Day</li>

            </ul>
            
            <div className="row">
                <div className="col-4">
                    <img src ="https://pixy.org/src/457/4572674.jpeg" alt ="Mostly Sunny"
                    width ="60" mode = "fit"/>
                    25° C  
                </div>
                <div className="col-4">
                     <form>
                <input type = "search" placeholder = "Enter a city"
                className ="city-form"/>
                <input type = "submit" value = "Search"
                className="search-button"/>
            </form>
                </div>
                <div className="col-4">
                    <ul>
                <li> Precipitation: 15% </li>
                <li> Humidity: 72%</li>
                <li>Wind: 5km/h</li>
                </ul>
                    </div>
            </div>
    

        "Nature inspired Weather app will be build here"
        </div>
    );
}