
import React from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import logo from "../../Assets/logo5.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
<<<<<<< HEAD
=======


  
>>>>>>> f7b4749b0e4bde69a27a1f9241fcc0785e50f1c7
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/Login");
  }
<<<<<<< HEAD

  const handleAdmin = () => {
    navigate("/Admin");
  }
=======
  const handleLogin =()=> {
    navigate("/Login")
 }
 const handleAdmin = ()=> {
   navigate("/Admin")
 }
 const handleLeaderB = () => {
  navigate("/LeaderBoard")
 }
 const handleLogout = () => {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('sapid')
  localStorage.removeItem('refreshToken')
  localStorage.removeItem("name")
  window.location.reload();
  navigate('/')
  // localStorage.removeItem('name')
>>>>>>> f7b4749b0e4bde69a27a1f9241fcc0785e50f1c7

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
<<<<<<< HEAD

      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
=======
      
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
      <div className="navbar-right">
      <span className='profile'> { name? `Hi ,${name}`: null}</span>
        <button onClick={accessToken ? handleLogout : handleLogin} className="btn">{accessToken ? "Logout": "Login"}</button>
        
        <button onClick={handleLeaderB} className='btn'>LeaderBoard</button>
>>>>>>> f7b4749b0e4bde69a27a1f9241fcc0785e50f1c7
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
