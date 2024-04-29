import React from "react";
import banner from "../assets/banner.jpg";
import { PiExamBold } from "react-icons/pi";

const Home = () => {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-28">
      <div className="bg-light rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
        <div className="flex flex-col md:flex-row-reverse justify-around items-center gap-10 lg:p-5">
          {/* Banner images */}
          <div>
            {/* <PiExamBold className="lg:h-[386px]" size={500} /> */}
            <img
              src={banner}
              alt="some banner of the collge"
              className="lg:h-[386px] rounded"
            />
          </div>
          {/* banner content */}
          <div className="md:w-3/5">
            <h2 className="md:text-7xl tex-4xl font-semibold text-dark mb-6 leading-relaxed">
              Develope your skills without diligence
            </h2>
            <p className="text-dark text-2xl mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              obcaecati quia eos fugiat! Nobis voluptatibus quisquam in ipsum
              explicabo aperiam tenetur unde non fuga saepe deleniti eos,
              voluptates dicta deserunt.
            </p>
            <div>
              <button className="py-2 px-6 btn btn-sm btn-outline-dark rounded me-3 font-semibold">
                Get Started
              </button>
              <button className="py-2 px-6 btn btn-sm btn-outline-dark rounded font-semibold">
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
