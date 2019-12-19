import React, { Component } from "react";

export default class CityList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: this.props.cities,
      search: "",
      optionsChecked: [],
      checked: {}
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

  removeAllSelected(e) {
    e.preventDefault();
    let checkboxes = document.getElementsByName("city");
    let checkAll = document.getElementById("checkboxAll");

    checkAll.checked = false;

    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked === true) checkboxes[i].checked = false;
    }

    this.setState({
      ...this.state,
      optionsChecked: []
    });
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

  removeSelected(e, city) {
    e.preventDefault();
    let checkboxes = document.getElementsByName("city");
    let checkAll = document.getElementById("checkboxAll");

    checkAll.checked = false;

    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].value === city) checkboxes[i].checked = false;
    }

    this.setState({
      ...this.state,
      optionsChecked: this.state.optionsChecked.filter(e => e.id !== city)
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
        {
          // ====== COMPONENT CHECKED CITIES =============
        }
        <div className="cityList checked">
          <div className="checkAll border box clearAll">
            <span className="selectedLength">
              {" "}
              {this.state.optionsChecked.length} items{" "}
            </span>
            <span
              className="selectedClear"
              onClick={e => this.removeAllSelected(e)}
            >
              CLEAR
            </span>
          </div>
          <ul
            className="border-bottom"
            style={{ maxHeight: "90vh", overflowY: "scroll" }}
          >
            {this.state.optionsChecked.map(city => (
              <li>
                <div className="cityChecked">
                  <img src="/images/icon.png" alt="icon" />
                  <div>
                    {city.name}
                    <p>
                      <span className="chineseName">{city.chineseName}</span>
                    </p>
                  </div>
                </div>
                <div>
                  <span
                    className="cross"
                    onClick={e => this.removeSelected(e, city.id)}
                  ></span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {
          // ====== COMPONENT CHECKED CITIES =============
        }
      </div>
    );
  }
}