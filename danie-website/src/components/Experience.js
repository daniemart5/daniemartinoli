import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
import starbs from './pics/starbuckslogo.png'
import premera from './pics/premeralogo.png'
import galaxy from './pics/galaxylogo.jpeg'
import fred from './pics/fredmeyerlogo.png'
import tea from './pics/everythingtea.jpeg'

class Experience extends Component {
    render() {
        return (
        <div className="content">
            <img className='logo' src={starbs} alt="starbucks logo" />
            <div className="experience">
            <h3>Starbucks</h3> 
                <h3>Barista Trainer/Shift Supervisor, Oct 2014 - Dec 2016 (WA)</h3> 
                <h3>Barista, Nov 2018 - Feb 2019 (TX)</h3>
                <p>+ Recognized for exceptional customer service, craftsmanship, product knowledge and teamwork with Green Apron Award for being considerate as well as the distinction of being a Barista Champion</p>
                <p>+ Created exceptional results in areas such as upselling, encouraging the development of partner skills and multitasking roles</p>
                <p>+ Trained dozens of baristas with the rare distinction of being allowed to train multiple individuals at once</p>
                <p>+ Managed tracking of inventory, receiving and processing product orders, counting and deposit preparation of large sums of cash, interfacing with multiple internal programs, and educating confused customers about customer-facing programs</p>
            </div>

            <img className='logo' src={premera} alt="premera blue cross logo" />
            <div className="experience">
            <h3>Premera Blue Cross</h3>
                <h3>Customer Service, Claims Associate, Dec 2016 - July 2018</h3>
                <p>+ Demonstrated depth of understanding the story, and background process of a claim which led to unusually fast resolution times for large volumes of claims</p>
                <p>+ Specialized in claims relating to large clients like Microsoft and Amazon, which required special training and strict performance guarantees</p>
                <p>+ Coordinated problem solving by interfacing with patients, providers, and administrators as well as steeping myself in medical policy and documentation</p>
                <p>+ Communicated effectively with team members to address areas that needed special attention when areas that needed special attention arose</p>
                <p>+ Took on many extra projects with manager while maintaining high production of claims</p>
            </div>

            <img className='logo' src={galaxy} alt="galaxy theaters logo" />
            <div className="experience">
            <h3>Galaxy Theaters</h3>
                <h3>Floor Staff, Mar 2012 – Jul 2014</h3>
                <p>+ Directed people where to go, did cleaning tasks such as popcorn spills, took orders and used the register</p>
                <p>+ Worked as a team member and lead newer co-workers during high customer volume</p>
                <p>+ Helped with the implementation of a rewards program and spent extra time promoting and signing people up for the new program</p>
            </div>

            <img className='logo' src={fred} alt="fred meyer logo" />
            <div className="experience">
            <h3>Fred Meyer</h3>
                <h3>Front End Cashier, Oct 2012 – Dec 2013</h3>
                <p>+ Placed merchandise in designated areas, organized product, customer service, worked the register while in the front end, worked towards the recovery of a product by helping loss prevention.</p>
                <p>+ Earned 3 “Excellent Customer Service” awards.</p>    
            </div>

            <img className='logo' src={tea} alt="everything tea in snohomish"/>
            <div className="experience">
            <h3>Everything Tea</h3>
                <h3>Part Time Help, Dec 2009 – Aug 2011</h3>
                <p>+ Helped people decided which Tea they wanted, and put their order together</p>
                <p>+ Gained an extreme knowledge of tea</p>
                <p>+ Would dust and clean the store</p>
                <p>+ Counted the till down and prepared deposits</p>
            </div>
        </div>
        )
    }
}
export default withRouter(Experience); 
