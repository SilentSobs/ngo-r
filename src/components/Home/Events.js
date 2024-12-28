import React from 'react';

const Events = () => {
    return (
        <section className="events-one section-space">
            <div className="container">
                <div className="sec-title">
                    <h6 className="sec-title__tagline sec-title__tagline--center">Worldwide non profit charity</h6>
                    <h3 className="sec-title__title">
                        See Upcoming <span className="sec-title__title__inner">Events</span>
                    </h3>
                </div>

                <div className="horizontal-accordion">
                    {/* Event Card 1 */}
                    <div className="events-one__card card choice">
                        <div className="card-body">
                            <div className="events-one__card__top" style={{ backgroundImage: "url('assets/images/events/event-bg-1-1.jpg')" }}>
                                <h4 className="events-one__card__title">Your little Help Can Heal Pains</h4>
                                <span className="events-one__card__icon icon-plus"></span>
                            </div>
                            <div className="event-card-two">
                                <a href="event-details-right.html" className="event-card-two__image">
                                    <img src="assets/images/events/event-2-5.jpg" alt="cleenhearts" />
                                    <div className="event-card-two__time">
                                        <span className="event-card-two__time__icon fa fa-clock"></span>
                                        Dec 13, 2024 @ 10:00 am
                                    </div>
                                </a>
                                <div className="event-card-two__content">
                                    <h4 className="event-card-two__title">
                                        <a href="event-details-right.html">Your little Help Can Heal Pains</a>
                                    </h4>
                                    <div className="event-card-two__text">
                                        Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.
                                    </div>
                                    <div className="event-card-two__meta">
                                        <h5 className="event-card-two__meta__title">Venue</h5>
                                        350 5th Ave, New York, NY 10118, United States
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Event Card 2 */}
                    <div className="events-one__card card choice expand">
                        <div className="card-body">
                            <div className="events-one__card__top" style={{ backgroundImage: "url('assets/images/events/event-bg-1-2.jpg')" }}>
                                <h4 className="events-one__card__title">Let’s education for children get good life</h4>
                                <span className="events-one__card__icon icon-plus"></span>
                            </div>
                            <div className="event-card-two">
                                <a href="event-details-right.html" className="event-card-two__image">
                                    <img src="assets/images/events/event-2-6.jpg" alt="cleenhearts" />
                                    <div className="event-card-two__time">
                                        <span className="event-card-two__time__icon fa fa-clock"></span>
                                        Dec 13, 2024 @ 10:00 am
                                    </div>
                                </a>
                                <div className="event-card-two__content">
                                    <h4 className="event-card-two__title">
                                        <a href="event-details-right.html">Let’s education for children get good life</a>
                                    </h4>
                                    <div className="event-card-two__text">
                                        Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.
                                    </div>
                                    <div className="event-card-two__meta">
                                        <h5 className="event-card-two__meta__title">Venue</h5>
                                        350 5th Ave, New York, NY 10118, United States
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Event Card 3 */}
                    <div className="events-one__card card choice">
                        <div className="card-body">
                            <div className="events-one__card__top" style={{ backgroundImage: "url('assets/images/events/event-bg-1-3.jpg')" }}>
                                <h4 className="events-one__card__title">Give African Childrens Education</h4>
                                <span className="events-one__card__icon icon-plus"></span>
                            </div>
                            <div className="event-card-two">
                                <a href="event-details-right.html" className="event-card-two__image">
                                    <img src="assets/images/events/event-2-7.jpg" alt="cleenhearts" />
                                    <div className="event-card-two__time">
                                        <span className="event-card-two__time__icon fa fa-clock"></span>
                                        Dec 13, 2024 @ 10:00 am
                                    </div>
                                </a>
                                <div className="event-card-two__content">
                                    <h4 className="event-card-two__title">
                                        <a href="event-details-right.html">Give African Childrens Education</a>
                                    </h4>
                                    <div className="event-card-two__text">
                                        Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.
                                    </div>
                                    <div className="event-card-two__meta">
                                        <h5 className="event-card-two__meta__title">Venue</h5>
                                        350 5th Ave, New York, NY 10118, United States
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Events;
