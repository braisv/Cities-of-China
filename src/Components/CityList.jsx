import React, { Component } from "react";
import CheckedCities from "./CheckedCities";

export default class CityList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: this.props.cities,
      search: "",
      optionsChecked: []
    };
  }

  updateSearch(e) {
    let search = e.target.value;

    this.setState({
      ...this.state,
      search: search
    });
  }

  checkAll(e) {
    let allCities = this.state.cities;
    let checkboxes = document.getElementsByName("city");

    if (e.target.checked) {
      for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked === false) checkboxes[i].checked = true;
      }

      this.setState({
        ...this.state,
        optionsChecked: allCities
      });
    } else {
      for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked === true) checkboxes[i].checked = false;
      }

      this.setState({
        ...this.state,
        optionsChecked: []
      });
    }
  }

  checkOption(e) {
    let allCities = this.state.cities;
    let checkedArray = this.state.optionsChecked;
    let selectedValue = allCities.filter(city =>
      city.id === e.target.value ? city : null
    );

    if (e.target.checked === true) {
      checkedArray = [...checkedArray, selectedValue[0]];
      this.setState({
        ...this.state,
        optionsChecked: checkedArray
      });
    } else {
      e.target.checked = true;
    }
  }

  handler(param) {
    this.setState({
      ...this.state,
      optionsChecked: param
    });
  }

  render() {
    const { cities } = this.state;
    let resultSearch = cities.filter(el =>
      el.name.toLowerCase().includes(this.state.search.toLowerCase())
    );

    return (
      <div className="container">
        <div className="cityList">
          <div className="border box">
            <form className="searchBar">
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search by name"
                value={this.state.search}
                onChange={e => this.updateSearch(e)}
              />
            </form>
          </div>
          <div className="checkAll border-left box">
            <input
              type="checkbox"
              id="checkboxAll"
              onChange={e => this.checkAll(e)}
            />{" "}
            {this.state.cities.length} items
          </div>
          <ul
            className="border"
            style={{
              maxHeight: "90vh",
              overflowY: "scroll",
              borderBottom: "none"
            }}
          >
            {resultSearch.map(city => (
              <li>
                <input
                  type="checkbox"
                  name="city"
                  value={city.id}
                  onChange={this.checkOption.bind(this)}
                />
                <img src="/images/icon.png" alt="icon" />
                <div>
                  {city.name}
                  <p>
                    <span className="chineseName">{city.chineseName}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <CheckedCities
          checked={this.state.optionsChecked}
          handler={this.handler.bind(this)}
        />
      </div>
    );
  }
}
