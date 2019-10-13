import React, { Component } from 'react'
import {withRouter} from "react-router-dom"

class Blogs extends Component {

    render() {
        const url = 'https://medium.com/@daniemart5'
        return (
        <div className="blogbox">
            <h1>BLOGS</h1>
            <div className='blogbox'>
                <iframe width="950" height="550" className="blogs" src={url}/> 
            </div>
        </div>
        )
    }
}
export default withRouter(Blogs);
