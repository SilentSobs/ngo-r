
import React from 'react';
import OwlCarousel from 'react-owl-carousel'; // Use react-owl-carousel or any preferred carousel package
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import VolunteerGroup from './VolunteerGroup';
import SliderButton from './SliderButton';

const MainSlider = () => {
  const options = {
    loop: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items: 1,
    autoplay: true,
    autoplayTimeout: 7000,
    smartSpeed: 1000,
    nav: false,
    dots: true,
    margin: 0,
  };

  return (
    <section className="main-slider-one">
      <div className="main-slider-one__wrapper">
        <OwlCarousel className="owl-theme" {...options}>
          {/* First Slide */}
          <div className="item">
            <SliderItem
              backgroundImage="assets/images/slider_img/img1.jpg"
              subtitle="Give a helping hand for a child"
              titleLine1="lend a helping hand"
              titleLine2="to who those need it"
            />
          </div>
          {/* Second Slide */}
          <div className="item">
            <SliderItem
              backgroundImage="assets/images/slider_img/img2.jpg"
              subtitle="Give a helping hand for a child"
              titleLine1="lend a helping hand"
              titleLine2="to who those need it"
            />
          </div>
          {/* Third Slide */}
          <div className="item">
            <SliderItem
              backgroundImage="assets/images/slider_img/img3.jpg"
              subtitle="Give a helping hand for a child"
              titleLine1="lend a helping hand"
              titleLine2="to who those need it"
            />
          </div>
        </OwlCarousel>
      </div>
    </section>
  );
};

const SliderItem = ({ backgroundImage, subtitle, titleLine1, titleLine2 }) => (
  <div className="main-slider-one__item">
    <div
      className="main-slider-one__bg"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    ></div>
    <div
      className="main-slider-one__shape-one"
      style={{ backgroundImage: `url(assets/images/shapes/slider-1-shape-1.png)` }}
    ></div>
    <div
      className="main-slider-one__shape-two"
      style={{ backgroundImage: `url(assets/images/shapes/slider-1-shape-2.png)` }}
    ></div>
    <div className="main-slider-one__content">
      <h5 className="main-slider-one__sub-title">{subtitle}</h5>
      <h2 className="main-slider-one__title">
        <span className="main-slider-one__title__text">{titleLine1}</span>
        <br />
        <span className="main-slider-one__title__text">{titleLine2}</span>
      </h2>
      <div className="main-slider-one__btn">
        <SliderButton />
        <VolunteerGroup />
      </div>
    </div>
  </div>
);

export default MainSlider;
