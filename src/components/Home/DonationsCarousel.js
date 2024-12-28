import React,{ useState }  from 'react';
import { Link } from 'react-router-dom';


const DonationsCarousel = () => {

    const [customAmount, setCustomAmount] = useState('');

    // Function to handle input change
    const handleAmountChange = (e) => {
        setCustomAmount(e.target.value);
    };

    const handlePayment = () => {
        const amountInPaise = parseInt(customAmount) * 100; // Razorpay accepts the amount in paise (₹1 = 100 paise)
        var options = {
            key: "rzp_test_qS2UHh7okApzGJ", // Enter the Key ID generated from the Dashboard
            amount: amountInPaise, // Amount is in currency subunits (i.e., 100 paise = ₹1)
            currency: "INR",
            name: "REAL HAPPINESS OF LIFE FOUNDATION",
            description: "Donation",
            handler: function (response) {
                alert(`Payment ID: ${response.razorpay_payment_id}`);
                // You can send this response to your server for further verification and actions
            },
            prefill: {
                name: "Vishal Jangale", // Prefilled user details
                email: "vishaljangale@gmail.com",
                contact: "9999999999"
            },
            theme: {
                color: "#3399cc"
            }
        };
        var rzp = new window.Razorpay(options);
        rzp.open();
    };
    return (
        <section className="donations-one donations-carousel section-space-bottom">
            <div className="container">
                <div
                    className="donations-one__carousel cleenhearts-owl__carousel cleenhearts-owl__carousel--basic-nav owl-theme owl-carousel"
                    data-owl-options={`{
            "items": 3,
            "margin": 30,
            "smartSpeed": 700,
            "loop": true,
            "autoplay": 6000,
            "nav": true,
            "dots": false,
            "navText": ["<span class='icon-arrow-left'></span>","<span class='icon-arrow-right'></span>"],
            "responsive": {
              "0": { "items": 1, "margin": 20 },
              "576": { "items": 1, "margin": 30 },
              "768": { "items": 2, "margin": 30 },
              "992": { "items": 2, "margin": 30 },
              "1200": { "items": 3, "margin": 30 }
            }
          }`}
                >
                    {/* Item 1 */}
                    <div className="item wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="00ms">
                        <div className="donation-card">
                            <div className="donation-card__bg" style={{ backgroundImage: "url('assets/images/backgrounds/donation-bg-1-1.png')" }}></div>
                            <a href="donation-details-right.html" className="donation-card__image">
                                <img src="assets/images/donations/childmedical.jpg" alt="Give Children's Good medical support" />
                                <div className="donation-card__category">Medical</div>
                            </a>
                            <div className="donation-card__content">
                                <div className="donation-card__progress">
                                    <div className="progress-box">
                                        <div className="progress-box__bar">
                                            <div className="progress-box__bar__inner" data-percent="90%">
                                                <div className="progress-box__number">90%</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="donation-card__progress__bottom">
                                        <h5 className="donation-card__progress__title">
                                            Raised $<span>80,050</span>
                                        </h5>
                                        <h5 className="donation-card__progress__title">
                                            goal $<span>90,000</span>
                                        </h5>
                                    </div>
                                </div>
                                <h3 className="donation-card__title">
                                    <a href="donation-details-right.html">Give Children's Good medical support</a>
                                </h3>
                                <a href="donation-details-right.html" className="donation-card__btn cleenhearts-btn cleenhearts-btn--border-base">
                                    <div className="cleenhearts-btn__icon-box">
                                        <div className="cleenhearts-btn__icon-box__inner">
                                            <span className="icon-duble-arrow"></span>
                                        </div>
                                    </div>
                                    <span className="cleenhearts-btn__text">donation details</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="item wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                        <div className="donation-card">
                            <div className="donation-card__bg" style={{ backgroundImage: "url('assets/images/backgrounds/donation-bg-1-1.png')" }}></div>
                            <a href="donation-details-right.html" className="donation-card__image">
                                <img src="assets/images/donations/education.png" alt="Let’s education for children get good life" />
                                <div className="donation-card__category">Education</div>
                            </a>
                            <div className="donation-card__content">
                                <div className="donation-card__progress">
                                    <div className="progress-box">
                                        <div className="progress-box__bar">
                                            <div className="progress-box__bar__inner" data-percent="65%">
                                                <div className="progress-box__number">65%</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="donation-card__progress__bottom">
                                        <h5 className="donation-card__progress__title">
                                            Raised $<span>80,050</span>
                                        </h5>
                                        <h5 className="donation-card__progress__title">
                                            goal $<span>90,000</span>
                                        </h5>
                                    </div>
                                </div>
                                <h3 className="donation-card__title">
                                    <a href="donation-details-right.html">Let’s education for children get good life</a>
                                </h3>
                                <a href="donation-details-right.html" className="donation-card__btn cleenhearts-btn cleenhearts-btn--border-base">
                                    <div className="cleenhearts-btn__icon-box">
                                        <div className="cleenhearts-btn__icon-box__inner">
                                            <span className="icon-duble-arrow"></span>
                                        </div>
                                    </div>
                                    <span className="cleenhearts-btn__text">donation details</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="item wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="400ms">
                        <div className="donation-card">
                            <div className="donation-card__bg" style={{ backgroundImage: "url('assets/images/backgrounds/donation-bg-1-1.png')" }}></div>
                            <Link to="/donation-details" className="donation-card__image">
                                <img src="assets/images/donations/food.jpg" alt="Raise Funds For Clean & Healthy Food" />
                                <div className="donation-card__category">Foods</div>
                            </Link>
                            <div className="donation-card__content">
                                <div className="donation-card__progress">
                                    <div className="progress-box">
                                        <div className="progress-box__bar">
                                            <div className="progress-box__bar__inner" data-percent="75%">
                                                <div className="progress-box__number">75%</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="donation-card__progress__bottom">
                                        <h5 className="donation-card__progress__title">
                                            Raised $<span>80,050</span>
                                        </h5>
                                        <h5 className="donation-card__progress__title">
                                            goal $<span>90,000</span>
                                        </h5>
                                    </div>
                                </div>
                                <h3 className="donation-card__title">
                                <Link to="/donation-details">Raise Funds For Clean & Healthy Food</Link>
                                </h3>
                                <Link to="/donation-details" className="donation-card__btn cleenhearts-btn cleenhearts-btn--border-base">
                                    <div className="cleenhearts-btn__icon-box">
                                        <div className="cleenhearts-btn__icon-box__inner">
                                            <span className="icon-duble-arrow"></span>
                                        </div>
                                    </div>
                                    <span className="cleenhearts-btn__text">donation details</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Repeat for all remaining items as needed */}
                </div>

                {/* Donation Information and Gift Card Section */}
                <div className="donations-one__row row gutter-y-30">
                    <div className="col-xl-6 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="00ms">
                        <div className="donation-information">
                            <div className="donation-information__bg" style={{ backgroundImage: "url('assets/images/resources/donation-information-bg-1-1.jpg')" }}></div>
                            <div className="donation-information__content">
                                <h3 className="donation-information__title">Make the Most Out of Tax Time</h3>
                                <p className="donation-information__text">
                                    We help companies develop powerful corporate social responsibility, grantmaking, and employee engagement strategies.
                                </p>
                                <ul className="donation-information__list">
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <span>Donate Money</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <span>Handle with care</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <span>Donate Money</span>
                                    </li>
                                </ul>
                                <a href="contact.html" className="cleenhearts-btn cleenhearts-btn--border">
                                    <div className="cleenhearts-btn__icon-box">
                                        <div className="cleenhearts-btn__icon-box__inner">
                                            <span className="icon-duble-arrow"></span>
                                        </div>
                                    </div>
                                    <span className="cleenhearts-btn__text">read more</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                        <div className="gift-card">
                            <div
                                className="gift-card__bg"
                                style={{ backgroundImage: "url('assets/images/resources/gift-bg-1-1.jpg')" }}
                            ></div>
                            <div className="gift-card__content">
                                <h3 className="gift-card__title">Make a Donation Now</h3>
                                <p className="gift-card__text">
                                    We help companies develop powerful corporate social responsibility, grantmaking, and employee engagement strategies.
                                </p>
                                <div className="gift-card__amount">
                                    <form action="#" className="gift-card__form">
                                        <label htmlFor="custom_amount" className="gift-card__form__title">Custom</label>
                                        <input
                                            type="text"
                                            value={customAmount}
                                            name="custom-amount"
                                            id="custom_amount"
                                            className="gift-card__form__input"
                                            placeholder="Enter Amount"
                                            onChange={handleAmountChange}
                                        />
                                    </form>
                                    <button
                                        type="button"
                                        className="gift-card__btn active"
                                        onClick={() => setCustomAmount('25')}
                                    >
                                        $<span className="gift-card__btn__text">25</span>
                                    </button>
                                    <button
                                        type="button"
                                        className="gift-card__btn"
                                        onClick={() => setCustomAmount('50')}
                                    >
                                        $<span className="gift-card__btn__text">50</span>
                                    </button>
                                    <button
                                        type="button"
                                        className="gift-card__btn"
                                        onClick={() => setCustomAmount('99')}
                                    >
                                        $<span className="gift-card__btn__text">99</span>
                                    </button>
                                </div>
                                <button onClick={handlePayment} className="cleenhearts-btn cleenhearts-btn--border">
                                    <div className="cleenhearts-btn__icon-box">
                                        <div className="cleenhearts-btn__icon-box__inner">
                                            <span className="icon-duble-arrow"></span>
                                        </div>
                                    </div>
                                    <span className="cleenhearts-btn__text">Donate Now</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DonationsCarousel;
