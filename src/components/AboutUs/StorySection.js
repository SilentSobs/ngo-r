import React from 'react';

const StorySection = () => {
    return (
        <section 
            className="story-one section-space-top cleenhearts-jarallax" 
            data-jarallax 
            data-speed="0.3" 
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/backgrounds/story-bg-1-1.jpg)` }}
        >
            <div className="container">
                <div className="sec-title">
                    <h6 className="sec-title__tagline extraClassName">CLEAN HEART STORY</h6>
                    {/* /.sec-title__tagline */}
                    <h3 className="sec-title__title">
                        A Journey Through clean heart <span className="sec-title__title__inner">Story</span>
                    </h3>
                    {/* /.sec-title__title */}
                </div>
                {/* /.sec-title */}
                
                <div className="story-one__tabs-box tabs-box">
                    <div className="tabs-content">
                        <div className="tab active-tab" id="year1992" style={{ display: 'block' }}>
                            <div className="row gutter-y-40">
                                <div className="col-xl-6 animated fadeInLeft" data-wow-duration="1500ms" data-wow-delay="100ms">
                                    <div className="story-one__image">
                                        <img 
                                            src={`${process.env.PUBLIC_URL}/assets/images/story/story-1-1.jpg`} 
                                            alt="story"
                                        />
                                    </div>
                                    {/* /.story-one__image */}
                                </div>
                                {/* /.col-xl-6 */}
                                <div className="col-xl-6 animated fadeInRight" data-wow-duration="1500ms" data-wow-delay="100ms">
                                    <div className="story-one__content">
                                        <h3 className="story-one__title">Our Mission and Vision</h3>
                                        <p className="story-one__text story-one__text--one">
                                            Nam ultrices odio a felis lobortis convallis. In ex nunc, ornare non condimentum et, egestas vel massa. 
                                            Nullam hendrerit felis quis pellentesque porttitor. Aenean lobortis bibendum turpis et auctor. 
                                            Nam iaculis, lectus vulputate cursus interdum.
                                        </p>
                                        <p className="story-one__text story-one__text--two">
                                            Nam ultrices odio a felis lobortis convallis. In ex nunc, ornare non condimentum et, egestas vel massa.
                                            Nullam hendrerit.
                                        </p>
                                        <div className="volunteer-profile">
                                            <div className="volunteer-profile__inner">
                                                <img 
                                                    src={`${process.env.PUBLIC_URL}/assets/images/resources/robert-joe-kerry.png`} 
                                                    alt="Robert Joe Kerry" 
                                                    className="Robert Joe Kerry" 
                                                />
                                                <div className="volunteer-profile__info">
                                                    <h4 className="volunteer-profile__name">
                                                        <a href="volunteer-details.html">Robert Joe Kerry</a>
                                                    </h4>
                                                    <p className="volunteer-profile__designation">Founder</p>
                                                </div>
                                            </div>
                                            <img 
                                                src={`${process.env.PUBLIC_URL}/assets/images/resources/volunteer-d-signature.png`} 
                                                alt="Robert Joe Kerry signature" 
                                                className="volunteer-profile__signature" 
                                            />
                                        </div>
                                        {/* /.volunteer-profile */}
                                    </div>
                                    {/* /.story-one__content */}
                                </div>
                                {/* /.col-xl-6 */}
                            </div>
                            {/* /.row */}
                        </div>
                        {/* /.tab */}

                        {/* Add similar structure for other tabs (year2003, year2010, etc.) */}

                    </div>
                    {/* /.tabs-content */}
                    
                    <div className="story-one__divider"></div>
                    <div className="tab-buttons">
                        <div className="row gutter-y-20">
                            <div className="col-lg-2 col-sm-4 col-6">
                                <div 
                                    data-tab="#year1992" 
                                    className="tab-btn tab-btn--one active-btn wow fadeInUp" 
                                    data-wow-delay="00ms" 
                                    data-wow-duration="1500ms"
                                >
                                    <h3 className="tab-btn__text">1993</h3>
                                </div>
                            </div>
                            {/* Repeat similar structure for other years */}
                        </div>
                        {/* /.row */}
                    </div>
                    {/* /.tab-buttons */}
                </div>
                {/* /.story-one__tabs-box */}
            </div>
            {/* /.container */}
        </section>
    );
};

export default StorySection;
