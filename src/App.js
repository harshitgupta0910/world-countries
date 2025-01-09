// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './App.css';
// import HomePage from "./pages/HomePage";
// import DetailsPage from "./pages/DetailsPage";
// // import ThemeToggle from "./components/Theme";
// // import CountryHistory from "./components/conhistory";
// // import CountryWeather from "./components/Whether";
// // import CurrencyConverter from "./components/Currency";
// import CountryCard from "./components/CountryCard";
// import CountryDetails from "./components/CountryDetails";
// import SearchBar from "./components/SearchBar";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/details/:cca3" element={<DetailsPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
// import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:cca3" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
