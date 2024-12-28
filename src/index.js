import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import SubscribeSection from './components/Home/SubscribeSection';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Donation from './components/Donation/Donation';
import DonatePage from './components/Donation/DonatePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <div className="page-wrapper">

      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/donation-details" element={<Donation />} />
        <Route path="/donation-page" element={<DonatePage />} />
      </Routes>


      <SubscribeSection />
      <Footer />
    </div>
  </BrowserRouter>
);
