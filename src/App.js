import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Carosuel from './components/Carosuel/Carosuel.jsx'
import LandingPage from './pages/LandingPage/LandingPage.jsx'
import Footer from './components/Footer/Footer.jsx'
import CommonForm from "./components/CommonForm/CommonForm.jsx"
import SignUp from './pages/SignUp/SignUp.jsx';
import LoginForm from './pages/Login/Login.jsx';
import Admin from './pages/Admin/Admin.jsx';
import LeaderBoard from './pages/Leader/LeaderBoard.jsx'



const App = () => {
  return (
    <div className="App">
    <Navbar />
  
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/SignUp" element={<SignUp />} />
      
      <Route path="/Login" element={<LoginForm/>} />
      <Route path="/Admin" element={<Admin/>} />
      <Route path="/LeaderBoard" element={<LeaderBoard/>} />
      <Route path="/form/:sport" element={<CommonForm />} />
    </Routes>
 
  
  <Footer />

  
  
  </div>
  )
}

export default App