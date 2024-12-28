import React from 'react';


const SupportSection = () => {
    return (
        <div className="support-one section-space">
            <div className="container">
                <div className="sec-title">
                    <h6 className="sec-title__tagline sec-title__tagline--center">Worldwide non profit charity</h6>
                    <h3 className="sec-title__title">
                        Give a Helping Hand a For Needy <span className="sec-title__title__inner">People</span>
                    </h3>
                </div>

                <div className="row gutter-y-30">
                    {/* Support Card 1 */}
                    <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="00ms">
                        <div className="support-card">
                            <a href="donate.html" className="support-card__image">
                                <img src="assets/images/support/support-1-1.jpg" alt="Foods Support" />
                            </a>
                            <a href="donate.html" className="support-card__content">
                                <div className="support-card__content__inner">
                                    <h3 className="support-card__title">Foods Support</h3>
                                    <div className="support-card__collected">
                                        <span>Collected $2.5M</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Support Card 2 */}
                    <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                        <div className="support-card">
                            <a href="donate.html" className="support-card__image">
                                <img src="assets/images/support/support-1-2.jpg" alt="Sports Support" />
                            </a>
                            <a href="donate.html" className="support-card__content">
                                <div className="support-card__content__inner">
                                    <h3 className="support-card__title">Sports Support</h3>
                                    <div className="support-card__collected">
                                        <span>Collected $2.5M</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Support Card 3 */}
                    <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="00ms">
                        <div className="support-card support-card--direction">
                            <a href="donate.html" className="support-card__content">
                                <div className="support-card__content__inner">
                                    <h3 className="support-card__title">Medical Support</h3>
                                    <div className="support-card__collected">
                                        <span>Collected $2.5M</span>
                                    </div>
                                </div>
                            </a>
                            <a href="donate.html" className="support-card__image">
                                <img src="assets/images/support/support-1-3.jpg" alt="Medical Support" />
                            </a>
                        </div>
                    </div>

                    {/* Support Card 4 */}
                    <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                        <div className="support-card support-card--direction">
                            <a href="donate.html" className="support-card__content">
                                <div className="support-card__content__inner">
                                    <h3 className="support-card__title">Education Support</h3>
                                    <div className="support-card__collected">
                                        <span>Collected $2.5M</span>
                                    </div>
                                </div>
                            </a>
                            <a href="donate.html" className="support-card__image">
                                <img src="assets/images/support/support-1-4.jpg" alt="Education Support" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="support-one__shape">
                <img src="assets/images/shapes/support-shape-hand-1-1.png" alt="shape-hand" className="support-one__shape__one" />
                <img src="assets/images/shapes/support-shape-hand-1-2.png" alt="shape-hand" className="support-one__shape__two" />
            </div>
        </div>
    );
};

export default SupportSection;
