import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import "./App.css";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import AboutLanding from "./components/AboutLanding";
import PropertyCarousel from "./components/Carousel";
import BoS from "./components/BoS";
import ExpertsSection from "./components/TeamLanding";
import ExperienceExcellence from "./components/ServicesLanding";
import RealEstateForm from "./components/RealEstate";
import Footer from "./components/Footer";
import TeamSection from "./components/Team";
import ServicesSection from "./components/Services";
import ServicesCarousel from "./components/ServicesCarousel";
import AboutPage from "./components/AboutPage";
import ScrollToTop from "./components/Scrolltotop";
import WhyChooseUs from "./components/Whyus";
import AboutUs from "./components/AboutUs";
import Servicest from "./components/Serviest";
import DevelopersCommunities from "./components/Blog";
import Process from "./components/Proces.";

function App() {
  // 🔥 Lenis init directly inside App
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      smoothTouch: false, // mobile uses native scroll
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Landing />
              <AboutLanding />
              <PropertyCarousel />
              <BoS />
              <ExpertsSection />
              <ExperienceExcellence />
              <AboutUs/>
              <DevelopersCommunities/>
              <RealEstateForm />
              <Footer />
            </>
          }
        />

        {/* Team Page */}
        <Route
          path="/team"
          element={
            <>
              <TeamSection />
             <WhyChooseUs/>
              <Footer />
            </>
          }
        />

        {/* Services Page */}
        <Route
          path="/services"
          element={
            <>
              {/* <ServicesSection /> */}
              <Servicest/>
                            <ServicesCarousel />
              <Footer />
            </>
          }
        />

        {/* About Page */}
        <Route
          path="/about"
          element={
            <>
              <AboutPage />
              <Footer />
            </>
          }
        />

        {/* Contact Page */}
        <Route
          path="/contact"
          element={
            <>
              <RealEstateForm />
              <Footer />
            </>
          }
        />

{/* Process [age] */}
        <Route
          path="/process"
          element={
            <>
            <Process/>
              <Footer />
            </>
          }
        />
      </Routes></>
  );
}

export default App;
