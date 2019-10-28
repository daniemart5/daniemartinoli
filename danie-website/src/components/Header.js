import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    
    return (
      <div className="header">
        <h2>Danielle Martinoli</h2>
          <Link to='/'>Home </Link>
          | <Link to='/experience'>Experience </Link>
          | <Link to='/projects'>Projects </Link>
          | <Link to='/blogs'>Blogs </Link>
          | <Link to='/travels'>Travels </Link>
      </div>   
    )
}
 
export default Header;