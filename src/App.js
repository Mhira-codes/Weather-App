import "./App.css";
import Input from "./components/Input";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [degrees, setDegrees] = useState(null);
  const [location, setLocation] = useState("");
  const [weatherdescription, setWeatherdescription] = useState("");
  const [icon, setIcon] = useState("");
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [country, setCountry] = useState("");
  const [search, setSearch] = useState("");
  const [found, setFound] = useState(false);


  const fetchData = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      );
      const data = await response.data;
      setDegrees(data.main.temp);
      setLocation(data.name);
      setWeatherdescription(data.weather[0].description);
      setIcon(data.weather[0].icon);
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      setCountry(data.sys.country);
      setFound(true)
    } catch (err) {
      console.log(err);
      setFound(false)
      // alert("Invalid location");
    }
  };

  const defaultSearch = async () => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=accra&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    );
    const data = await response.data;

    setDegrees(data.main.temp);
    setLocation(data.name);
    setWeatherdescription(data.weather[0].description);
    setIcon(data.weather[0].icon);
    setHumidity(data.main.humidity);
    setWind(data.wind.speed);
    setCountry(data.sys.country);
    setFound(true)
  };

  useEffect(() => {
    //  fetchData()
    defaultSearch();
  }, []);

  return (
    <div className="App">
      <div className="weatherContainer">
        <Input
          text={(e) => setSearch(e.target.value)}
          submit={fetchData}
          func={fetchData}
        />
        {
          found ==true? (
            <div className="weather_sub_container">
            <div className="weather_title">
              <h1>Weather in {location}</h1>
            </div>
            <div className="weather_temperature">
              <h2>{degrees} °C</h2>
            </div>
            <div className="weather_message">
              <span>
                <img
                  src={`https://api.openweathermap.org/img/w/${icon}.png`}
                  alt="cloud"
                />
              </span>
              <h3 className="cloud_description">{weatherdescription}</h3>
            </div>
            <div className="weather_description">
              <div className="first_column">
                <h3>Humidity: {humidity}%</h3>
                <h3>Wind speed: {wind} m/s</h3>
              </div>
              <div className="second_column">
                <h3>{country}</h3>
                <h4>3/4/2022, 4:22PM</h4>
              </div>
            </div>
          </div>
          ):(
            <div className="cityClass">
              <p>Sorry City not found</p>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default App;
