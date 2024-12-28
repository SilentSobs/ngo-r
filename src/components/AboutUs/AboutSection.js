import React from 'react';

const AboutSection = () => {
    return (
        <div className="page-wrapper">
            <section className="page-header extraClassName">
                <div 
                    className="page-header__bg" 
                    style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/backgrounds/page-header-bg-1-1.jpg)` }}>
                </div>
                {/* /.page-header__bg */}
                <div className="container">
                    <h2 className="page-header__title">About us</h2>
                    <ul className="cleenhearts-breadcrumb list-unstyled">
                        <li><i className="icon-home"></i> <a href="index.html">Home</a></li>
                        <li><span>About Us</span></li>
                    </ul>
                    {/* /.cleenhearts-breadcrumb list-unstyled */}
                </div>
                {/* /.container */}
            </section>
            {/* /.page-header */}
        </div>
    );
}

export default AboutSection;
