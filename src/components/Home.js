import React, { Component } from 'react';
import './Home.css'
import SignatureR from './signature/SignatureR';
export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1> SVG Signature Animation</h1>
        <p>
          the Signature React component  behaves as a wrapper for my signature Web Component.
        </p>
        <SignatureR strokewidth="2.5" fillcolor="#86f1ef" bkgcolor="#222" strokeopacity="1" />
        <SignatureR strokewidth="2.5" fillcolor="#f6c90e" bkgcolor="#3a4750" strokeopacity="1" />
        <SignatureR strokewidth="2.5" fillcolor="#d6f6f2" bkgcolor="#303841" strokeopacity="1" />
      </div>)
  }
}