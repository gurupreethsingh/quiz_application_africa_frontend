// import React, { useState } from "react";
// import { IoSchool } from "react-icons/io5";
// // import { TbSchool } from "react-icons/tb";
// import { FcCollaboration } from "react-icons/fc";
// import { FcGraduationCap } from "react-icons/fc";
// import { GoSignIn } from "react-icons/go";
// import { BiMenuAltRight } from "react-icons/bi";
// import { RxCross1 } from "react-icons/rx";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   // State variable to manage dropdown visibility
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   // Function to toggle dropdown visibility
//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <>
//       <nav className="bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary fixed top-0 right-0 left-0">
//         <div className="flex items-center mx-auto justify-between container font-medium text-lg">
//           <Link
//             to="/"
//             className="text-2xl font-semibold flex items-center space-x-3"
//           >
//             <FcGraduationCap size={60} />{" "}
//             <span className="hover:text-lightGray text-dark">FEMI</span>
//           </Link>

//           {/* showing middle navaigation */}
//           <ul className="md:flex space-x-6 hidden ">
//             <li className="nav-item hover:text-lightGray text-black">
//               <Link to="/" className="block hover:text-lightGray">
//                 Home
//               </Link>
//             </li>

//             <li className="nav-item hover:text-lightGray text-black">
//               <Link to="/profile" className="block hover:text-lightGray">
//                 Profile
//               </Link>
//             </li>

//             <li className="nav-item hover:text-lightGray text-black">
//               <Link to="/about" className="block hover:text-lightGray">
//                 About
//               </Link>
//             </li>

//             <li className="nav-item dropdown hover:text-lightGray text-black">
//               <a
//                 className="nav-link dropdown-toggle"
//                 href="#"
//                 role="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 Exam
//               </a>
//               <ul className="dropdown-menu">
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     Action
//                   </a>
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     Another action
//                   </a>
//                 </li>
//                 <li>
//                   <hr className="dropdown-divider" />
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     Something else here
//                   </a>
//                 </li>
//               </ul>
//             </li>

//             <li className="nav-item hover:text-lightGray text-black">
//               <a href="" className="block hover:text-lightGray">
//                 Blog
//               </a>
//             </li>

//             <li className="nav-item hover:text-lightGray text-black">
//               <a href="" className="block hover:text-lightGray">
//                 Tutor
//               </a>
//             </li>

//             <li className="nav-item dropdown hover:text-lightGray text-black">
//               <a
//                 className="nav-link dropdown-toggle"
//                 href="#"
//                 role="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 Dropdown
//               </a>
//               <ul className="dropdown-menu">
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     Action
//                   </a>
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     Another action
//                   </a>
//                 </li>
//                 <li>
//                   <hr className="dropdown-divider" />
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     Something else here
//                   </a>
//                 </li>
//               </ul>
//             </li>
//           </ul>

//           {/* showing login and sign up buttons  */}
//           <div className=" space-x-12 hidden  md:flex items-center">
//             <a
//               href="/"
//               className=" flex lg:flex items-center text-black hover:text-lightGray"
//             >
//               <GoSignIn />
//               <button className=" mx-2 bg-light hover:text-lightGray  px-1 rounded">
//                 login
//               </button>
//             </a>
//             <button className=" mx-2 bg-light text-black hover:text-lightGray  px-4 rounded">
//               Sign up
//             </button>
//           </div>

//           {/* button login and sign up only show in mobile view */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="text-white focus:outline-none"
//             >
//               {isMenuOpen ? (
//                 <RxCross1 className="w-12 text-black " size={20} />
//               ) : (
//                 <BiMenuAltRight className="w-12 text-black" size={40} />
//               )}
//             </button>
//           </div>
//         </div>
//       </nav>

//       <div
//         className={`space-y-4 pt-24  mt-3  ${
//           isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
//         }`}
//       >
//         {
//           <ul className="">
//             <li className="nav-item hover:text-lightGray  text-black text-center text-lg mt-2 mb-2">
//               <a href="" className="block hover:text-lightGray">
//                 Home
//               </a>
//             </li>
//             <li className="nav-item hover:text-lightGray text-black text-center text-lg mt-2 mb-2">
//               <a href="" className="block hover:text-lightGray">
//                 <div className="btn-group">
//                   <button
//                     className="btn dropdown-toggle"
//                     type="button"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                   >
//                     Exam
//                   </button>
//                   <ul className="dropdown-menu">
//                     <li>
//                       <a className="dropdown-item" href="#">
//                         Menu item
//                       </a>
//                     </li>
//                     <li>
//                       <a className="dropdown-item" href="#">
//                         Menu item
//                       </a>
//                     </li>
//                     <li>
//                       <a className="dropdown-item" href="#">
//                         Menu item
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </a>
//             </li>
//             <li className="nav-item hover:text-lightGray text-black text-center text-lg mt-2 mb-2">
//               <a href="" className="block hover:text-lightGray">
//                 Tutor
//               </a>
//             </li>
//             <li className="nav-item hover:text-lightGray text-black text-center text-lg mt-2 mb-2">
//               <a href="" className="block hover:text-lightGray">
//                 Tutor
//               </a>
//             </li>

//             <li className="nav-item hover:text-lightGray text-black text-center text-lg mt-2 mb-2">
//               <a href="" className="block hover:text-lightGray">
//                 <div className="btn-group">
//                   <button
//                     className="btn dropdown-toggle"
//                     type="button"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                   >
//                     Exam
//                   </button>
//                   <ul className="dropdown-menu">
//                     <li>
//                       <a className="dropdown-item" href="#">
//                         Menu item
//                       </a>
//                     </li>
//                     <li>
//                       <a className="dropdown-item" href="#">
//                         Menu item
//                       </a>
//                     </li>
//                     <li>
//                       <a className="dropdown-item" href="#">
//                         Menu item
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </a>
//             </li>
//           </ul>
//         }
//       </div>
//     </>
//   );
// };

// export default Header;

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
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Exam
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item examlink">
              <a href="#" className="block">
                Blog
              </a>
            </li>

            <li className="nav-item hover:text-lightGray text-gray">
              <a href="#" className="block hover:text-black">
                Tutor
              </a>
            </li>

            <li className="nav-item dropdown examlink">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          {/* showing login and sign up buttons  */}
          <div className="space-x-12 hidden md:flex items-center">
            <a href="#" className="flex lg:flex items-center examlink">
              <GoSignIn />
              <button className="mx-1 bg-light px-2 py-1 rounded">login</button>
            </a>
            <a href="#" className="flex lg:flex items-center examlink">
              <CgLogIn />
              <button className="mx-1 bg-light px-2 py-1 rounded">
                Sign Up
              </button>
            </a>
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
            <a href="#" className="block hover:text-lightGray">
              Home
            </a>
          </li>
          <li className="nav-item hover:text-lightGray  text-center text-lg mt-2 mb-2">
            <a href="#" className="block hover:text-lightGray">
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
                    <a className="dropdown-item" href="#">
                      Menu item
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Menu item
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Menu item
                    </a>
                  </li>
                </ul>
              </div>
            </a>
          </li>
          <li className="nav-item hover:text-lightGray text-light text-center text-lg mt-2 mb-2">
            <a href="#" className="block hover:text-lightGray">
              Tutor
            </a>
          </li>
          <li className="nav-item hover:text-lightGray text-light text-center text-lg mt-2 mb-2">
            <a href="#" className="block hover:text-lightGray">
              Tutor
            </a>
          </li>
          <li className="nav-item hover:text-lightGray text-light text-center text-lg mt-2 mb-2">
            <a href="#" className="block hover:text-lightGray">
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
                    <a className="dropdown-item" href="#">
                      Menu item
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Menu item
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Menu item
                    </a>
                  </li>
                </ul>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;