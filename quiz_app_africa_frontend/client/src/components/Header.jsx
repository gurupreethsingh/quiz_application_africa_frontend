import React, { useState } from "react";
import { IoSchool } from "react-icons/io5";
import { FcGraduationCap } from "react-icons/fc";
import { GoSignIn } from "react-icons/go";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { CgLogIn } from "react-icons/cg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-white md:px-10 p-4 max-w-screen-2xl border-b border-b-stone-200 mx-auto text-primary fixed top-0 right-0 left-0 z-10">
        <div className="flex items-center mx-auto justify-between container font-medium text-lg">
          <Link
            to="/"
            className="text-2xl font-semibold flex items-center space-x-2"
          >
            <FcGraduationCap size={60} /> <span className="examlink">FEMI</span>
          </Link>

          {/* showing middle navigation */}
          <ul className="md:flex space-x-6 hidden">
            <li className="nav-item examlink">
              <Link to="/" className="block examlink">
                Home
              </Link>
            </li>

            <li className="nav-item examlink">
              <Link to="/profile" className="block examlink">
                Profile
              </Link>
            </li>

            <li className="nav-item examlink">
              <Link to="/about" className="block examlink">
                About
              </Link>
            </li>

            <li className="nav-item dropdown examlink">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Exam
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="#">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Another action
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item examlink">
              <Link to="#" className="block">
                Blog
              </Link>
            </li>

            <li className="nav-item hover:text-lightGray text-gray">
              <Link to="#" className="block hover:text-black">
                Tutor
              </Link>
            </li>

            <li className="nav-item dropdown examlink">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="#">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Another action
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          {/* showing login and sign up buttons  */}
          <div className="space-x-12 hidden md:flex items-center">
            <Link to="#" className="flex lg:flex items-center examlink">
              <GoSignIn />
              <Link to="/sign-in" className="mx-1 bg-light px-2 py-1 rounded">
                login
              </Link>
            </Link>
            <Link to="#" className="flex lg:flex items-center examlink">
              <CgLogIn />
              <Link to="/sign-up" className="mx-1 bg-light px-2 py-1 rounded">
                Sign Up
              </Link>
            </Link>
          </div>

          {/* button login and sign up only show in mobile view */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <RxCross1 className="w-12 text-black" size={20} />
              ) : (
                <BiMenuAltRight className="w-12 text-black" size={40} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Content below the header */}
      <div
        className={`space-y-4 pt-24 mt-3 ${
          isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
        }`}
      >
        <ul className="gradientBg w-9/12 mx-auto rounded">
          <li className="nav-item hover:text-lightGray text-light text-center text-lg mt-2 mb-2">
            <Link to="#" className="block hover:text-lightGray">
              Home
            </Link>
          </li>
          <li className="nav-item hover:text-lightGray  text-center text-lg mt-2 mb-2">
            <Link to="#" className="block hover:text-lightGray">
              <div className="btn-group">
                <button
                  className="btn dropdown-toggle text-light"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Exam
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Menu item
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Menu item
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Menu item
                    </Link>
                  </li>
                </ul>
              </div>
            </Link>
          </li>
          <li className="nav-item hover:text-lightGray text-light text-center text-lg mt-2 mb-2">
            <Link to="#" className="block hover:text-lightGray">
              Tutor
            </Link>
          </li>
          <li className="nav-item hover:text-lightGray text-light text-center text-lg mt-2 mb-2">
            <Link to="#" className="block hover:text-lightGray">
              Tutor
            </Link>
          </li>
          <li className="nav-item hover:text-lightGray text-light text-center text-lg mt-2 mb-2">
            <Link to="#" className="block hover:text-lightGray">
              <div className="btn-group">
                <button
                  className="btn dropdown-toggle text-light"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Exam
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Menu item
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Menu item
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Menu item
                    </Link>
                  </li>
                </ul>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
