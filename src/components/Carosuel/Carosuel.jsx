import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carosuel.css';
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom'; 
=======
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
>>>>>>> f7b4749b0e4bde69a27a1f9241fcc0785e50f1c7
import Services from "../OurServices/Services";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import cricket from "../../Assets/pexels-patrick-case-3800517.jpg"
import chess from "../../Assets/pexels-pixabay-260024.jpg"
import BasketBall from '../../Assets/pexels-img-števonka-2116469.jpg'
import tennis from '../../Assets/pexels-florian-doppler-3207474.jpg'
import football from '../../Assets/pexels-robo-michalec-12266719.jpg'
import tabletennis from '../../Assets/pexels-martina-martinez-16686174.jpg'


const Carosuel = () => {

  const [selectedSport, setSelectedSport] = useState(null);
<<<<<<< HEAD
  const[registreredSports, setRegisteredSports]=useState([])
  const navigate = useNavigate(); 
=======
  const navigate = useNavigate();
  


  const [individualRegistrationData, setIndividualRegistrationData] = useState([]);
  const [teamRegistrationData, setTeamRegistrationData] = useState([]);
  const [sapId,setSapId]=useState(localStorage.getItem("sapid"));

  useEffect(() => {
    // const sapid = localStorage.getItem('sapid');
    // if (sapId) {
      const individualApiUrl = `http://localhost:8083/registrations/data/${sapId}`;
      const teamApiUrl = `http://localhost:8083/teams/captaindata/${sapId}`;

      fetch(individualApiUrl)
        .then((response) => response.json())
        .then((data) => {
          console.log("Data of individual", data);
          setIndividualRegistrationData(data.Individual_sport);
        })
        .catch((error) => {
          console.error('Individual registration data error:', error);
        });

      fetch(teamApiUrl)
        .then((response) => response.json())
        .then((data) => {
          console.log("Data of team", data);
          setTeamRegistrationData(data.Team_sport);
        })
        .catch((error) => {
          console.error('Team registration data error:', error);
        });
    // }
    // const sapId=localStorage.getItem("sapid")
  }, [sapId,individualRegistrationData,teamRegistrationData]);


>>>>>>> f7b4749b0e4bde69a27a1f9241fcc0785e50f1c7

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const handleClick = (sports) => {
    console.log("sports", sports);
    if (sports === "chess" || sports === "tabletennis" || sports === "tennis") {
    
      // Check if the access token exists in localStorage
      const accessToken = localStorage.getItem("accessToken");
<<<<<<< HEAD
      const athelete  = {
            sapid:localStorage.getItem('sapid'),
            name: localStorage.getItem('name'),
            sport:sports
        }
        fetch("http://localhost:8083/registrations", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(athelete),
              })
           
              .then(async (response) => {
                if (!response.ok) {
                  console.log("sak",response);
                  setRegisteredSports(prev => [...prev, sports]);
                  throw new Error("Already Registered.");
                }
                // Parse the response as JSON
                return response.json();
              })
              .then((athlete) => {
                // Handle the response from your API
                console.log("success");
                toast.success("Registration successful");
                navigate("/");
                console.log(athlete);
              })
              .catch((error) => {
                console.error("Registration error:", error);
                if (error.response && error.response.status === 400) {
                  toast.error("Already Registered");
                } else {
                  toast.error("Already Registered");
                }
              });
        
               
  
=======
      const athelete = {
        sapid: localStorage.getItem('sapid'),
        name: localStorage.getItem('name'),
        sport: sports
      }
      fetch("http://localhost:8083/registrations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `${localStorage.getItem("accessToken")}`
        },
        body: JSON.stringify(athelete),
      })

        .then(async (response) => {
          // if (!response.ok) {
          //   throw new Error("Already Registered.1");
          // }
          if (response.status === 409) {
            toast("Already Registered")
            console.log("Already Registered", response.status)
          }
          if (response.status === 401) {
            // toast("Please Login")
            console.log("Invalid Status", response.status)
          }
          if (response.status === 400) {
            toast("bad request ")
            console.log("bad request", response.status)
          }
          if (response.status === 201) {
            toast("Registeration Successfull ")
            console.log("Registeration Successfull", response.status)
          }

          // Parse the response as JSON
          return response.json();
        })
        
        .catch((error) => {
          console.error("Registration error:", error);
          
        });




>>>>>>> f7b4749b0e4bde69a27a1f9241fcc0785e50f1c7
      if (accessToken) {
        const name = localStorage.getItem("name");
        const sapid = localStorage.getItem("sapid");


      } else {
        // Navigate to the login page
        navigate("/Login");
      }
    } else {
      // Check if the access token exists in localStorage
      const accessToken = localStorage.getItem("accessToken");

      if (accessToken) {
        // Navigate to the form for other sports
        setSelectedSport(sports);
        navigate(`/form/${sports}`);
      } else {
        // Navigate to the login page
        navigate("/Login");
      }
    }
  };

  
  const isSportRegistered = (sport) => {
    return (
      individualRegistrationData.includes(sport) || teamRegistrationData.includes(sport)
    );
  };

  return (
    <div >
<<<<<<< HEAD
    <div className="container2">
      <div className='carousel-wrapper'>
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index} className='carousel-item'>
              <div className='image-wrapper'>
                <img src={d.img} alt="" className="carousel-image"  onClick={()=>handleClick(d.name)} />
              </div>
              <div className='content-wrapper'>
                <p className="name">{d.name}</p>
                <p className="review">{d.review}</p>
                <h3 className="review"> {d.SportsType}</h3>
{    registreredSports.includes(d.name) ? (<h3>Already Registered</h3>)  :(        <button className='read-more' onClick={()=>handleClick(d.name)}  > Participate</button>)}
            
=======
      <div className="container2">
        <div className='carousel-wrapper'>
          <Slider {...settings}>
            {data.map((d, index) => (
              <div key={index} className='carousel-item'>
                <div className='image-wrapper'>
                  <img src={d.img} alt="" className="carousel-image" onClick={() => handleClick(d.name)} />
                </div>
                <div className='content-wrapper'>
                  <p className="name">{d.name}</p>
                  <p className="review">{d.review}</p>
                  <p className="review">{d.type}</p>
                  {isSportRegistered(d.name) ? (
                    <p className="already-registered">Already Registered</p>
                  ) : (

                    <button className='read-more' onClick={() => handleClick(d.name)}  > Participate</button>
                  )}

                </div>

>>>>>>> f7b4749b0e4bde69a27a1f9241fcc0785e50f1c7
              </div>
            ))}
          </Slider>
        </div>
        <ToastContainer />
      </div>
      {/* <Services /> */}

    </div>

  )
}

const data = [
  {
    name: `Cricket`,
<<<<<<< HEAD
    img: `https://images.pexels.com/photos/3800517/pexels-photo-3800517.jpeg?auto=compress&cs=tinysrgb&w=800`,
    review: `26 march 2024`,
    SportsType:`Team Sport`
  },
  {
    name: `BasketBall`,
    img: `https://images.pexels.com/photos/2116469/pexels-photo-2116469.jpeg?auto=compress&cs=tinysrgb&w=800`,
    review: `27 march 2024`,
    SportsType:`Team Sport`
  },
  {
    name: `Football`,
    img: `https://images.pexels.com/photos/264312/pexels-photo-264312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
    review: `28 march 2024`,
    SportsType:`Team Sport`
  },
  {
    name: `tennis`,
    img: `https://images.pexels.com/photos/3207474/pexels-photo-3207474.jpeg?auto=compress&cs=tinysrgb&w=800`,
    review: `29 March 2024`,
    SportsType:`Individual`
  },
  {
    name: `chess`,
    img: `https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=800`,
    review: `30 march 2024`,
    SportsType:`Individual`
  },
  {
    name: `tabletennis`,
    img: `https://images.pexels.com/photos/18511482/pexels-photo-18511482/free-photo-of-ping-pong-ball-and-rackets.jpeg?auto=compress&cs=tinysrgb&w=800`,
    review: `31 march 2024`,
    SportsType:`Individual Sports`
=======
    img: cricket,
    review: `19 April 2024`,
    type: `Team Sports`
  },
  {
    name: `BasketBall`,
    img: BasketBall,
    review: `18 April 2024`,
    type: `Team Sports`
  },
  {
    name: `Football`,
    img: football,
    review: `21 April 2024`,
    type: `Team Sports`
  },
  {
    name: `tennis`,
    img: tennis,
    review: `23 April 2024`,
    type: `Individual Sports`
  },
  {
    name: `chess`,
    img: chess,
    review: `25  April 2024`,
    type: `Individual Sports`
  },
  {
    name: `tabletennis`,
    img: tabletennis,
    review: `28 April 2024`,
    type: `Individual Sports`
>>>>>>> f7b4749b0e4bde69a27a1f9241fcc0785e50f1c7
  },
];

export default Carosuel;