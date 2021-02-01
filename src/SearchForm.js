import React, {useState} from "react";
import "./SearchForm.css";
import axios from "axios";

export default function SearchForm(){
    return(
        <div className="row">
            <div className="SearchForm">
                <div className="row">
                 <input type ="value" placeholder="Enter City" autofocus="on">
                 </input>
                     <input type="submit" value="Search">
                          </input>
                             </div>
                                </div>
         </div>
    );
}