import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import NavBar from './Components/Navbar/NavBar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import Settings from './Components/Settings/Settings';
import Music from './Components/Music/Music';
import News from './Components/News/News';
import { Route, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <div className="app_wrapper_content">
          <Route path='/Dialogs' component={Dialogs}/>
          <Route path='/Settings' component={Settings}/>
          <Route path='/Music' component={Music}/>
          <Route path='/News' component={News}/>
          <Route path='/Profile' component={Profile}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
