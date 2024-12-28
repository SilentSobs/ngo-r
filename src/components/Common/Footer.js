import React from 'react';

const Footer = () => {
    return (
        <footer className="main-footer background-white2">
            <div className="main-footer__top">
                <div className="container">
                    <div className="row gutter-y-30">
                        {/* Footer Logo and Address Section */}
                        <div className="col-md-12 col-xl-3">
                            <div className="footer-widget footer-widget--about">
                                <a href="index.html" className="footer-widget__logo">
                                    <img src="assets/images/logo-dark.png" width="159" alt="Cleenhearts HTML Template" />
                                </a>
                                <p className="footer-widget__about-text">
                                    H.No.4453, Sathe Nagar Near Manoj Kirana Store Narpoli, Bhiwandi ,Thane, Maharashtra-421305<br />
                                    PAN NO. AALCR3060M<br />
                                    Registration No. U85300MH2021NPL368070
                                </p>
                            </div>
                            <a href="https://www.google.com/maps/@23.506657,90.3443647,7z?entry=ttu" className="footer-widget__map">
                                <span className="footer-widget__map__text">View Map</span>
                                <span className="icon-paper-plane"></span>
                            </a>
                        </div>
                        
                        {/* Contact Information Section */}
                        <div className="col-xl-3 col-md-5">
                            <div className="footer-widget footer-widget--contact">
                                <h2 className="footer-widget__title">Get in touch!</h2>
                                <ul className="list-unstyled footer-widget__info">
                                    <li><span className="icon-location"></span><address>Thane, Maharashtra, India</address></li>
                                    <li><span className="icon-phone"></span><a href="tel:+919607753148">+91 9607753148</a></li>
                                    <li><span className="icon-envelope"></span><a href="mailto:info@rhlf.org">info@rhlf.org</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Quick Links Section */}
                        <div className="col-md-3">
                            <div className="footer-widget footer-widget--links">
                                <h2 className="footer-widget__title">Quick Links</h2>
                                <ul className="list-unstyled footer-widget__links">
                                    <li><a href="assets/pdf's/Privacy Policy.pdf">Privacy Policy</a></li>
                                    <li><a href="assets/pdf's/T & C.pdf">Terms & Condition</a></li>
                                    <li><a href="assets/pdf's/Refund Policy.pdf">Refund Policy</a></li>
                                    <li><a href="assets/pdf's/Child Protection Policy.pdf">Child Protection Policy</a></li>
                                    <li><a href="assets/pdf's/POSH at work place.pdf">POSH Policy</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Gallery Section */}
                        <div className="col-md-4 col-xl-3">
                            <div className="footer-widget footer-widget--gallery">
                                <h2 className="footer-widget__title">Our Gallery</h2>
                                <div className="footer-widget__gallery">
                                    {['1', '2', '3', '4', '5', '6'].map((imgNum) => (
                                        <a href="gallery.html" className="footer-widget__gallery__link" key={imgNum}>
                                            <img
                                                src={`assets/images/gallery/footer-widget-gallery-img-${imgNum}.jpg`}
                                                alt={`footer-widget-gallery-${imgNum}`}
                                            />
                                            <span className="footer-widget__gallery__icon icon-plus"></span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Shape */}
                <div className="main-footer__top__shape-box">
                    <img
                        src="assets/images/shapes/footer-shape-hand-1-1.png"
                        alt="hand"
                        className="main-footer__top__shape-one"
                    />
                    <img
                        src="assets/images/shapes/footer-shape-hand-1-2.png"
                        alt="hand"
                        className="main-footer__top__shape-two"
                    />
                </div>

                {/* Payment Methods */}
                <div className="bottom-footer_paymentCards__3-Nha">
                    {['securePayment', 'visa', 'mastercard', 'paytm', 'AmericanExpress'].map((card) => (
                        <img
                            src={`assets/images/payments/${card}.svg`}
                            alt={`RHLF-${card}`}
                            key={card}
                        />
                    ))}
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="main-footer__bottom">
                <div
                    className="main-footer__bottom__bg"
                    style={{ background: `url('assets/images/backgrounds/footer-bottom-bg-1-2.png')` }}
                ></div>
                <div className="container">
                    <div className="main-footer__bottom__inner">
                        <p className="main-footer__copyright">
                            &copy; Copyright <span className="dynamic-year">{new Date().getFullYear()}</span> Real Happiness Of Life Foundation.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
