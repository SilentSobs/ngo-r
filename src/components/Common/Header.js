import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const [isMobileNavExpanded, setIsMobileNavExpanded] = useState(false);


    const toggleMobileNav = () => {
        setIsMobileNavExpanded(!isMobileNavExpanded);
    };
    return (
        <header className="main-header sticky-header sticky-header--normal">
            <div className="container-fluid">
                <div className="main-header__inner">
                    <div className="main-header__logo">
                        <Link to="/">
                            <img src="assets/images/logo-dark.png" alt="RHLF HTML" width="159" />
                        </Link>
                        <button type="button" className="main-header__sidebar-btn sidebar-btn__toggler" />
                    </div>
                    <div className="main-header__right">
                        <nav className="main-header__nav main-menu">
                            <ul className="main-menu__list">
                                <li className="megamenu megamenu-clickable megamenu-clickable--toggler">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="megamenu megamenu-clickable megamenu-clickable--toggler">
                                    <Link to="/about">About</Link>
                                </li>

                            </ul>
                        </nav>
                        <div className="mobile-nav__btn mobile-nav__toggler" onClick={toggleMobileNav} >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <a href="donate.html" className="cleenhearts-btn main-header__btn">
                            <div className="cleenhearts-btn__icon-box">
                                <div className="cleenhearts-btn__icon-box__inner">
                                    <span className="icon-donate"></span>
                                </div>
                            </div>
                            <span className="cleenhearts-btn__text">donate now</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className={`mobile-nav__wrapper ${isMobileNavExpanded ? 'expanded' : ''}` }>
                <div className="mobile-nav__overlay mobile-nav__toggler"></div>
                <div className="mobile-nav__content">
                    <span className="mobile-nav__close mobile-nav__toggler">
                        <i className="fa fa-times"></i>
                    </span>

                    <div className="logo-box">
                        <a href="index.html" aria-label="logo image">
                            <img src="assets/images/logo-dark.png" width="155" alt="Logo" />
                        </a>
                    </div>

                    <div className="mobile-nav__container"></div>

                    <ul className="mobile-nav__contact list-unstyled">
                        <li>
                            <i className="fa fa-envelope"></i>
                            <a href="mailto:needhelp@cleenhearts.com">contact@rhlf.org</a>
                        </li>
                        <li>
                            <i className="fa fa-phone-alt"></i>
                            <a href="tel:+9102269719935">+91-02269719935</a>
                        </li>
                    </ul>

                    <div className="mobile-nav__social">
                        <a href="https://dm.wa.link/xhvykp">
                            <i className="bx bxl-whatsapp bx-tada" style={{ color: '#000' }}></i>
                            <span className="sr-only">WhatsApp</span>
                        </a>
                        <a href="https://twitter.com/">
                            <i className="fab fa-twitter" aria-hidden="true"></i>
                            <span className="sr-only">Twitter</span>
                        </a>
                        <a href="https://linkedin.com/">
                            <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                            <span className="sr-only">Linkedin</span>
                        </a>
                        <a href="https://youtube.com/">
                            <i className="fab fa-youtube" aria-hidden="true"></i>
                            <span className="sr-only">Youtube</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>

    );
};



export default Header;
