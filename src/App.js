import React from 'react';
import './App.css';
import Header from './Header';
import Search from './Search';
import Body from './Body';
import Footer from './Footer';
import MobileFooter from './MobileFooter';
import SearchPage from './SearchPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div style={{backgroundImage:"url(https://a0.muscache.com/im/pictures/48738093-5bae-4223-9cab-aa1be937305f.jpg)"}} className="app">
      <Router>
      <Header />
      <Switch>

      <Route path="/search">
        <SearchPage />
      </Route>

      <Route path="/">
      <Search/>
      <Body /> 
      </Route>


      </Switch>
      </Router>
      <Footer />
      <MobileFooter />
    </div>




  );
}

export default App;
