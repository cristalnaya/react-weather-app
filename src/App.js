import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Weather from './components/Weather';
import 'weather-icons/css/weather-icons.css';


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      city: '',
      country: '', 
      isToggleOn: true,
      icon: '',
      humidity: '',
      temp: '',
      description: '',
      wind: '',
      celsius: '',
      fahrenheit: '',
      currentDate: '',
      currentWeatherIcon: '',
      latitude: null,
      longitude: null,
      error: null,
      coords: ''
    }
    this.onChangeUnit = this.onChangeUnit.bind(this);
  }
   
  onChangeUnit = () => {
    this.setState(state => ({
        isToggleOn: !state.isToggleOn
    }));
}

  getWeather = () => {
    fetch(`https://fcc-weather-api.glitch.me/api/current?lat=${this.state.latitude}&lon=${this.state.longitude}`)
    .then(response => response.json())
    .then(data => 
      this.setState({
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        temp: Math.round(data.main.temp),
        isLoading: false,
        description: `${data.weather[0].description.charAt(0).toUpperCase()}${data.weather[0].description.slice(1)}`,
        icon: data.weather[0].icon,
        wind: data.wind.speed,
        fahrenheit: Math.round(parseFloat(data.main.temp) * 1.8 + 32),
        sunrise: new Date(data.sys.sunrise * 1000).getHours(),
        sunset: new Date(data.sys.sunset * 1000).getHours(),
        currentDate: new Date().toString().split(' ').splice(0, 4).join(' ') ,
        currentWeatherIcon: data.weather[0].icon,
    }))
    .catch(error => console.log(error));
  }

  getLocation = () => {
    if(navigator.geolocation) {
        const success = position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        this.setState({
          latitude: lat,
          longitude: lon,

        }, () => {
          this.getWeather();
        });
      }

      const error = () => {
        this.setState({
          error: 'Unable to retrieve data'
        });
      }
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };
  
    render() {
      const { currentDate, temp, fahrenheit, isToggleOn, description, humidity, wind, icon, isLoading, city, country } = this.state;

      return (
       
        <div className="app">
        {isLoading ? (
          <h1 className="loading-info">Loading...</h1>
        ) : (
         <React.Fragment>
          <Header 
            currentDate={currentDate}
          />
            <Weather 
              change={this.onSearchChange}
              handleClick={this.getLocation}
              description={description}
              humidity={humidity}
              wind={wind}
              icon={icon}
              unit={this.onChangeUnit}
              temp={temp}
              fahrenheit={fahrenheit}
              toggle={isToggleOn}
              city={city}
              country={country}
            />
         </React.Fragment>
        )}
        </div>
      );
   }
}

export default App;
