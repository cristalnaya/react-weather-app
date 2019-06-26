import React from 'react'



 const Weather = (props) => {
    //  const descriptionFilter = console.log((props.description));
    return (
      <div>
        <img id="icon" alt="weather-icon"
        src={`https://cdn.glitch.com/6e8889e5-7a72-48f0-a061-863548450de5%2F10n.png?1499366021399${props.icon}.png`} />
        <div id="description">{props.description}</div>
        
        <div className="weather-features">
            <span className="text">Humidity: </span><span id="humidity">{props.humidity}%</span>
            <span className="text"> Wind: </span><span id="wind-speed">{props.wind}m/s</span>
        </div>
      </div>
    )
  }

  export default Weather;