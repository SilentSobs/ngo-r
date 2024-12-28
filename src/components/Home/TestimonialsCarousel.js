import React from 'react';


const TestimonialsCarousel = () => {
    return (
        <section className="testimonials-one section-space">
            <div
                className="testimonials-one__bg cleenhearts-jarallax"
                data-jarallax
                data-speed="0.3"
                data-imgposition="50% -100%"
                style={{ backgroundImage: "url(assets/images/backgrounds/testimonial-bg-1.jpg)" }}
            ></div>
            <div className="container">
                <div className="testimonials-one__wrapper">
                    <div className="testimonials-one__top">
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
                                <div className="testimonials-one__image">
                                    <img src="assets/images/testimonials/testimonials-1-1.jpg" alt="testimonials" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="testimonials-one__carousel cleenhearts-owl__carousel cleenhearts-owl__carousel--basic-nav owl-theme owl-carousel"
                        data-owl-options={`{
              "items": 1,
              "margin": 10,
              "smartSpeed": 700,
              "loop": true,
              "autoplay": 6000,
              "nav": false,
              "dots": true,
              "navText": ["<span class='icon-arrow-left'></span>","<span class='icon-arrow-right'></span>"],
              "responsive": {
                "0": { "items": 1, "margin": 0 },
                "575": { "items": 1, "margin": 0 },
                "768": { "items": 1, "margin": 0 },
                "992": { "items": 1, "margin": 0 },
                "1200": { "items": 1, "margin": 0 }
              }
            }`}
                    >
                        {/* Testimonial Item 1 */}
                        <div className="item wow fadeInUp" data-wow-duration="1500ms">
                            <div className="testimonials-card">
                                <div className="testimonials-card__bg" style={{ backgroundImage: "url('assets/images/backgrounds/testimonial-bg-2.png')" }}></div>
                                <div className="testimonials-card__info">
                                    <div className="testimonials-card__info__left">
                                        <h4 className="testimonials-card__name">Kenneth S. Fisher</h4>
                                        <span className="testimonials-card__designation">Marketing Manager</span>
                                    </div>
                                    <div className="cleenhearts-ratings testimonials-card__rattings">
                                        <span className="icon-star"></span><span className="icon-star"></span><span className="icon-star"></span><span className="icon-star"></span><span className="icon-star"></span>
                                    </div>
                                </div>
                                <div className="testimonials-card__content">
                                    <p className="testimonials-card__text">
                                        posuere luctus orci. Donec vitae mattis quam, vitae tempor arcu. Aenean<br />
                                        non odio porttitor, convallis erat sit amet, facilisis velit. Nulla ornare<br />
                                        convallis malesuada. Phasellus
                                    </p>
                                    <div className="testimonials-card__quote">
                                        <span className="icon-quote"></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial Item 2 */}
                        <div className="item wow fadeInUp" data-wow-duration="1500ms">
                            <div className="testimonials-card">
                                <div className="testimonials-card__bg" style={{ backgroundImage: "url('assets/images/backgrounds/testimonial-bg-2.png')" }}></div>
                                <div className="testimonials-card__info">
                                    <div className="testimonials-card__info__left">
                                        <h4 className="testimonials-card__name">Cedric J. Coggins</h4>
                                        <span className="testimonials-card__designation">Tropical Zodiac</span>
                                    </div>
                                    <div className="cleenhearts-ratings testimonials-card__rattings">
                                        <span className="icon-star"></span><span className="icon-star"></span><span className="icon-star"></span><span className="icon-star"></span><span className="icon-star"></span>
                                    </div>
                                </div>
                                <div className="testimonials-card__content">
                                    <p className="testimonials-card__text">
                                        posuere luctus orci. Donec vitae mattis quam, vitae tempor arcu. Aenean<br />
                                        non odio porttitor, convallis erat sit amet, facilisis velit. Nulla ornare<br />
                                        convallis malesuada. Phasellus
                                    </p>
                                    <div className="testimonials-card__quote">
                                        <span className="icon-quote"></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial Item 3 */}
                        <div className="item wow fadeInUp" data-wow-duration="1500ms">
                            <div className="testimonials-card">
                                <div className="testimonials-card__bg" style={{ backgroundImage: "url('assets/images/backgrounds/testimonial-bg-2.png')" }}></div>
                                <div className="testimonials-card__info">
                                    <div className="testimonials-card__info__left">
                                        <h4 className="testimonials-card__name">John Doe</h4>
                                        <span className="testimonials-card__designation">Marketing Manager</span>
                                    </div>
                                    <div className="cleenhearts-ratings testimonials-card__rattings">
                                        <span className="icon-star"></span><span className="icon-star"></span><span className="icon-star"></span><span className="icon-star"></span><span className="icon-star"></span>
                                    </div>
                                </div>
                                <div className="testimonials-card__content">
                                    <p className="testimonials-card__text">
                                        posuere luctus orci. Donec vitae mattis quam, vitae tempor arcu. Aenean<br />
                                        non odio porttitor, convallis erat sit amet, facilisis velit. Nulla ornare<br />
                                        convallis malesuada. Phasellus
                                    </p>
                                    <div className="testimonials-card__quote">
                                        <span className="icon-quote"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="testimonials-one__shape">
                <img src="assets/images/shapes/shape-1.png" alt="shape" className="testimonials-one__shape__one" />
                <img src="assets/images/shapes/shape-2.png" alt="shape" className="testimonials-one__shape__two" />
            </div>
        </section>
    );
};

export default TestimonialsCarousel;
