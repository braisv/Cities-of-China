import React, {useContext} from "react";
import useCheckedState from "../hooks/useCheckedState";
import { CityContext } from "../Components/CityContext";

const CheckedCities = () => {
  const { removeAllSelected, removeSelected } = useCheckedState();
  const [optionsChecked] = useContext(CityContext);
  // const updateState = newValue => {
  //   setState(newValue);
  // };

  // const removeSelected = (e, city) => {
  //   e.preventDefault();
  //   let checkboxes = document.getElementsByName("city");
  //   let checkAll = document.getElementById("checkboxAll");
  //   let checkedArray = optionsChecked.filter(e => e.id !== city);

  //   checkAll.checked = false;

  //   for (let i = 0; i < checkboxes.length; i++) {
  //     if (checkboxes[i].value === city) checkboxes[i].checked = false;
  //   }
  //   updateState(checkedArray);
  // };

  // const removeAllSelected = e => {
  //   e.preventDefault();

  //   let checkboxes = document.getElementsByName("city");
  //   let checkAll = document.getElementById("checkboxAll");

  //   checkAll.checked = false;

  //   for (let i = 0; i < checkboxes.length; i++) {
  //     if (checkboxes[i].checked === true) checkboxes[i].checked = false;
  //   }

  //   updateState([]);
  // };

  return (
    <div className="cityList checked">
      <div className="checkAll border box clearAll">
        <span className="selectedLength"> {optionsChecked.length} items </span>
        <span className="selectedClear" onClick={e => removeAllSelected(e)}>
          CLEAR
        </span>
      </div>
      <ul
        className="border-bottom"
        style={{ maxHeight: "90vh", overflowY: "scroll" }}
      >
        {optionsChecked.map((city, i) => (
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
                onClick={e => removeSelected(e, city.id)}
              ></span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckedCities;
