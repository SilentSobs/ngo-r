import React from 'react';
import { Link } from 'react-router-dom';

const DonationDetails = () => {
  return (
    <section className="donation-details section-space">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="donation-details__details">
              <div className="donation-details__content">
                <div className="donation-card-three donation-card">
                  <div className="donation-card__image wow fadeInUp" data-wow-duration="1500ms">
                    <img src="assets/images/donations/donation-d-1-1.jpg" alt="donation details" />
                    <div className="donation-details__hall">
                      <span>Hall no:</span>
                      <span>69</span>
                    </div>
                    <div className="donation-details__date">
                      <span>03</span>
                      <span>Sep</span>
                    </div>
                  </div>
                  <div className="donation-card__content">
                    <div className="donation-card__progress">
                      <div className="progress-box">
                        <div className="progress-box__bar">
                          <div className="progress-box__bar__inner count-bar" data-percent="75%">
                            <div className="progress-box__number count-text">75%</div>
                          </div>
                        </div>
                      </div>
                      <div className="donation-card__progress__bottom">
                        <h5 className="donation-card__progress__title">
                          Raised $<span>80,050</span>
                        </h5>
                        <h5 className="donation-card__progress__title">
                          Goal $<span>90,000</span>
                        </h5>
                      </div>
                    </div>
                    <h3 className="donation-card__title">
                      There are many variations of passages of available but majority have alteration
                    </h3>
                    <div className="donation-card-three__text wow fadeInUp" data-wow-duration="1500ms">
                      <p className="donation-card-three__text__inner">
                        Neque porro est qui dolorem ipsum quia quaed inventor veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet
                        finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </p>
                      <p className="donation-card-three__text__inner">
                        When an unknown printer took a galley of type and scrambled it to make a type specimen book. It
                        has survived not only five centuries, but also the leap into electronic typesetting, remaining
                      </p>
                    </div>
                  </div>
                  <div className="donation-details__inner">
                    <div className="donation-details__inner__top">
                      <h3 className="donation-details__inner__title">Why Donate with clean heart</h3>
                      <p className="donation-details__inner__desc">
                        Neque porro est qui dolorem ipsum quia quaed inventor veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed
                      </p>
                    </div>
                    <div className="row gutter-y-30">
                      <div className="col-md-6 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                        <div className="donation-details__inner__image">
                          <img src="assets/images/donations/donation-d-1-2.jpg" alt="donation details" />
                        </div>
                      </div>
                      <div className="col-md-6 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="donation-details__inner__image">
                          <img src="assets/images/donations/donation-d-1-3.jpg" alt="donation details" />
                        </div>
                      </div>
                    </div>
                    <div className="donation-details__inner__content wow fadeInUp" data-wow-duration="1500ms">
                      <p className="donation-details__inner__text">
                        Neque porro est qui dolorem ipsum quia quaed inventor veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet
                        finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </p>
                      <ul className="donation-details__inner__list">
                        <li>
                          <p>
                            Another area of AI that holds great promise is robotics, which involves developing machines.
                          </p>
                        </li>
                        <li>
                          <p>
                            AI also has the potential to improve healthcare, by enabling more accurate diagnosis and
                            treatment.
                          </p>
                        </li>
                        <li>
                          <p>
                            However, there are also challenges associated with the development and deployment of AI.
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="donation-details__donation"
                      style={{ backgroundImage: "url('assets/images/backgrounds/donation-d-bg-1.png')" }}
                    >
                      <div className="donation-details__donation__info wow fadeInUp" data-wow-duration="1500ms">
                        <div className="donation-details__donation__icon">
                          <span className="icon-money"></span>
                        </div>
                        <div className="donation-details__donation__content">
                          <h4 className="donation-details__donation__title">Raised</h4>
                          <p className="donation-details__donation__text">$44,625</p>
                        </div>
                      </div>
                      <div className="donation-details__donation__info wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                        <div className="donation-details__donation__icon">
                          <span className="icon-target"></span>
                        </div>
                        <div className="donation-details__donation__content">
                          <h4 className="donation-details__donation__title">Goal</h4>
                          <p className="donation-details__donation__text">$80,000</p>
                        </div>
                      </div>
                      <div className="donation-details__donation__button wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="400ms">
                        <Link to="/donation-page" className="cleenhearts-btn donation-details__donation__btn">
                          <div className="cleenhearts-btn__icon-box">
                            <div className="cleenhearts-btn__icon-box__inner">
                              <span className="icon-duble-arrow"></span>
                            </div>
                          </div>
                          <span className="cleenhearts-btn__text">Donate Now</span>
                        </Link>
                      </div>
                    </div>
                    <div className="donation-details__inner__bottom wow fadeInUp" data-wow-duration="1500ms">
                      <p className="donation-details__inner__bottom__text">
                        Neque porro est qui dolorem ipsum quia quaed inventor veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet
                        finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </p>
                      <p className="donation-details__inner__bottom__text">
                        When an unknown printer took a galley of type and scrambled it to make a type specimen book. It
                        has survived not only five centuries, but also the leap into electronic typesetting, remaining
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="donation-details__donors">
                <h3 className="donation-details__donors__title">Recent donors</h3>
                <div className="row gutter-y-40">
                  {/* Donor items */}
                  <DonorItem
                    name="Diego C. Rapoza"
                    amount="$69"
                    image="assets/images/donations/donor-d-1.png"
                    delay="00ms"
                  />
                  <DonorItem
                    name="Kevin Martin"
                    amount="$39"
                    image="assets/images/donations/donor-d-2.png"
                    delay="200ms"
                  />
                  <DonorItem
                    name="Emily L. Porter"
                    amount="$49"
                    image="assets/images/donations/donor-d-3.png"
                    delay="400ms"
                  />
                  <DonorItem
                    name="John B. Vaughn"
                    amount="$99"
                    image="assets/images/donations/donor-d-4.png"
                    delay="600ms"
                  />
                </div>
              </div>

              <div className="comments-form">
                <h3 className="comments-form__title sec-title__title">Leave a comment</h3>
                <form className="comments-form__form contact-form-validated form-one">
                  <div className="row gutter-y-30">
                    <div className="col-md-6 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                      <div className="form-one__control">
                        <input type="text" name="name" placeholder="Your name" className="form-one__control__input" />
                      </div>
                    </div>
                    <div className="col-md-6 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                      <div className="form-one__control">
                        <input type="email" name="email" placeholder="Email address" className="form-one__control__input" />
                      </div>
                    </div>
                    <div className="col-12 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                      <div className="form-one__control">
                        <textarea
                          name="message"
                          placeholder="write message . . ."
                          className="form-one__control__input form-one__control__message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-one__control">
                        <button type="submit" className="cleenhearts-btn">
                          <span className="cleenhearts-btn__icon-box">
                            <span className="cleenhearts-btn__icon-box__inner">
                              <span className="icon-duble-arrow"></span>
                            </span>
                          </span>
                          <span className="cleenhearts-btn__text">Post Comment</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="result"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const DonorItem = ({ name, amount, image, delay }) => {
  return (
    <div className={`col-xl-3 col-sm-6 wow fadeInUp`} data-wow-delay={delay} data-wow-duration="1500ms">
      <div className="donation-details__donors__single">
        <div className="donation-details__donors__image">
          <img src={image} alt="donor details" />
        </div>
        <div className="donation-details__donors__content">
          <h3 className="donation-details__donors__name">
            <a href="volunteer-details.html">{name}</a>
          </h3>
          <h4 className="donation-details__donors__amount">{amount}</h4>
        </div>
      </div>
    </div>
  );
};

export default DonationDetails;
