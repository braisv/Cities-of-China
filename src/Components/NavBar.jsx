import React from "react";

const NavBar = ({ title }) => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1>{title}</h1>
      </div>
    </nav>
  );
};

export default NavBar;
