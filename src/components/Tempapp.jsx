import React,{useEffect, useState} from "react";
import "./css/style.css";

const Tempapp =()=>{

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect (()=>{
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=11050ef583534c0434521109ad94a361`;
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
        }
        fetchApi();
     },[search])

    return (
            <div className="box">
            <div className="inputData">
                <input 
                type="search"
                value={search}
                className="input" 
                onChange={(event) =>{
                    setSearch(event.target.value)
                }}
                />
            </div>

            {!city ? (
                <p className="errormessgae">No data found</p>
            ): (
                <div>
            <div className="info-1">
               <h2 className="loc"> {search}</h2>
               </div>
               <div className="info-2">
               <h1>{city.temp}° Cel</h1>
               <h3> Min : {city.temp_min}° Cel | Max : {city.temp_max}° Cel</h3>
               </div>

            <div className="wave"></div>
            <div className="wave-two"></div>
            <div className="wave-three"></div>
            </div>
        ) }
            </div>
        
    );
};

export default Tempapp;