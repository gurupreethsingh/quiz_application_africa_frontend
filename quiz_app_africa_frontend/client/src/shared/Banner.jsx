import React from "react";

const Banner = ({ banner, heading, subheading, btn1, btn2 }) => {
  return (
    <div>
      <div className="gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
        <div className="flex flex-col md:flex-row-reverse justify-around items-center gap-10 lg:p-5">
          {/* Banner images */}
          <div>
            {/* <PiExamBold className="lg:h-[386px]" size={500} /> */}
            <img
              src={banner}
              alt="some banner of the collge"
              className="lg:h-[386px] rounded  md:h-[356px] sm:h-[186px]"
            />
          </div>
          {/* banner content */}
          <div className="md:w-3/5">
            <h2 className="lg:text-7xl md:text-5xl text-3xl font-semibold text-white mb-6 leading-relaxed">
              {heading}
            </h2>
            <p className="text-[#EBEBEB] sm:text-1xl md:text-1xl lg:text-2xl mb-8">
              {subheading}{" "}
            </p>
            <div className="space-x-5 space-y-4">
              <button className="py-3 px-8  text-white rounded-3  transition-all duration-300 btn1">
                {btn1}
              </button>
              <button className="py-3 px-8  text-white rounded-3  transition-all duration-300 btn1">
                {btn2}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
