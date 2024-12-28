import React from 'react'
import AboutOneSection from "./AboutOneSection";
import AboutSection from "./AboutSection";
import StorySection from "./StorySection";
import TeamSection from "./TeamSection";
import FaqSection from "./FaqSection";
import TestimonialsSection from "./TestimonialsSection";
import HelpPeopleSection from "./HelpPeopleSection";
import ClientCarousel from "./ClientCarousel";




const AboutUs = () => {
    return (
        <div>

            <AboutSection/>
            <AboutOneSection/>
            <StorySection/>
            <TeamSection/>
            <FaqSection/>
            <TestimonialsSection/>
            <HelpPeopleSection/>
            <ClientCarousel/>
    

        </div>

    )
}

export default AboutUs