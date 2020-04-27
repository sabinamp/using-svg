import React from 'react';
import './SVGAnimContainer1.css'
import SignatureR from '../components/svg-signature/SignatureR';

const SVGAnimContainer1 = () => (
  <div className="Container1">
    <h1> SVG Signature Animation. Web Components and React 16.13.1</h1>
    <p>
      The Signature React component  behaves as a wrapper for my svg-signature custom element.
        </p>
    <SignatureR strokewidth="2.5" fillcolor="#86f1ef" bkgcolor="#222" strokeopacity="1" className="section-col1" signaturewidth="30vw" signatureheight="25vh" />
    <SignatureR strokewidth="2.5" fillcolor="#f6c90e" bkgcolor="#3a4750" strokeopacity="1" className="section-col2" signaturewidth="30vw" signatureheight="25vh" />
    <SignatureR strokewidth="2.5" fillcolor="#d6f6f2" bkgcolor="#303841" strokeopacity="1" signaturewidth="30vw" signatureheight="25vh" className="section-col3" />
  </div>)

export default SVGAnimContainer1;
