import React from 'react';

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <h1>{ this.props.title }</h1>
        </div>
      </nav>
    )
  }
}

export default NavBar;