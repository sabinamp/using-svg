import React from 'react';
import './App.css';

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer';
import Content from '../components/layout/Content';

import SVGAnimationContainer2 from './SVGAnimContainer2';
import SVGAnimContainer1 from './SVGAnimContainer1';



function App() {
  return (
    <div className="App">
      <Header title="Integrate SVG animation into React" />
      <Content>
        <>
          <SVGAnimContainer1 />
          <SVGAnimationContainer2 />
        </>
      </Content>
      <Footer />
    </div>
  );
}

export default App;
