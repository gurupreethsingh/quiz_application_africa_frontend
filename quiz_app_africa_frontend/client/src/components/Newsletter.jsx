import React from "react";
import Banner from "../shared/Banner";
import new_email from "../assets/new-email.png";

const Newsletter = () => {
  return (
    <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12">
      <Banner
        banner={new_email}
        heading="Each student can share their discount code for friends"
        subheading="A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sendtence, is called the 'topic sentence'"
        btn1="I Have Code"
        btn2="Contact us"
      />
    </div>
  );
};

export default Newsletter;
