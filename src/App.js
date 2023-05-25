import React from 'react';
import {  Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import UserStats from './Components/UserStatus';
import Repositories from './Components/Reprositories';
import RepoStats from './Components/Repostatus';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
   
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/user/:username" component={UserStats} />
        <Route exact path="/user/:username/repositories" component={Repositories} />
        <Route exact path="/repo/:owner/:repoName" component={RepoStats} />
      </Switch>
   
  );
}

export default App;
