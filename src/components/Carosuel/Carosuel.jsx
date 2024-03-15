import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Carosuel.css';
import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Services from "../OurServices/Services";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Carosuel = () => {

  const [selectedSport, setSelectedSport] = useState(null);
  const navigate = useNavigate(); 

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
        
                // .then((response) => {
                //   console.log("sagar",response.status);
                
                //    if(response.status===400){
                //    toast.error("Already Registered")
                //   }
                //   // Parse the response as JSON
                //   return response.json();
                // })
                // .then((athelete) => {
                //   // Handle the response from your API
                //   console.log("success");
                //   toast.success("Registraion successfull ")
                //   navigate("/")
                //   console.log(athelete);
                
                // })
                // .catch((error) => {
                 
                //   console.error("Sign-in  1error:", error);
                //   if (error.response === 400) {
                //     toast.error("Already Registered2")
                //   }
                //   // You can set an error state here to display an error message to the user
                // });
        
  
      if (accessToken) {
        const name = localStorage.getItem("name");
        const sapid = localStorage.getItem("sapid");
  
        // console.log("Logging sport:", sports, name, sapid);
        // toast.success("Registration successful!", {
        //   position: "top-center",
        //   autoClose: 3000,
        // });
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
  
  
  
  return (
    <div >
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
                <button className='read-more' onClick={()=>handleClick(d.name)}  > Participate</button>
            
              </div>
             
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
    img: `https://images.pexels.com/photos/3800517/pexels-photo-3800517.jpeg?auto=compress&cs=tinysrgb&w=800`,
    review: `26 march 2024`
  },
  {
    name: `BasketBall`,
    img: `https://images.pexels.com/photos/2116469/pexels-photo-2116469.jpeg?auto=compress&cs=tinysrgb&w=800`,
    review: `27 march 2024`
  },
  {
    name: `Football`,
    img: `https://images.pexels.com/photos/264312/pexels-photo-264312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
    review: `28 march 2024`
  },
  {
    name: `tennis`,
    img: `https://images.pexels.com/photos/3207474/pexels-photo-3207474.jpeg?auto=compress&cs=tinysrgb&w=800`,
    review: `29 March 2024`
  },
  {
    name: `chess`,
    img: `https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=800`,
    review: `30 march 2024`
  },
  {
    name: `tabletennis`,
    img: `https://images.pexels.com/photos/18511482/pexels-photo-18511482/free-photo-of-ping-pong-ball-and-rackets.jpeg?auto=compress&cs=tinysrgb&w=800`,
    review: `31 march 2024`
  },
];

export default Carosuel;