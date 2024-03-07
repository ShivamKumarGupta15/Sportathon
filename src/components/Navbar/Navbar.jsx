import React from 'react';
import './Navbar.css'; // Import CSS file for styling
import sports from '../../Assets/sports.png'; 
import { Link, NavLink , useNavigate} from 'react-router-dom';
import { useState } from 'react';
import SignUp from '../../pages/SignUp/SignUp';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSign =()=> {
     navigate("/SignUp")
  }
  const handleLogin =()=> {
    navigate("/Login")
 }
 const handleAdmin = ()=> {
   navigate("/Admin")
 }
 const handleLeaderB = () => {
  navigate("/LeaderBoard")
 }
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={sports} alt="Sportathon Logo" className="logo" />
        <Link  to="/"  className="brand" >Sportathon</Link>
      </div>
      {/* <div className="navbar-right">
        <button className="btn">Login</button>
        <button className="btn">Sign Up</button>
      </div> */}
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
      <div className="navbar-right">
        <button onClick={handleLogin} className="btn">Login</button>
        {/* <Link to="/signup" className="btn">Sign Up</Link> */}
        <button onClick={handleSign} className='btn'>SignUp</button>
        <button onClick={handleAdmin} className='btn'>Admin</button>
        <button onClick={handleLeaderB} className='btn'>LeaderBoard</button>
      </div>

      </ul>
    </nav>
  );
}

export default Navbar;