import React from "react";
import NavBar from "./NavBar";
import CityList from "./CityList";
import CheckedCities from "./CheckedCities";
import { CityContextProvider } from "./CityContext"
import "./App.css";

const App = () => {
  return (
    <div>
      <NavBar title="Cities of China" />
      <CityContextProvider>
        <CityList />
        <CheckedCities />
      </CityContextProvider>
    </div>
  );
};

export default App;
