import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm, region, setRegion }) => (
  <div className="search-bar">
    <input
      type="text"
      placeholder="Search for a country..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <select value={region} onChange={(e) => setRegion(e.target.value)}>
      <option value="">Filter by region</option>
      <option value="Africa">Africa</option>
      <option value="America">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  </div>
);

export default SearchBar;
