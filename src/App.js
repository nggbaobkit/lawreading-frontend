import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import logo from './logo.svg';
import './styles/App.css';

import NavMenu from './components/Templates/NavMenu.js';
import Container from './components/Templates/Container.js';
import Footer from './components/Templates/Footer.js';

class App extends React.Component {
  state = { myLink:"" }

  render() {
    return (
    <Router>
      <div className="">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <span className="banner-text">Sao lại đọc khi bạn có thể nghe?</span>
          <span className="banner-text2">Your pocket law speaker</span>
        </header>
        <NavMenu />
        <Container />
        <Footer />
      </div>
    </Router>  
    )};
}

export default App;
