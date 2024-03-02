import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Carosuel.css';
import React from 'react';

const Carosuel = () => {
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
  const handleClick=(sports)=>{
    console.log("sports",sports)
  }
  
  return (
    <div>
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
    </div>
  )
}

const data = [
  {
    name: `Cricket`,
    img: `https://images.pexels.com/photos/3800517/pexels-photo-3800517.jpeg?auto=compress&cs=tinysrgb&w=800`,
    review: `10 march 2024`
  },
  {
    name: `BasketBall`,
    img: `https://images.pexels.com/photos/2116469/pexels-photo-2116469.jpeg?auto=compress&cs=tinysrgb&w=800`,
    review: `11 march 2024`
  },
  {
    name: `Football`,
    img: `https://images.pexels.com/photos/264312/pexels-photo-264312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
    review: `12 march 2024`
  },
  {
    name: `tennis`,
    img: `https://images.pexels.com/photos/3207474/pexels-photo-3207474.jpeg?auto=compress&cs=tinysrgb&w=800`,
    review: `13 March 2024`
  },
  {
    name: `chess`,
    img: `https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=800`,
    review: `14 march 2024`
  },
  {
    name: `tabletennis`,
    img: `https://images.pexels.com/photos/18511482/pexels-photo-18511482/free-photo-of-ping-pong-ball-and-rackets.jpeg?auto=compress&cs=tinysrgb&w=800`,
    review: `15 march 2024`
  },
];

export default Carosuel;