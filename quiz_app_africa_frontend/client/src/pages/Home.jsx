import React from "react";
import banner from "../assets/banner.jpg";
import { PiExamBold } from "react-icons/pi";
import Banner from "../shared/Banner";
import HomeFeatureOne from "../components/HomeFeatureOne";
import About from "../components/About";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-28">
        <Banner
          banner={banner}
          heading="Develop your skills without diligence"
          subheading="A good example of a paragraph contains a topic sentence, details, and a conclution, There are many different kinds of animals that live in China."
          btn1="Get Started"
          btn2="Know More"
        />
      </div>
      <div className="featuresection" id="features">
        <HomeFeatureOne />
      </div>
      <div className="" id="about">
        <About />
      </div>

      <div className="" id="newletter">
        <Newsletter />
      </div>

      <div className="" id="footer">
        <Footer />
      </div>
    </>
  );
};

export default Home;
