import React, { Component } from 'react';
import '../../containers/App.css';
import PropTypes from 'prop-types';
class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    const { title } = this.props;

    return (
      <header className="App-header">
        <h1 className="App-title">{title}</h1>
      </header>
    );
  }
}

export default Header;