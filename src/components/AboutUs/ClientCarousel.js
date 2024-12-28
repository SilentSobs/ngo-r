import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../AboutUs/styles/ClientCarousel.css';

const ClientCarousel = () => {
    const options = {
        items: 5,
        margin: 65,
        smartSpeed: 700,
        loop: true,
        autoplay: true,
        autoplayTimeout: 6000,
        nav: true,
        dots: false,
        navText: [
            '<span class="icon-arrow-left"></span>',
            '<span class="icon-arrow-right"></span>'
        ],
        responsive: {
            0: { items: 2, margin: 50 },
            360: { items: 3, margin: 40 },
            575: { items: 4, margin: 40 },
            768: { items: 4, margin: 80 },
            992: { items: 5, margin: 100 },
            1200: { items: 6, margin: 134 }
        }
    };

    return (
        <div className="client-carousel">
            <div className="container">
                <OwlCarousel className="client-carousel__one owl-theme" {...options}>
                    <div className="client-carousel__item">
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/partners-logo/1.jpeg`}
                            alt="brand"
                            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}

                            className="client-carousel__item__img"
                        />
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/partners-logo/1.jpeg`}
                            alt="brand"
                            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                            className="client-carousel__item__hover-img"
                        />
                    </div>

                    <div className="client-carousel__item">
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/partners-logo/2.jpeg`}
                            alt="brand"
                            className="client-carousel__item__img"
                        />
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/partners-logo/2.jpeg`}
                            alt="brand"
                            className="client-carousel__item__hover-img"
                        />
                    </div>

                    <div className="client-carousel__item">
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/partners-logo/3.jpeg`}
                            alt="brand"
                            className="client-carousel__item__img"
                        />
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/partners-logo/3.jpeg`}
                            alt="brand"
                            className="client-carousel__item__hover-img"
                        />
                    </div>

                    <div className="client-carousel__item">
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/partners-logo/4.jpeg`}
                            alt="brand"
                            className="client-carousel__item__img"
                        />
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/partners-logo/4.jpeg`}
                            alt="brand"
                            className="client-carousel__item__hover-img"
                        />
                    </div>

                    <div className="client-carousel__item">
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/partners-logo/5.jpeg`}
                            alt="brand"
                            className="client-carousel__item__img"
                        />
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/partners-logo/5.jpeg`}
                            alt="brand"
                            className="client-carousel__item__hover-img"
                        />
                    </div>

                    <div className="client-carousel__item">
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/partners-logo/6.jpeg`}
                            alt="brand"
                            className="client-carousel__item__img"
                        />
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/partners-logo/6.jpeg`}
                            alt="brand"
                            className="client-carousel__item__hover-img"
                        />
                    </div>
                    <div className="client-carousel__item">
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/partners-logo/7.jpeg`}
                            alt="brand"
                            className="client-carousel__item__img"
                        />
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/partners-logo/7.jpeg`}
                            alt="brand"
                            className="client-carousel__item__hover-img"
                        />
                    </div>
                    <div className="client-carousel__item">
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/partners-logo/8.jpeg`}
                            alt="brand"
                            className="client-carousel__item__img"
                        />
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/partners-logo/8.jpeg`}
                            alt="brand"
                            className="client-carousel__item__hover-img"
                        />
                    </div>
                    <div className="client-carousel__item">
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/partners-logo/9.jpeg`}
                            alt="brand"
                            className="client-carousel__item__img"
                        />
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/partners-logo/9.jpeg`}
                            alt="brand"
                            className="client-carousel__item__hover-img"
                        />
                    </div>
                    <div className="client-carousel__item">
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/partners-logo/10.jpeg`}
                            alt="brand"
                            className="client-carousel__item__img"
                        />
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/partners-logo/10.jpeg`}
                            alt="brand"
                            className="client-carousel__item__hover-img"
                        />
                    </div>
                    <div className="client-carousel__item">
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/partners-logo/11.jpeg`}
                            alt="brand"
                            className="client-carousel__item__img"
                        />
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/partners-logo/11.jpeg`}
                            alt="brand"
                            className="client-carousel__item__hover-img"
                        />
                    </div>
                    <div className="client-carousel__item">
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/partners-logo/12.jpeg`}
                            alt="brand"
                            className="client-carousel__item__img"
                        />
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/partners-logo/12.jpeg`}
                            alt="brand"
                            className="client-carousel__item__hover-img"
                        />
                    </div>
                    <div className="client-carousel__item">
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/partners-logo/13.jpeg`}
                            alt="brand"
                            className="client-carousel__item__img"
                        />
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/partners-logo/13.jpeg`}
                            alt="brand"
                            className="client-carousel__item__hover-img"
                        />
                    </div>

                    
                </OwlCarousel>
            </div>
        </div>
    );
};

export default ClientCarousel;
