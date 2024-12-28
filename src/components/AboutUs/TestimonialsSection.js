import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const TestimonialsSection = () => {
    const options = {
        items: 1,
        margin: 30,
        smartSpeed: 700,
        loop: true,
        autoplay: 6000,
        nav: false,
        dots: false,
        responsive: {
            0: { items: 1, dots: true, loop: true, margin: 20 },
            575: { items: 1, dots: true, loop: true, margin: 30 },
            768: { items: 1, dots: true, loop: true, margin: 30 },
            992: { items: 2, dots: false, loop: false, margin: 30 },
            1200: { items: 2, dots: false, loop: false, margin: 30 },
        },
    };

    return (
        <section className="testimonials-two section-space">
            <div className="container">
                <div className="testimonials-two__top">
                    <div className="row gutter-y-30 align-items-center">
                        <div className="col-lg-7">
                            <div className="sec-title">
                                <h6 className="sec-title__tagline">TESTIMONIALS</h6>
                                <h3 className="sec-title__title">
                                    What They’re Talking About Clean <span className="sec-title__title__inner">Heart</span>
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-5 wow fadeInRight" data-wow-duration="1500ms">
                            <p className="testimonials-two__text">
                                We help companies develop powerful corporate social responsibility, grantmaking, and employee engagement strategies.
                            </p>
                        </div>
                    </div>
                </div>

                <OwlCarousel className="testimonials-two__carousel owl-theme" {...options}>
                    <div className="item wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="00ms">
                        <div className="testimonials-card">
                            <div
                                className="testimonials-card__bg"
                                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/backgrounds/testimonial-bg-2.png)` }}
                            ></div>
                            <div className="testimonials-card__top">
                                <div className="testimonials-card__quote">
                                    <span className="icon-quote-2"></span>
                                </div>
                                <a href="https://www.youtube.com/watch?v=h9MbznbxlLc" className="testimonials-card__video video-button video-popup">
                                    <span className="icon-play"></span>
                                    <i className="video-button__ripple"></i>
                                </a>
                            </div>
                            <div className="testimonials-card__content">
                                <p className="testimonials-card__text">
                                    posuere luctus orci. Donec vitae mattis quam, vitae tempor arcu. Aenean non odio porttitor, convallis erat sit amet.
                                </p>
                                <div className="testimonials-card__info">
                                    <div className="testimonials-card__info__left">
                                        <h4 className="testimonials-card__name">Kenneth S. Fisher</h4>
                                        <span className="testimonials-card__designation">marketing manager</span>
                                    </div>
                                    <div className="cleenhearts-ratings testimonials-card__rattings">
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                        <div className="testimonials-card">
                            <div
                                className="testimonials-card__bg"
                                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/backgrounds/testimonial-bg-2.png)` }}
                            ></div>
                            <div className="testimonials-card__top">
                                <div className="testimonials-card__quote">
                                    <span className="icon-quote-2"></span>
                                </div>
                                <a href="https://www.youtube.com/watch?v=h9MbznbxlLc" className="testimonials-card__video video-button video-popup">
                                    <span className="icon-play"></span>
                                    <i className="video-button__ripple"></i>
                                </a>
                            </div>
                            <div className="testimonials-card__content">
                                <p className="testimonials-card__text">
                                    posuere luctus orci. Donec vitae mattis quam, vitae tempor arcu. Aenean non odio porttitor, convallis erat sit amet.
                                </p>
                                <div className="testimonials-card__info">
                                    <div className="testimonials-card__info__left">
                                        <h4 className="testimonials-card__name">Cedric J. Coggins</h4>
                                        <span className="testimonials-card__designation">Tropical zodiac</span>
                                    </div>
                                    <div className="cleenhearts-ratings testimonials-card__rattings">
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </section>
    );
};

export default TestimonialsSection;
