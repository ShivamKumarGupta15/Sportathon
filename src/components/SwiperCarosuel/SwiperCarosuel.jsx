import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './SwiperCarosuel.css';
import React,{ useState } from 'react';
 



const SwiperCarosuel = () => {

 

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 2, 
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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

  
  
  return (
    <div >
   
    <div className="container-swiper">
      <div className='carousel-wrapper-swiper'>
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index} className='carousel-item-swiper'>
              <div className='image-wrapper-swiper'>
                <img src={d.img} alt="" className="carousel-image-swiper"   />
              </div>
              <div className='content-wrapper'>
                
              </div>
            </div>
          ))}
        </Slider>
      </div>
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
    img: `https://images.pexels.com/photos/5739122/pexels-photo-5739122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
    review: `13 March 2024`
  },
  {
    name: `chess`,
    img: `https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=800`,
    review: `14 march 2024`
  },
  {
    name: `tabletennis`,
    img: `https://images.pexels.com/photos/15534877/pexels-photo-15534877/free-photo-of-men-playing-table-tennis.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
    review: `15 march 2024`
  },
];

export default SwiperCarosuel;