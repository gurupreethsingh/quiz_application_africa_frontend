import React from "react";
import education from "../assets/education.png";

const HomeFeatureOne = () => {
  return (
    <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        <div className="lg:w-1/4 ps-5 pe-5">
          <h3 className="text-3xl text-primaryColor font-bold lg:w-1/2 mb-3">
            Why are we better than others
          </h3>
          <p className="text-gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quam
            dicta fugiat laboriosam labore quibusdam dignissimos at laborum iure
            numquam, nihil eligendi sequi nisi ipsam quasi, a non quae quod?
          </p>
        </div>

        {/* Feature cards */}
        <div className="w-full lg:w-3/4">
          <div className="flex flex-wrap justify-evenly">
            <div className="bg-[rgba(255, 255, 255, 0)] rounded-[35px] h-96 shadow-3xl  flex justify-center items-center hover:-translate-y-4 transition-all duration-300 mb-5 ">
              <div
                className=" flex flex-col justify-center items-center"
                style={{ height: "50%" }}
              >
                <img
                  src={education}
                  alt="feature 1"
                  style={{ height: "50%" }}
                />
                <h5 className="text-2xl font-semibold text-gray px-5 text-center mt-5">
                  Convenient study Schedule
                </h5>
              </div>
            </div>
            <div className="bg-[rgba(255, 255, 255, 0)] rounded-[35px] h-96 shadow-3xl  flex justify-center items-center hover:-translate-y-4 transition-all duration-300 mb-5">
              <div
                className=" flex flex-col justify-center items-center"
                style={{ height: "50%" }}
              >
                <img
                  src={education}
                  alt="feature 1"
                  style={{ height: "50%" }}
                />
                <h5 className="text-2xl font-semibold text-gray px-5 text-center mt-5">
                  Convenient study Schedule
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFeatureOne;
