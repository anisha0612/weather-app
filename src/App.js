import React from "react";
import axios from "axios";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme.js";
import SearchBox from "./components/SearchBox.jsx";
import WeatherCard from "./components/WeatherCard.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayCard: false,
      city: "",
      country: "",
      weatherData: {
        currTemp: "",
        minTemp: "",
        maxTemp: "",
        weather: [],
        wind: { deg: "", speed: "" },
        icon: "",
      },
    };
  }

  searchInput = (e) => {
    console.log();
    this.setState({
      displayCard: false,
      city: e.target.value,
    });
  };

  getWeather = (data) => {
    this.setState({
      city: data.name,
      country: data.sys.country,
      weatherData: {
        currTemp: data.main.temp,
        minTemp: data.main.temp_min,
        maxTemp: data.main.temp_max,
        main: data.weather[0].main,
        desc: data.weather[0].description,
        icon: data.weather[0].icon,
        wind: {
          deg: data.wind.deg,
          speed: data.wind.speed,
        },
      },
    });
    console.log(Object.entries(this.state.weatherData));
    console.log(`city: ${this.state.city},country: ${this.state.country}`);
  };

  handleClick = () => {
    this.setState({ displayCard: true });
    this.fetchWeather();
  };

  fetchWeather = () => {
    const city = this.state.city;
    const capitalize = city.charAt(0).toUpperCase() + city.slice(1);
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${capitalize}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`
      )
      .then((response) => response.data)
      .then((result) => this.getWeather(result))
      .catch((err) => {
        console.log(
          "For Cities in USA, the format is city,state,country. Check the format" +
            err
        );
      });
  };

  render() {
    const { weatherData, city, country, displayCard } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div className="App">
          <h1>Weather Report</h1>
          <SearchBox
            handleChange={this.searchInput}
            handleClick={this.handleClick}
          />
          <WeatherCard
            weather={weatherData}
            city={city}
            country={country}
            displayCard={displayCard}
          />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
