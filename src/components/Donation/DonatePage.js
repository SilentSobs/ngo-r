import React, { useState } from 'react';

const DonatePage = () => {
  const [donationAmount, setDonationAmount] = useState(99);
  const [progress, setProgress] = useState(0); // Initial progress in percentage
  const [currentRaised, setCurrentRaised] = useState(0); // Current raised amount
  const goalAmount = 90000; // Goal amount for the donation campaign

  // Add state for personal info
  const [firstName, setFirstName] = useState(''); // State for first name
  const [lastName, setLastName] = useState('');  // State for last name
  const [email, setEmail] = useState('');        // State for email

  const handleDonationAmountChange = (amount) => {
    setDonationAmount(amount);
  };

  const updateProgress = (newDonation) => {
    const newTotal = currentRaised + newDonation;
    const newProgress = (newTotal / goalAmount) * 100;
    setProgress(newProgress); // Update the progress state
    setCurrentRaised(newTotal); // Update the total raised amount
  };

  const handlePayment = () => {
    const amountInPaise = parseInt(donationAmount) * 100; // Razorpay accepts the amount in paise (₹1 = 100 paise)
    var options = {
      key: "rzp_test_qS2UHh7okApzGJ", // Enter the Key ID generated from the Dashboard
      amount: amountInPaise, // Amount is in currency subunits (i.e., 100 paise = ₹1)
      currency: "INR",
      name: "REAL HAPPINESS OF LIFE FOUNDATION",
      description: "Donation",
      handler: function (response) {
        alert(`Payment ID: ${response.razorpay_payment_id}`);
        // Assuming the donation was successful, update the progress
        updateProgress(parseInt(donationAmount)); // Update progress with the donated amount
      },
      prefill: {
        name: firstName + " " + lastName, // Prefilled user details with state values
        email: email,
        contact: "9999999999"
      },
      theme: {
        color: "#3399cc"
      }
    };
    var rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="donate-page section-space">
      <div className="container">
        <div className="row gutter-y-40">
          <div className="col-lg-8">
            <div className="donate-page__content">
              <form className="donate-page__form" onSubmit={handleSubmit}>
                <div className="donate-page__form__amount">
                  <div className="donate-page__form__amount__box">
                    <span className="donate-page__form__amount__sign">$</span>
                    <input
                      type="text"
                      value={donationAmount}
                      name="donate_amount"
                      id="donate_amount"
                      placeholder="Amount"
                      className="donate-page__form__amount__input"
                      onChange={(e) => handleDonationAmountChange(e.target.value)}
                    />
                  </div>
                  <div className="donate-page__form__amount__buttons">
                    {[25, 50, 75, 99, 200].map((amount) => (
                      <button
                        type="button"
                        key={amount}
                        className={`donate-page__form__amount__btn donate-page__form__amount__btn--amount ${
                          donationAmount === amount ? 'active' : ''
                        }`}
                        onClick={() => handleDonationAmountChange(amount)}
                      >
                        $<span className="donate-page__form__amount__btn__text">{amount}</span>
                      </button>
                    ))}
                    <button type="button" className="donate-page__form__amount__btn">
                      Custom amount
                    </button>
                  </div>
                </div>

                <div className="donate-page__form__info form-one">
                  <h3 className="donate-page__form__info__title donate-page__form__title">Personal Info</h3>
                  <div className="row gutter-y-30">
                    <div className="col-xl-6">
                      <div className="form-one__control">
                        <input
                          type="text"
                          name="first_name"
                          id="first_name"
                          placeholder="first name"
                          className="form-one__control__input"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="form-one__control">
                        <input
                          type="text"
                          name="last_name"
                          id="last_name"
                          placeholder="last name"
                          className="form-one__control__input"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-one__control">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="email address"
                          className="form-one__control__input"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-one__control">
                        <button onClick={handlePayment} type="submit" className="cleenhearts-btn">
                          <span className="cleenhearts-btn__icon-box">
                            <span className="cleenhearts-btn__icon-box__inner">
                              <span className="icon-duble-arrow"></span>
                            </span>
                          </span>
                          <span className="cleenhearts-btn__text">donate now</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-4">
            <aside className="donate-page__sidebar">
              <div className="donation-card donate-page__sidebar__item">
                <div
                  className="donation-card__bg"
                  style={{ backgroundImage: "url('assets/images/backgrounds/donation-bg-1-1.png')" }}
                ></div>
                <div className="donation-card__content">
                  <div className="donation-card__progress">
                    <div className="progress-box">
                      <div className="progress-box__bar">
                        <div className="progress-box__bar__inner count-bar" style={{ width: `${progress}%` }}>
                          <div className="progress-box__number count-text">{Math.round(progress)}%</div>
                        </div>
                      </div>
                    </div>
                    <div className="donation-card__progress__bottom">
                      <h5 className="donation-card__progress__title">
                        Raised $<span>{currentRaised.toLocaleString()}</span>
                      </h5>
                      <h5 className="donation-card__progress__title">
                        Goal $<span>{goalAmount.toLocaleString()}</span>
                      </h5>
                    </div>
                  </div>
                  <h3 className="donation-card__title">
                    Raise Funds For Clean & Healthy Food
                  </h3>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonatePage;
