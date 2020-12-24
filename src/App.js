import React from 'react';
import './App.css';
import Header from './Header';
import Search from './Search';
import Body from './Body';
import Footer from './Footer';
import MobileFooter from './MobileFooter';

function App() {
  return (
    <div className="app">
      <div className="app_body">
      <Header />
      <Body /> 
      <Footer />
      <MobileFooter />
      </div>

    </div>



  );
}

export default App;
