import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const LogoSlider = () => {
  const logos = [
    {
      name: 'DSTV',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/DSTV.png',
    },
    {
      name: 'GOTV',
      logoUrl: 'https://getlogo.net/wp-content/uploads/2021/05/gotv-nigeria-logo-vector.png',
    },
    {
      name: 'Startimes',
      logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvrQLQdIifPv-sVSardAlZMLigN8ptTZA32Q&s',
    },
    {
      name: 'Showmax',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Showmax_Logo.png',
    },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Adjust based on how many logos you want to show
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // Adjust for smaller screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="logo-slider-container">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="logo-item">
            <img
              src={logo.logoUrl}
              alt={logo.name}
              className="logo-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoSlider;
