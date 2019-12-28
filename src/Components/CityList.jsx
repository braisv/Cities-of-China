import React, { useState } from "react";
import useCheckedState from "../hooks/useCheckedState";
import chinaCities from "../Utils/cities-of-china.json";

const CityList = () => {
  const cities = chinaCities.cities;
  const [search, setSearch] = useState("");
  const { handleAll, checkOption } = useCheckedState();
 
  let resultSearch = cities.filter(el =>
    el.name.toLowerCase().includes(search.toLowerCase())
  );

  const updateSearch = e => {
    setSearch(e.target.value);
  };

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
              value={search}
              onChange={e => updateSearch(e)}
            />
          </form>
        </div>
        <div className="checkAll border-left box">
          <input type="checkbox" id="checkboxAll" onChange={e => handleAll(e)} />{" "}
          {cities.length} items
        </div>
        <ul
          className="border"
          style={{
            maxHeight: "90vh",
            overflowY: "scroll",
            borderBottom: "none"
          }}
        >
          {resultSearch.map((city, i) => (
            <li key={i}>
              <input
                type="checkbox"
                name="city"
                value={city.id}
                onChange={e => checkOption(e)}
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
    </div>
  );
};

export default CityList;
