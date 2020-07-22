import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import NavBar from './Components/Navbar/NavBar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import Settings from './Components/Settings/Settings';
import Friends from './Components//Friends/Friends';
import Music from './Components/Music/Music';
import News from './Components/News/News';
import { Route, BrowserRouter } from 'react-router-dom';


function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <div className="app_wrapper_content">
          <Route path='/Dialogs' render={()=><Dialogs DialogsData={props.state.Dialogs}/>}/>
          <Route path='/Settings' render={()=><Settings/>}/>
          <Route path='/Music' render={()=><Music/>}/>
          <Route path='/News' render={()=><News/>}/>
          <Route path='/Profile' render={()=><Profile PostData={props.state.Profile}/>}/>
          <Route path='/Friends' render={()=><Friends />}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
