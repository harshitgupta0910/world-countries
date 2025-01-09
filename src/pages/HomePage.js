import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryCard from "../components/CountryCard";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (region === "" || country.region === region)
  );

  return (
    <div>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        region={region}
        setRegion={setRegion}
      />
      <div className="country-list">
        {filteredCountries.map((country) => (
          <CountryCard
            key={country.cca3}
            country={country}
            onClick={() => navigate(`/details/${country.cca3}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
