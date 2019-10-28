import React, { Component } from 'react'

class Travels extends Component {
    render() {
        return (
        <div className="content">
            <div className='travel'>
                <h1>My Travels 🌎</h1>
                <p>Outside of my professional life I enjoy traveling the world with my hubby nick!</p>
                <p>Here are some of my favorite pictures:</p>

                <h3>Show gallery of pictures here</h3>
                <h3>Places I have been</h3>

                <h4>US Cities</h4>
                <ul>
                    <li>Portland, Oregon</li>
                    <li>Boise, Idaho</li>
                    <li>San Diego, California</li>
                    <li>Colorado, Denver</li>
                    <li>Boston, Massachusetts</li>
                    <li>Austin, Texas</li>
                    <li>Kansas City, Missouri</li>
                </ul>

                <h4>International Cities</h4>
                <ul>
                    <li>Brussels, Belguim</li>
                    <li>Ghent and Bruges, Belguim</li>
                    <li>London, England</li>
                    <li>Paris, France</li>
                    <li>Amsterdam, Neitherlands</li>
                    <li>Cancun, Mexico</li>
                </ul>
            </div>

        </div>
        )
    }
}
export default Travels
