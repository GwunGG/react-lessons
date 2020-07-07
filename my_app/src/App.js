import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import NavBar from './Components/Navbar/NavBar';
import Content from './Components/Content/Content';


function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Content />
    </div>
  );
}

export default App;
