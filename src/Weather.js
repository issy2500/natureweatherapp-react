import React from "react";
import "./Weather.css";
import Search from "./Search.js";



export default function Weather(){
    return (
        <div className="Weather">
            <div className="row">
                 <div className="col-12">
                     <Search defaultCity="New York"/>
                 </div>
            </div>
            </div>
    );
}
