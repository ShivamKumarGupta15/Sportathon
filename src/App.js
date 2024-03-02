import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Carosuel from './components/Carosuel/Carosuel'
import LandingPage from './pages/LandingPage/LandingPage'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Carosuel />
      <Footer />
    </div>
  )
}

export default App