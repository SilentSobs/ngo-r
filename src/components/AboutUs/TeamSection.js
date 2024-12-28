import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const TeamSection = () => {
    const options = {
        items: 3,
        margin: 30,
        smartSpeed: 700, // Speed of transitions
        loop: true, // Infinite loop
        autoplay: true, // Enable autoplay
        autoplayTimeout: 2000, // Autoplay interval in milliseconds (2 seconds)
        autoplaySpeed: 1000, // Transition speed in milliseconds (1 second)
        nav: true, // Show navigation arrows
        dots: false, // Disable dots
        navText: [
            '<span class="icon-arrow-left"></span>',
            '<span class="icon-arrow-right"></span>'
        ],
        responsive: {
            0: { items: 1, margin: 20 },
            575: { items: 1, margin: 30 },
            768: { items: 2, margin: 30 },
            992: { items: 3, margin: 30 },
            1200: { items: 3, margin: 30 }
        }
    };

    return (
        <section className="team-one section-space">
            <div className="container">
                <div className="team-one__top">
                    <div className="row gutter-y-30 align-items-center">
                        <div className="col-xxl-8 col-lg-7">
                            <div className="sec-title">
                                <h6 className="sec-title__tagline extraClassName">Our expert team</h6>
                                <h3 className="sec-title__title">
                                    Meet The Team Behind Their <span className="sec-title__title__inner">Success</span> Story
                                </h3>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-lg-5 wow fadeInRight" data-wow-duration="1500ms">
                            <p className="team-one__text">
                                We help companies develop powerful corporate social responsibility, grantmaking, and employee engagement strategies.
                            </p>
                        </div>
                    </div>
                </div>

                <OwlCarousel className="team-one__carousel owl-theme" {...options}>
                    <div className="item">
                        <div className="team-single">
                            <div className="team-single__image">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/team/team-1-1.jpg`} alt="Harry P. Finch" />
                                <div className="team-single__content">
                                    <ul className="team-single__social person-social">
                                        <li><a href="https://facebook.com/"><span className="icon-facebook"></span></a></li>
                                        <li><a href="https://twitter.com/"><span className="icon-twitter"></span></a></li>
                                        <li><a href="https://linkedin.com/"><span className="icon-linkedin"></span></a></li>
                                        <li><a href="https://youtube.com/"><span className="icon-youtube"></span></a></li>
                                    </ul>
                                    <div className="team-single__content__inner">
                                        <h4 className="team-single__name">Harry P. Finch</h4>
                                        <p className="team-single__designation">Co-Founder & CEO</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Add similar items for other team members */}
                </OwlCarousel>
            </div>
        </section>
    );
};

export default TeamSection;
