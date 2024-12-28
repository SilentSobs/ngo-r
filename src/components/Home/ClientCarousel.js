import React from 'react';
import  './styles/ClientCarousel.css'
import OwlCarousel from 'react-owl-carousel';

const ClientCarousel = () => {
  const carouselOptions = {
    items: 4, // Show 4 items
    margin: 50, // Adjust the margin between items
    smartSpeed: 700,
    loop: true,
    autoplayTimeout: 6000,
    autoplay: true,
    center: true, // Centers the items
    nav: true, // Enable navigation buttons
    dots: false, // Disable dots
    navText: [
      '<span class="custom-nav-arrow icon-arrow-left"></span>',
      '<span class="custom-nav-arrow icon-arrow-right"></span>',
    ],
    responsive: {
      0: {
        items: 2,
        margin: 30,
      },
      768: {
        items: 3,
        margin: 40,
      },
      1200: {
        items: 4,
        margin: 50,
      },
    },
  };

  const logos = [
    { src: 'assets/images/LOGO\'s/Clubfoot logo.jpg', alt: 'Clubfoot Solutions' },
    { src: 'assets/images/team/8.jpeg', alt: 'Connect For' },
    { src: 'assets/images/team/4.jpeg', alt: 'DonateKart' },
    { src: 'assets/images/team/10.jpeg', alt: 'Give India' },
    { src: 'assets/images/team/2.jpeg', alt: 'Income Tax Department' },
    { src: 'assets/images/team/6.jpeg', alt: 'India GuideStar' },
    { src: 'assets/images/LOGO\'s/Karmpoints logo.jpg', alt: 'KarmPoints' },
    { src: 'assets/images/team/1.jpeg', alt: 'Ministry of corporate affairs' },
    { src: 'assets/images/team/12.jpeg', alt: 'Rise Against Hunger' },
    { src: 'assets/images/team/9.jpeg', alt: 'Rotaract' },
    { src: 'assets/images/team/5.jpeg', alt: 'Rotaract' },
    { src: 'assets/images/team/13.jpeg', alt: 'Rotary' },
    { src: 'assets/images/LOGO\'s/United NGO logo.jpg', alt: 'United NGO club' },
  ];

  return (
    <div className="client-carousel">
      <div className="container">
        <OwlCarousel className="client-carousel__one owl-theme" {...carouselOptions}>
          {logos.map((logo, index) => (
            <div className="item" key={index}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default ClientCarousel;
