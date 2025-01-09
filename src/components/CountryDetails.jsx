import React, { useEffect, useState } from "react";
import axios from "axios";

const CountryDetails = ({ country }) => {
  const [weather, setWeather] = useState(null);
  const API_KEY = "705f1cea9ec26f32478163e12d020a36"; // Replace with your OpenWeatherMap API key.

  useEffect(() => {
    if (country.capital && Array.isArray(country.capital)) {
      fetchWeather(country.capital[0]); // Use the first capital city if it's an array.
    }
  }, [country]);

  const fetchWeather = async (capital) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="country-details">
      <img src={country.flags.png} alt={`${country.name.common} flag`} />
      <h2>{country.name.common}</h2>
      <p>
        <strong>Native Name:</strong>{" "}
        {country.name.nativeName
          ? Object.values(country.name.nativeName)[0].common
          : "N/A"}
      </p>
      <p>
        <strong>Population:</strong> {country.population.toLocaleString()}
      </p>
      <p>
        <strong>Region:</strong> {country.region}
      </p>
      <p>
        <strong>Sub Region:</strong> {country.subregion}
      </p>
      <p>
        <strong>Capital:</strong>{" "}
        {country.capital ? country.capital[0] : "N/A"}
      </p>
      <p>
        <strong>Border Countries:</strong>{" "}
        {country.borders ? country.borders.join(", ") : "N/A"}
      </p>

      {weather ? (
        <div>
          <h3>Weather in {country.capital[0]}</h3>
          <p>
            <strong>Temperature:</strong> {weather.main.temp}°C
          </p>
          <p>
            <strong>Weather:</strong> {weather.weather[0].description}
          </p>
          <p>
            <strong>Humidity:</strong> {weather.main.humidity}%
          </p>
          <p>
            <strong>Wind Speed:</strong> {weather.wind.speed} m/s
          </p>
        </div>
      ) : (
        <p>Loading weather information...</p>
      )}
    </div>
  );
};

export default CountryDetails;
