
import React from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import logo from "../../Assets/logo5.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/Login");
  }

  const handleAdmin = () => {
    navigate("/Admin");
  }

  const handleLeaderB = () => {
    navigate("/LeaderBoard");
  }

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem("name");
    navigate('/');
  }

  const accessToken = localStorage.getItem('accessToken');
  const name = localStorage.getItem('name');

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Sportathon Logo" className="logo" />
        <Link to="/" className="brand">Sportath⚽️n</Link>
      </div>

      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open" : ""}>
        <div className="navbar-right">
          <span className='profile'>{name ? `Hi, ${name}` : null}</span>
          <button onClick={accessToken ? handleLogout : handleLogin} className="btn">
            {accessToken ? "Logout" : "Login"}
          </button>

          <button onClick={handleAdmin} className='btn'>Admin</button>
          <button onClick={handleLeaderB} className='btn'>LeaderBoard</button>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
