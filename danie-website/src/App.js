import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Header from './components/Header.js';
import Home from './components/Home.js';
import Experience from './components/Experience.js';
import Projects from './components/Projects.js';
import Blogs from './components/Blogs.js';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header/> 
        <div className="danie">    
          <Route exact path = "/" component = {Home}/> 
          <Route path = "/experience" component = {Experience}/>
          <Route path = "/projects" component = {Projects}/>
          <Route path = "/blogs" component = {Blogs}/>
        </div>
     
      </BrowserRouter>
    )
  }
} export default App; 


