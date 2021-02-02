import React from "react";
import "./Weather.css";
import IconTemp from "./IconTemp";
import Search from "./Search";



export default function Weather(){
  
    return (
        <div className="Weather">
            <div className="row">
                 <div className="col-12">
                     <Search/>
                 </div>
            </div>
            <div className="row">
                <div className="col-12">
                "Forecast goes here"
                </div>
            </div>
            </div>
    );
}
