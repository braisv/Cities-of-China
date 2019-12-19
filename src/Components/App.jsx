import React, { Component } from "react";
import NavBar from "./NavBar";
import CityList from "./CityList";
import cities from "../Utils/cities-of-china.json";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cities: cities.cities,
    };
  }

  render() {
    return (
      <div>
        <NavBar title="Cities of China" />
        <CityList cities={this.state.cities} />
      </div>
    );
  }
}
