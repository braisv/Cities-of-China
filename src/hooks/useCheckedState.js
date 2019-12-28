import { useContext } from "react";
import { CityContext } from "../Components/CityContext";
import chinaCities from "../Utils/cities-of-china.json";

const useCheckedState = () => {
  const cities = chinaCities.cities;
  const [optionsChecked, setState] = useContext(CityContext);

  const updateState = newValue => {
    setState(newValue);
  };

  const handleAll = e => {
    let checkboxes = document.getElementsByName("city");

    if (e.target.checked) {
      for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked === false) checkboxes[i].checked = true;
      }
      updateState(cities);
    } else {
      for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked === true) checkboxes[i].checked = false;
      }

      updateState([]);
    }
  };

  const checkOption = e => {
    let checkedArray = optionsChecked;
    let selectedValue = cities.filter(city =>
      city.id === e.target.value ? city : null
    );

    if (e.target.checked === true) {
      checkedArray = [...checkedArray, selectedValue[0]];
      updateState(checkedArray);
    } else {
      e.target.checked = true;
    }
  };

  const removeSelected = (e, city) => {
    e.preventDefault();
    let checkboxes = document.getElementsByName("city");
    let checkAll = document.getElementById("checkboxAll");
    let checkedArray = optionsChecked.filter(e => e.id !== city);

    checkAll.checked = false;

    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].value === city) checkboxes[i].checked = false;
    }
    updateState(checkedArray);
  };

  const removeAllSelected = e => {
    e.preventDefault();

    let checkboxes = document.getElementsByName("city");
    let checkAll = document.getElementById("checkboxAll");

    checkAll.checked = false;

    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked === true) checkboxes[i].checked = false;
    }

    updateState([]);
  };

  return {
    handleAll,
    checkOption,
    removeSelected,
    removeAllSelected
  };
};

export default useCheckedState;
