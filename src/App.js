import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Display from '../src/components/DisplayPage/Display'
import HeaderBar from './components/Header/HeaderBar'
import PageTitle from '../src/components/PageTitle/PageTitle'
import './App.css'
const App = () => {
  
  return  (
      <div>
      <HeaderBar />
      <PageTitle className="title" />
          <Switch>
            <Route exact path="/" component={Display} />
          </Switch>
      </div>
  )
};

export default App;
