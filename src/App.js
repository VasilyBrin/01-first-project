import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
// import DialogItem from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/profile" component={Profile} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/setting" component={Setting} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
