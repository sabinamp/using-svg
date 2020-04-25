import React, { Component } from 'react';
import './Header.css';
import PropTypes from 'prop-types';
class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    const { title } = this.props;

    return (
      <header className="Header">
        <h1>{title}</h1>
      </header>
    );
  }
}

export default Header;