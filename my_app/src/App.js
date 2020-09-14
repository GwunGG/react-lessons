import React from 'react';
import './App.css';
import HeaderContainer from './Components/Header/HeaderContainer';
import NavBar from './Components/Navbar/NavBar';
import ProfileContainer from './Components/Profile/ProfileContainer';
import DialogConteiner from './Components/Dialogs/DialogsWrapper';
import Settings from './Components/Settings/Settings';
import FriendsContainer from './Components/Friends/Friends_container';
import Music from './Components/Music/Music';
import News from './Components/News/News';
import { Route, BrowserRouter } from 'react-router-dom';


function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderContainer />
        <NavBar />
        <div className="app_wrapper_content">
          <Route path='/Dialogs'
            render={() => <DialogConteiner />} />
          <Route path='/Settings'
            render={() => <Settings />} />
          <Route path='/Music'
            render={() => <Music />} />
          <Route path='/News'
            render={() => <News />} />
          <Route path='/Profile/:userId'
            render={() => <ProfileContainer />} />
          <Route path='/Friends'
            render={() => <FriendsContainer />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
