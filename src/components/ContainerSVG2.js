import React, { Component } from 'react';
import './Home.css'
import SignatureR from './signature/SignatureR';
export default class ContainerSVG2 extends Component {
  render() {
    return (
      <div className="Home">
        <h1> SVG animation</h1>
        <p>
          the SVG animation added as a Web Component
        </p>
        <SignatureR strokewidth="2.5" fillcolor="#d6f6f2" bkgcolor="#303841" strokeopacity="1" />

      </div>)
  }
}