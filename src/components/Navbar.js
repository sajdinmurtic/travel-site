import React, { useState } from 'react'
import { Link} from 'react-router-dom'

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo">Travel
                </Link>

           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
               <li className="item">
                   <Link to="/" 
                   className="nav-links"
                   onClick={handleClick}>
                       Home
                   </Link>
                   </li>

                   <li className="item">
                   <Link to="/about"
                   className="nav-links"
                   onClick={handleClick}>
                       About
                   </Link>
                   </li>
                   <li className="item">
                   <Link to="/services" 
                   className="nav-links"
                   onClick={handleClick}>
                       Services
                   </Link>
                   </li>
                   <li className="item">
                   <Link to="/contact" 
                   className="nav-links"
                   onClick={handleClick}>
                       Contact
                   </Link>
                   </li>
           </ul>
          <div className="menu-icon" onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        </div>
        </nav>
    )
}

export default Navbar