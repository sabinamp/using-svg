import React from 'react';
import './SVGAnimContainer2.css'
import SignatureR2 from '../components/svg-signature/SignatureR2';

const SVGAnimationContainer2 = () => (

  <div className="Container2">
    <h1> SVG Signature Animation. React 16.13.1.</h1>
    <p>
      The 2nd Version of the SVG Signature React component is a wrapper for the SVG content.
    </p>

    <SignatureR2 strokewidth="3.5" fillcolor="#1b3c59" bkgcolor="#e7ffe3" strokeopacity="1" className="section-col1" signaturewidth="42vw" signatureheight="35vh" />
    <SignatureR2 strokewidth="2.7" fillcolor="#1b3c66" bkgcolor="#8ea6b4" strokeopacity="0.6" className="section-col2" signaturewidth="42vw" signatureheight="35vh" />
  </div>

);

export default SVGAnimationContainer2;