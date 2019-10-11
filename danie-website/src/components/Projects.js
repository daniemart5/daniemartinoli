import React, { Component } from 'react'
import {withRouter} from "react-router-dom" 

class Projects extends Component {
    render() {
        return (
            <div >
    
                <div>
                <h2>Pickly App</h2>
                <iframe className="projects" alt='Danie' src="https://giphy.com/embed/fwR97SaiuZ4W8hTe2P" width="400" height="300" border-radius="50px"></iframe><p><a href="https://github.com/daniemart5/picklyapp">Github</a></p>
                </div>

                <div className="description">
                <h3>Whats your pick for tonight? An app for helping you find something fun!</h3>
                <h3>Technologies used:</h3>
                <ul>
                    <li>Ruby on Rails</li>
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li>CSS/HTML</li>
                    <li>Adobe XD (for wireframing)</li>
                </ul>
                </div>

                <div>
                <h2>Doggo Adopto</h2>
                <iframe className="projects" alt='Danie' src="https://giphy.com/embed/U6RDsqQidvgwB4tSsV" width="400" height="300" border-radius="50px"></iframe><p><a href="https://github.com/marth00165/mod4-project">Github</a></p>
                </div>

                <div className="description">
                <h3>An adoption website replica with a list of all breeds!</h3>
                <h3>Technologies used:</h3>
                <ul>
                    <li>Ruby on Rails</li>
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li>CSS/HTML</li>
                    <li>Dog CEO API</li>
                </ul>
                </div>

                <div>
                <h2>Dive Slate</h2>
                <iframe className="projects" alt='Danie' src="https://giphy.com/embed/d5StkXHHOcETjGa4lj" width="400" height="300" border-radius="50px"></iframe><p><a href="https://github.com/kargo-k/dive-slate-app">Github</a></p>
                </div>
                
                <div className="description">
                <h3>A website for Scuba Divers and their dive logs</h3>
                <h3>Technologies used:</h3>
                <ul>
                    <li>Ruby</li>
                    <li>CSS/HTML</li>
                    <li>Auth</li>
                </ul>
                </div>

            </div>
        )
    }
}
export default withRouter(Projects);
