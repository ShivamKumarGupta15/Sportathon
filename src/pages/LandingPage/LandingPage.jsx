import React,{ useEffect } from 'react'
// import Button from '@mui/material/Button';
import "../LandingPage/LandingPage.css"
import Carosuel from '../../components/Carosuel/Carosuel'
import Services from '../../components/OurServices/Services'
import SwiperCarosuel from '../../components/SwiperCarosuel/SwiperCarosuel'

const LandingPage = () => {

  // const refreshAccessToken = async () => {
  //   const refreshToken = localStorage.getItem("refreshToken");
  //   const data = {
  //     token: refreshToken,
  //   };
 
  //   try {
  //     const response = await fetch(
  //       "http://localhost:8081/api/v1/auth/refresh",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(data),
  //       }
  //     );
 
  //     if (response.ok) {
  //       const responseData = await response.json(); // Parse JSON response
  //       const accessToken = responseData.accessToken; // Access accessToken from parsed response
  //       localStorage.setItem("accessToken", accessToken); // Store new accessToken
  //       return true;
  //     } else {
  //       console.log("error");
  //       return false;
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     return false;
  //   }
  // };

  // useEffect(() => {
  //   const checkAndRefreshToken = async () => {
  //     if (isAccessTokenExpired()) {
  //       await refreshAccessToken();
  //     }
  //   };
 
    // Check and refresh token every 15 seconds (adjust as needed)
    // const intervalId = setInterval(checkAndRefreshToken, 15 * 1000);
 
    // Cleanup interval on component unmount
  //   return () => clearInterval(intervalId);
  // }, []);
 
  // const isAccessTokenExpired = () => {
  //   return true;
  // };

  return (
    <>
    <div className="landing-page">
   
    <h1>"You were born to be a player. You were meant to be here!"</h1>
    <p>
      We're here to provide our customers with the highest quality of service.
      With our dedication to customer satisfaction, you can rest assured that
      you will have a great experience.
    </p>
    
    
  </div>
  <Carosuel />
  <Services />
  <SwiperCarosuel />
  </>
  )
}

export default LandingPage


 
    
