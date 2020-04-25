import React, { Component } from 'react';
import '../../containers/App.css';

class Header extends Component {


  render() {
    const {
      title = 'Welcome to React'

    } = this.props;

    return (
      <header className="App-header">
        <h1 className="App-title">{title}</h1>
      </header>
    );
  }
}

export default Header;