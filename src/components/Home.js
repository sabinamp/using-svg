import React, { Component } from 'react';
import './Home.css'
import SignatureR from './signature/SignatureR';
export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1> SVG animation</h1>

        <p>
          the SVG animation added as a Web Component
        </p>
        <SignatureR strokewidth="2.5" fillcolor="#86f1ef" bkgcolor="#222" />
      </div>)
  }
}