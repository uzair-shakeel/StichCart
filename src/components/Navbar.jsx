import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../public/1.png";
import icon from "../../public/4d336f976aa04cc0da964cdd4dcb4b3d.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  console.log(sidebarOpen);
  return (
    <div>
      <div className="hidden lg:block 2xl:h-[216px] w-full bg-[#e51747]">
        <div className="px-[8%] py-4 hidden lg:flex justify-between">
          <Link to={"/"}>
            <img src={logo} className="h-20" alt="Logo" />
          </Link>
          <div className="flex flex-col items-end justify-between text-white">
            <Link to={"/login"} className="flex gap-2 items-center">
              <FaRegCircleUser size={28} className="text-[#ff9600]" />
              <div className="text-[23px] font-semibold">Login</div>
            </Link>
            <div>
              <ul className=" flex gap-9 text-[18px]">
                <li>
                  <Link
                    to="/bulk-uniform-tailoring"
                    className="hover:underline"
                  >
                    Our Services
                  </Link>
                </li>

                <li>
                  <Link to="/how-it-works" className="hover:underline">
                    How it Works
                  </Link>
                </li>
                <li>
                  <Link to="/why-choose-us" className="hover:underline">
                    Why Choose Us
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        className="lg:hidden h-[80px] py-4 px-[8%] bg-[#e51747]  fixed top-0 left-0 right-0"
        style={{ zIndex: "10000" }}
      >
        <div className="flex justify-between">
          <Link to={"/"} onClick={() => setSidebarOpen(false)}>
            <img src={logo} className="h-14" alt="Logo" />
          </Link>
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? (
              <IoClose className="text-white" size={25} />
            ) : (
              <GiHamburgerMenu className="text-white" size={25} />
            )}
          </button>
        </div>
      </div>
      <aside
        className={`${
          sidebarOpen
            ? "fixed lg:hidden top-0 right-0 w-full pt-[100px] h-[120%] bg-[#e51747] text-white p-4 transform translate-y-0 transition-transform duration-500"
            : "fixed lg:hidden top-0 right-0 w-full h-[100%] pt-[120px] bg-[#e51747]   text-white p-4 transform translate-y-[-100%] transition-transform duration-500"
        }`}
        style={{ zIndex: "10" }}
      >
        <ul className="text-[18px] flex flex-col gap-10 py-14 text-center">
          <li>
            <Link
              to="/bulk-uniform-tailoring"
              onClick={() => setSidebarOpen(false)}
              className="hover:underline"
            >
              Our Services
            </Link>
          </li>
          <li>
            <Link
              to="/how-it-works"
              onClick={() => setSidebarOpen(false)}
              className="hover:underline"
            >
              How it Works
            </Link>
          </li>

          <li>
            <Link
              to="/why-choose-us"
              onClick={() => setSidebarOpen(false)}
              className="hover:underline"
            >
              Why Choose Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              onClick={() => setSidebarOpen(false)}
              className="hover:underline"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setSidebarOpen(false)}
              to="/contact-us"
              className="hover:underline flex gap-2  items-center justify-center"
            >
              <FaRegCircleUser size={23} className="text-[#ff9600]" />
              Log In
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Navbar;
