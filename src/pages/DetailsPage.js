import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import CountryDetails from "../components/CountryDetails";

const DetailsPage = () => {
  const { cca3 } = useParams();
  const [country, setCountry] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/alpha/${cca3}`).then((response) => {
      setCountry(response.data[0]);
    });
  }, [cca3]);

  if (!country) return <p>Loading...</p>;

  return (
    <div>
      <button onClick={() => navigate("/")}>Back</button>
      <CountryDetails country={country} />
    </div>
  );
};

export default DetailsPage;
