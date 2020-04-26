import React from 'react';
import './SVGAnimContainer2.css'
import SignatureR2 from '../components/svg-signature/SignatureR2';

const SVGAnimationContainer2 = () => (

  <div className="Container2">
    <h1> SVG Signature Animation</h1>
    <p>
      The 2nd Version of the Signature React component is a React only component.
        </p>

    <SignatureR2 strokewidth="3" fillcolor="#1b3c59" bkgcolor="#e7ffe3" strokeopacity="1" className="section-col1" />
    <SignatureR2 strokewidth="3.5" fillcolor="#1b3c66" bkgcolor="#8ea6b4" strokeopacity="0.7" className="section-col2" />
  </div>

);
export default SVGAnimationContainer2;