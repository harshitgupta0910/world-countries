import React from "react";

const CountryCard = ({ country, onClick }) => (
  <div className="country-card" onClick={() => onClick(country)}>
    <img src={country.flags.png} alt={`${country.name.common} flag`} />
    <h3>{country.name.common}</h3>
    <p>Population: {country.population.toLocaleString()}</p>
    <p>Region: {country.region}</p>
    <p>Capital: {country.capital ? country.capital[0] : "N/A"}</p>
  </div>
);

export default CountryCard;
