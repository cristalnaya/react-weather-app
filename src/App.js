import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Weather from './components/Weather';
import 'weather-icons/css/weather-icons.css';
import SearchBar from './components/SearchBar';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

const background = {
  backgroundImage: 'linear-gradient(to right top, #2a2d2f, #2a2d2f, rgb(31, 91, 105), #404a4e, #06242f)',
  height: '100vh'
}

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      searchField: '',
       isToggleOn: true,
       icon: '',
       name: '',
       humidity: '',
       temp: '',
       description: '',
       wind: '',
       celsius: '',
       fahrenheit: '',
       sunrise: '',
       sunset: '',
       currentDate: '',
       bgImage: '',
       currentWeatherIcon: '',
       latitude: '',
       longitude: '',
       coords: ''
    }
    this.onChangeUnit = this.onChangeUnit.bind(this);
  }
   
  onChangeUnit = () => {
    this.setState(state => ({
        isToggleOn: !state.isToggleOn
    }));
}

onSearchChange = (e) => {
  console.log(e.target.value);
}

  componentDidMount() {
    fetch(`https://fcc-weather-api.glitch.me/api/current?lat=40.712776&lon=-74.005974`)
    .then(response => response.json())
    .then(data => this.setState({
      name: data.name,
      humidity: data.main.humidity,
      temp: Math.round(data.main.temp),
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
  
 
    render() {
      const { currentDate, name, temp, fahrenheit, isToggleOn, description, humidity, wind, icon } = this.state;
      return(
        <div 
        className="app" 
        style={background}
        onClick={this.onChangeBackground}
        >
          <Header 
            currentDate={currentDate}
          />
          <SearchBar searchChange={this.onSearchChange}/>
          <div className="container" style={containerStyle}>
          <div id="location">{name}</div>
            <h1 
            onClick={this.onChangeUnit}
            id="temp"
            style={{textAlign: 'center'}}
            >
            {isToggleOn ? `${temp}℃` : `${fahrenheit}℉`}
            </h1>
            
            <Weather 
              description={description}
              humidity={humidity}
              wind={wind}
              icon={icon}
            />
           
          </div>
        </div>
      )
   }
}

export default App;


// ['https://images.pexels.com/photos/3768/sky-sunny-clouds-cloudy.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.unsplash.com/photo-1500740516770-92bd004b996e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80', 'https://images.unsplash.com/photo-1498354136128-58f790194fa7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80', 'https://images.unsplash.com/photo-1493314894560-5c412a56c17c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', 'https://images.unsplash.com/photo-1532902122554-47519f32cb12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80']