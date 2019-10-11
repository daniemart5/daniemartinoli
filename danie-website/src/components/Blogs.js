import React, { Component } from 'react'
import {withRouter} from "react-router-dom"

class Blogs extends Component {

    render() {
        const url = 'https://medium.com/@daniemart5'
        return (
            <div>

            <h1>Check these out!</h1>

            <iframe width="950" height="550" className="blogs" src={url}/> 

            </div>
        )
    }
}
export default withRouter(Blogs);
