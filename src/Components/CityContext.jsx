import React, { useState, createContext } from "react";

const CityContext = createContext();

const CityContextProvider = props => {
  const [optionsChecked, setState] = useState([]);

  return (
    <CityContext.Provider value={[optionsChecked, setState]}>
      <div className="flex">{props.children}</div>
    </CityContext.Provider>
  );
};

export { CityContext, CityContextProvider };
