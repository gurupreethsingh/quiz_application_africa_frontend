import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGraduationCap } from "react-icons/fc";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailInput = (e) => {
    e.preventDefault();
    const newEmail = e.target.value.trim(); // Trim the input value to remove leading and trailing spaces
    setEmail(newEmail);
    if (email === "") {
      alert("Email cannot be empty.");
    } else {
      setEmail(newEmail);
      console.log("Email entered is:", email);
    }
  };

  return (
    <div className="md:px-14 max-w-screeen-2xl mx-auto p-5 lastfootersection">
      <div>
        <div className="flex  flex-wrap justify-evenly items-center">
          <ul className="nav flex-column nav-underline text-left">
            <h4 className="text-light text-decoration-underline font-bold">
              Adderss
            </h4>

            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Ecoders, #192, Hesaraghatta Road, T-dasarahalli, Bangalore
                560057.
                <br /> Phone - 9538596766
                <br />
                Email - igurupreeth@gmail.com
              </a>
            </li>
            <li className="nav-item">
              <div>
                <input
                  type="email"
                  value={email}
                  id="email"
                  placeholder="Your email"
                  className="bg-[#7e33c9ae] py-2 px-4 rounded-md focus:outline-none text-white"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <button
                  type="submit"
                  className="subscribebutton px-4 py-2 -ml-2 cursor-pointer"
                  onClick={handleEmailInput}
                >
                  Subscribe
                </button>
              </div>
            </li>
          </ul>

          <ul className="nav flex-column nav-underline text-center ">
            <h4 className="text-center text-white">Web Links</h4>
            <li className="nav-item">
              <a className="nav-link text-white " href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Contact
              </a>
            </li>
          </ul>

          <ul className="nav flex-column nav-underline text-center">
            <h4 className="text-white text-center">Overview</h4>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Sign In
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Sign up
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Profile
              </a>
            </li>
          </ul>

          <ul className="nav flex-column nav-underline text-center">
            <h4 className="text-white text-center">Platforms</h4>
            <li className="nav-item">
              <a className="nav-link text-white " href="#">
                Facebook
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Twitter
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <small>
        <p className="text-center text-white pt-5">
          Copy right &copy; FEMI, Nigeria. All rights reserved.
        </p>
      </small>
    </div>
  );
};

export default Footer;
