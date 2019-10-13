import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import picture from './pics/danieprofilepic.png'
class Home extends Component {
    render() {
        return (
        <div className="content">
            <div className="main">
                <img className="pic" src={picture} alt='Danie'/>
            </div>
        
            <div className="bio">
                <p>
                Hello! I am Danielle Martinoli!
                </p>

                <p>
                Who am I you ask? Well I go by Danie. I am a Seattle Native and an adventurer at heart. Not matter where I am shenangians are always around the corner.
                </p>  

                <p>
                I have a 10 years in Customer Service and Retail and recently changed direction. After trying to make a website on wix, I thought to myself why can't I make it myself? 
                Thus springing to life my journey as a programmer. I started with html and css to make a static webpage and now I have graduated the Software Engineering program through Flatiron School here in the heart of the emerald city. 
                I have just begun but I can't wait to get my feet wet and do some awesome codeing. 

                Thanks for checking out my page! 

                Feel free to check out my social media!
                <br/>
                |<a href="https://github.com/daniemart5/">Github</a>
                |<a href="https://medium.com/@daniemart5"> Blogs</a>
                |<a href="https://www.linkedin.com/in/daniemartinoli/">LinkedIn</a>|

                </p>
            </div>
        </div>
        )
    }
}
export default withRouter(Home); 
