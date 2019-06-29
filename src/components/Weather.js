import React from 'react';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

const locationHeader = {
  letterSpacing: '3px',
  fontFamily: "'Titillium Web', sans-serif",
  paddingBottom: '1rem'
}

 const Weather = ({handleClick, city, country, unit, toggle, temp, fahrenheit, description, icon, wind, humidity, }) => {
    return (
      <div>
      {!temp ? (
          <input id="get-weather" type="button" value="Get Weather" onClick={handleClick} />
      ) : (
        <div id="container" style={containerStyle}>
       <div className="weather">
         <h1 className='location' style={locationHeader}>{`${city}, ${country}`}</h1>
          <button 
              onClick={unit}
              id="temp"
              style={{textAlign: 'center'}}
              >{toggle ? temp + '℃' : fahrenheit + '℉'}
          </button>
          <div id="description">{description}</div>
            <img id="icon" alt="weather-icon"
              src={`https://cdn.glitch.com/6e8889e5-7a72-48f0-a061-863548450de5%2F10n.png?1499366021399${icon}.png`} />
          <div className="weather-features">
              <span className="text">Humidity: </span><span id="humidity">{humidity}%</span>
              <span className="text"> Wind: </span><span id="wind-speed">{wind}m/s</span>
          </div>
       </div>
     </div>
      )}
      </div>
    )
  }

  export default Weather;