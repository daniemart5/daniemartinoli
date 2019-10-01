import React, { Component } from 'react'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="main">
        <div className="danie">
          <header className="header">Danielle (Danie) Martinoli</header>
          <h2>Danielle Martinoli</h2>

          <h1>Smooth Scroll</h1>

            <div className="main" id="section1">
              <h2>Section 1</h2>
              <p>Click on the link to see the "smooth" scrolling effect.</p>
              <a href="#section2">Click Me to Smooth Scroll to Section 2 Below</a>
              <p>Note: Remove the scroll-behavior property to remove smooth scrolling.</p>
            </div>
          <p>Shes the coolest cat around</p>
          <ul>Hi! I am Danie.
            <li>Seattle Native</li>
            <li>Cat parent.</li> 
            <li>Wifey.</li> 
            <li>Tea Expert.</li> 
            <li>Left handed drummer.</li> 
            <li>World Traveler.</li> 
            <li>All around optimistic woman.</li>
          </ul>  
        </div>
 
            <div className="main" id="section2">
              <h2>Section 2</h2>
              <a href="#section1">Click Me to Smooth Scroll to Section 1 Above</a>
            </div>

      </div>
    )
  }
}


