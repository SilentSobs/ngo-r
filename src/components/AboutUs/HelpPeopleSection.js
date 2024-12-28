import React from 'react';

const HelpPeopleSection = () => {
    return (
        <section 
            className="help-people" 
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/backgrounds/help-people-bg-1.png)` }}
        >
            <div className="container">
                <div className="row">
                    <div className="help-people__images col-xl-6">
                        <div className="help-people__images__inner">
                            <img 
                                src={`${process.env.PUBLIC_URL}/assets/images/help-people/help-people-1-1.png`} 
                                alt="help-people" 
                                className="wow fadeInLeft" 
                                data-wow-duration="1500ms" 
                                data-wow-delay="800ms" 
                            />
                            <img 
                                src={`${process.env.PUBLIC_URL}/assets/images/help-people/help-people-1-2.png`} 
                                alt="help-people" 
                                className="wow fadeInLeft" 
                                data-wow-duration="1500ms" 
                                data-wow-delay="400ms" 
                            />
                            <img 
                                src={`${process.env.PUBLIC_URL}/assets/images/help-people/help-people-1-3.png`} 
                                alt="help-people" 
                                className="wow fadeInLeft" 
                                data-wow-duration="1500ms" 
                                data-wow-delay="00ms" 
                            />
                        </div>
                    </div>

                    <div className="help-people__content col-xl-6">
                        <div className="help-people__content__inner">
                            <div className="sec-title">
                                <h6 className="sec-title__tagline">Help people now</h6>
                                <h3 className="sec-title__title">
                                    Charity For The People You Care <span className="sec-title__title__inner">About</span>
                                </h3>
                            </div>

                            <p className="help-people__text">
                                Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernaturaut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.
                            </p>

                            <div className="help-people__content__bottom">
                                <a href="become-a-volunteer.html" className="cleenhearts-btn">
                                    <div className="cleenhearts-btn__icon-box">
                                        <div className="cleenhearts-btn__icon-box__inner"><span className="icon-duble-arrow"></span></div>
                                    </div>
                                    <span className="cleenhearts-btn__text">Become A Volunteer</span>
                                </a>

                                <div className="volunteer-group">
                                    <a href="volunteer-details.html" className="volunteer-group__link">
                                        <img 
                                            src={`${process.env.PUBLIC_URL}/assets/images/volunteer/volunteer-image-1.png`} 
                                            alt="volunteer" 
                                            className="volunteer-group__image" 
                                        />
                                    </a>
                                    <a href="volunteer-details.html" className="volunteer-group__link">
                                        <img 
                                            src={`${process.env.PUBLIC_URL}/assets/images/volunteer/volunteer-image-2.png`} 
                                            alt="volunteer" 
                                            className="volunteer-group__image" 
                                        />
                                    </a>
                                    <a href="volunteer-details.html" className="volunteer-group__link">
                                        <img 
                                            src={`${process.env.PUBLIC_URL}/assets/images/volunteer/volunteer-image-3.png`} 
                                            alt="volunteer" 
                                            className="volunteer-group__image" 
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="help-people__shape">
                <img 
                    src={`${process.env.PUBLIC_URL}/assets/images/shapes/help-people-shape-1.png`} 
                    alt="help-people" 
                    className="help-people__shape__one" 
                />
            </div>
        </section>
    );
};

export default HelpPeopleSection;
