import React from 'react';
import './App.css';
import Home from '../components/SVGAnimContainer1'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer';
import Content from '../components/layout/Content';
import SignatureR2 from '../components/signature/SignatureR2';
import SVGAnimationContainer2 from '../components/SVGAnimContainer2';



function App() {
  return (
    <div className="App">
      <Header title="Integrate SVG animation into React" />
      <Content>
        <>
          <Home />
          <SVGAnimationContainer2 />
        </>
      </Content>
      <Footer />
    </div>
  );
}

export default App;
