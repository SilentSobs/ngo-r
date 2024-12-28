import React from 'react';

const AboutOneSection = () => {
    return (
        <section className="about-one extraClassName section-space">
            <div className="about-one__bg">
                <div className="about-one__bg__border"></div>
                {/* /.about-one__bg__border */}
                <div
                    className="about-one__bg__inner"
                    style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/shapes/about-shape-1-1.png)` }}
                ></div>
                {/* /.about-one__left__bg__inner */}
            </div>
            {/* /.about-one__left__bg */}
            <div className="container">
                <div className="row gutter-y-50">
                    <div className="col-xl-6 wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="about-one__left">
                            <div className="about-one__image">
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/images/about/about-1-1.png`}
                                    alt="about"
                                    className="about-one__image__one"
                                />
                                <div
                                    className="about-one__video"
                                    style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/about/about-1-2.png)` }}
                                >
                                    <a href="https://www.youtube.com/watch?v=h9MbznbxlLc" className="about-one__video__btn video-button video-popup">
                                        <span className="icon-play"></span>
                                        <i className="video-button__ripple"></i>
                                    </a>
                                    {/* /.about-one__video__btn */}
                                </div>
                                {/* /.about-one__video */}
                                <div className="about-one__profile volunteer-profile">
                                    <div className="volunteer-profile__inner">
                                        <img
                                            src={`${process.env.PUBLIC_URL}/assets/images/resources/robert-joe-kerry.png`}
                                            alt="Robert Joe Kerry"
                                            className="volunteer-profile__image"
                                        />
                                        <div className="volunteer-profile__info">
                                            <h4 className="volunteer-profile__name"><a href="volunteer-details.html">Robert Joe Kerry</a></h4>
                                            <p className="volunteer-profile__designation">Founder</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-one__content">
                            <div className="sec-title">
                                <h6 className="sec-title__tagline extraClassName">ABOUT CLEAN HEART</h6>
                                <h3 className="sec-title__title">Helping Each Other can Make World <span className="sec-title__title__inner">Better</span></h3>
                            </div>
                            <div className="about-one__text-box wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="about-one__text-box__image">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/images/about/about-1-3.jpg`}
                                        alt="about"
                                    />
                                </div>
                                <p className="about-one__text">We help companies develop powerful corporate social responsibility, grantmaking, and employee engagement strategies.</p>
                            </div>
                            <div className="about-one__wrapper">
                                <div className="row gutter-y-40">
                                    <div className="col-lg-4 col-sm-4 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                                        <div className="about-one__donate about-one__donate--one">
                                            <div className="about-one__donate__icon">
                                                <span className="icon-team"></span>
                                            </div>
                                            <h4 className="about-one__donate__title">join our team</h4>
                                            <div className="about-one__donate__text">
                                                <span>6,472</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                        <div className="about-one__donate about-one__donate--two">
                                            <div className="about-one__donate__icon">
                                                <span className="icon-donation"></span>
                                            </div>
                                            <h4 className="about-one__donate__title">donate now</h4>
                                            <div className="about-one__donate__text">
                                                <span>$38,768</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-4 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                                        <div className="about-one__donate about-one__donate--three">
                                            <div className="about-one__donate__icon">
                                                <span className="icon-money"></span>
                                            </div>
                                            <h4 className="about-one__donate__title">total fund Raised</h4>
                                            <div className="about-one__donate__text">
                                                <span>1,193,210</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-information">
                                <a href="contact.html" className="contact-information__btn cleenhearts-btn">
                                    <div className="cleenhearts-btn__icon-box">
                                        <div className="cleenhearts-btn__icon-box__inner"><span className="icon-duble-arrow"></span></div>
                                    </div>
                                    <span className="cleenhearts-btn__text">more about us</span>
                                </a>
                                <div className="contact-information__phone">
                                    <div className="contact-information__phone__icon">
                                        <span className="icon-phone"></span>
                                    </div>
                                    <div className="contact-information__phone__text">
                                        <span>call any time</span>
                                        <h5><a href="tel:+912659302003">+91 2659 302 003</a></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img
                src={`${process.env.PUBLIC_URL}/assets/images/shapes/about-shape-1-2.png`}
                alt="cleenhearts"
                className="about-one__hand"
            />
        </section>
    );
};

export default AboutOneSection;
