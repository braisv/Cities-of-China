import React, { Component } from "react";

export default class CheckedCities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionsChecked: this.props.checked
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.checked !== state.optionsChecked) {
      return {
        optionsChecked: props.checked
      };
    }
    return null;
  }

  removeSelected(e, city) {
    e.preventDefault();
    let checkboxes = document.getElementsByName("city");
    let checkAll = document.getElementById("checkboxAll");

    checkAll.checked = false;

    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].value === city) checkboxes[i].checked = false;
    }

    this.props.handler(this.state.optionsChecked.filter(e => e.id !== city))
  }

  removeAllSelected(e) {
    e.preventDefault();

    let checkboxes = document.getElementsByName("city");
    let checkAll = document.getElementById("checkboxAll");

    checkAll.checked = false;

    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked === true) checkboxes[i].checked = false;
    }

    this.props.handler([])
  }

  render() {
    return (
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
          {this.state.optionsChecked.map( (city, i) => (
            <li key={i}>
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
    );
  }
}
