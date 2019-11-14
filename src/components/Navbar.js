import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return(
    <nav className="nav-wrapper pink darken-3">
      <div className="container">
        <div className="brand-logo">React Redux Practice</div>
          <ul className="right">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
      </div>
    </nav>
  )
}

export default Navbar