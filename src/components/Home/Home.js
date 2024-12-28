import React from 'react'
import MainSlider from './MainSlider'
import AboutOneSection from '../AboutUs/AboutOneSection'
import HelpDonate from "./HelpDonate";
import DonationsCarousel from "./DonationsCarousel";
import TestimonialsSection from "../AboutUs/TestimonialsSection";
import SupportSection from "./SupportSection";

const Home = () => {
  return (
    <div>
      <MainSlider />
      <AboutOneSection />
      <HelpDonate />
      <DonationsCarousel />
      <SupportSection />
      <TestimonialsSection />

    </div>
  )
}

export default Home