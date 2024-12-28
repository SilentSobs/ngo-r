import React from 'react';
// import './SubscribeSection.css'; // Import your custom CSS file for styling

const SubscribeSection = () => {
  return (
    <section className="subscribe">
      <div
        className="subscribe__bg"
        style={{ backgroundImage: `url('assets/images/backgrounds/subscribe-bg-1-1.jpg')` }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
            <div className="subscribe__content">
              <span className="subscribe__title-image icon-email"></span>
              <h2 className="subscribe__title">Subscribe Now</h2>
            </div>
          </div>
          <div className="col-lg-7 wow fadeInUp">
            <SubscribeForm />
          </div>
        </div>
      </div>
      <div className="subscribe__shape">
        <div className="subscribe__shape__one"></div>
        <div className="subscribe__shape__two"></div>
      </div>
    </section>
  );
};

const SubscribeForm = () => {
  return (
    <form
      action="#"
      data-url="MAILCHIMP_FORM_URL"
      className="subscribe__form mc-form"
      data-wow-delay="200ms"
      data-wow-duration="1500ms"
    >
      <input
        type="email"
        name="EMAIL"
        id="subscribe"
        placeholder="Enter your email"
        className="subscribe__form__input"
      />
      <button type="submit" className="subscribe__form__btn">
        <span className="subscribe__form__btn__text">Subscribe now</span>
        <span className="subscribe__form__btn__icon icon-paper-plane"></span>
      </button>
      <div className="mc-form__response"></div>
    </form>
  );
};

export default SubscribeSection;
