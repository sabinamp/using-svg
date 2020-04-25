import React from 'react';
import './App.css';
import Home from '../components/Home'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer';
import Content from '../components/layout/Content';

function App() {
  return (
    <div className="App">
      <Header title="Integrate SVG animation into React" />
      <Content>
        <Home />
      </Content>
      <Footer />
    </div>
  );
}

export default App;
