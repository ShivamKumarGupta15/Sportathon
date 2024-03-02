<<<<<<< HEAD
import React from 'react';
import './Navbar.css'; // Import CSS file for styling
import sports from '../../Assets/sports.png'; 


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={sports} alt="Sportathon Logo" className="logo" />
        <span className="brand">Sportathon</span>
      </div>
      <div className="navbar-right">
        <button className="btn">Login</button>
        <button className="btn">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
=======
import React from 'react'

const Navbar = () => {
  return (
    <div>
      
    </div>
  )
}

export default Navbar
>>>>>>> 1b0a3f0587d0ed78ae02285e6e1bf574ed7b060e
