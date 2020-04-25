import React from 'react';
import './App.css';
import Home from '../components/Home'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer';
import Content from '../components/layout/Content';
import SignatureR from '../components/signature/SignatureR';

function App() {
  return (
    <div className="App">
      <Header title="Integrate SVG animation into React" />
      <Content>
        <>
          <Home />
          <SignatureR strokewidth="2.5" fillcolor="#86f1ef" />
        </>
      </Content>
      <Footer />
    </div>
  );
}

export default App;
