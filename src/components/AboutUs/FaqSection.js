import React, { useState } from 'react';

const FaqSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-one faq-one--about section-space">
            <div 
                className="faq-one__bg" 
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/backgrounds/faq-bg-2.png)` }}
            ></div>
            {/* /.faq-one__bg */}
            <div className="container">
                <div className="row gutter-y-50">
                    <div className="col-xl-6 col-lg-6 wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="100ms">
                        <div className="faq-one__image">
                            <img 
                                src={`${process.env.PUBLIC_URL}/assets/images/faq/faq-1-1.jpg`} 
                                alt="faq-image" 
                            />
                        </div>
                        {/* /.faq-one__image */}
                    </div>
                    {/* /.col-xl-6 col-lg-6 */}
                    <div className="col-xl-6 col-lg-6">
                        <div className="faq-one__content">
                            <div className="sec-title">
                                <h6 className="sec-title__tagline extraClassName">Recently asked questions</h6>
                                {/* /.sec-title__tagline */}
                                <h3 className="sec-title__title">
                                    People Are Frequently Asking Some <span className="sec-title__title__inner">Questions</span>
                                </h3>
                                {/* /.sec-title__title */}
                            </div>
                            {/* /.sec-title */}
                            <p className="faq-one__text">
                                We help companies develop powerful corporate social responsibility, grantmaking, and employee engagement strategies.
                            </p>
                            {/* /.faq-one__text */}
                            <div 
                                className="cleenhearts-accordion wow fadeInUp" 
                                data-wow-duration="1500ms" 
                                data-wow-delay="100ms" 
                                data-grp-name="cleenhearts-accordion"
                            >
                                {/* Accordion Item 1 */}
                                <div className={`accordion ${activeIndex === 0 ? 'active' : ''}`}>
                                    <div className="accordion-title" onClick={() => toggleAccordion(0)}>
                                        <h4>
                                            How can I donate to people?
                                            <span className="accordion-title__icon"></span>
                                            {/* /.accordion-title__icon */}
                                        </h4>
                                    </div>
                                    <div className="accordion-content" style={{ display: activeIndex === 0 ? 'block' : 'none' }}>
                                        <div className="inner">
                                            <p>We help companies develop powerful corporate social responsibility, grantmaking, and employee engagement strategies.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* /.accordion-item */}
                                
                                {/* Accordion Item 2 */}
                                <div className={`accordion ${activeIndex === 1 ? 'active' : ''}`}>
                                    <div className="accordion-title" onClick={() => toggleAccordion(1)}>
                                        <h4>
                                            IT service for business network?
                                            <span className="accordion-title__icon"></span>
                                            {/* /.accordion-title__icon */}
                                        </h4>
                                    </div>
                                    <div className="accordion-content" style={{ display: activeIndex === 1 ? 'block' : 'none' }}>
                                        <div className="inner">
                                            <p>We help companies develop powerful corporate social responsibility, grantmaking, and employee engagement strategies.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* /.accordion-item */}
                                
                                {/* Accordion Item 3 */}
                                <div className={`accordion ${activeIndex === 2 ? 'active' : ''}`}>
                                    <div className="accordion-title" onClick={() => toggleAccordion(2)}>
                                        <h4>
                                            Is this a non-profit organization?
                                            <span className="accordion-title__icon"></span>
                                            {/* /.accordion-title__icon */}
                                        </h4>
                                    </div>
                                    <div className="accordion-content" style={{ display: activeIndex === 2 ? 'block' : 'none' }}>
                                        <div className="inner">
                                            <p>We help companies develop powerful corporate social responsibility, grantmaking, and employee engagement strategies.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* /.accordion-item */}
                            </div>
                        </div>
                        {/* /.faq-one__content */}
                    </div>
                    {/* /.col-xl-6 col-lg-6 */}
                </div>
                {/* /.row */}
            </div>
            {/* /.container */}
        </section>
    );
};

export default FaqSection;
