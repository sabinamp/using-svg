import React from 'react';
import './App.css';
import Home from '../components/Home'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer';
import Content from '../components/layout/Content';
import ContainerSVG2 from '../components/ContainerSVG2';


function App() {
  return (
    <div className="App">
      <Header title="Integrate SVG animation into React" />
      <Content>
        <Home />
        <ContainerSVG2 />
      </Content>
      <Footer />
    </div>
  );
}

export default App;
