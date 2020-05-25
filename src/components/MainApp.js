import React, { useState } from 'react';
import '../App.css'

  const api = {
    key: "b44c382eee66fc24d39ca91de23760a0",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  function MainApp() {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    const search = e => {
      if (e.key === "Enter") {
        fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
          .then(res => res.json())
          .then(result => {
            setWeather(result);
            setQuery('');
            console.log(result);
          });
      }
    }
  
  const dates = (d) => {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    return `${day}, ${month}/${date}/${year}`
  }

  
  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp <= 50) ? 'MainApp cold' : 
                    ((weather.main.temp >= 70) ? 'MainApp hot' : 'MainApp breezy')) : 'MainApp'}>
      <main>
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-container">
            <div className="location">{weather.name}, {weather.sys.country}</div>
          </div>
          <div className="weather-container">
          <div className="date">{dates(new Date())}</div>
            <div className="temperature">
              {Math.round(weather.main.temp)}°F
            </div>
            <div className="temperatureTwo">
              Feels Like {Math.round(weather.main.feels_like)}°F
            </div>
            <div className="weather">Cloudiness: {weather.clouds.all}%</div>
            <div className="weather">Wind: {Math.round(weather.wind.speed * 2.237)}mph</div>
          </div>
        </div>
        ) : ('')}
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Type city location and enter..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
      </main>
    </div>
  );
}


export default MainApp;
