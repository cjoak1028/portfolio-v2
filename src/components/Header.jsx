import { useState } from "react";
import LogoImage from "../assets/logo-profile.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = ["About", "Projects", "Contact"];

  const NavLink = ({ label }) => {
    return (
      <a className="py-3 sm:px-4 sm:py-0 hover:opacity-60 cursor-pointer transition-opacity inline-block">
        {label}
      </a>
    );
  };

  const handleMenuState = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div>
      <div className="px-6 md:px-10 h-[3.75rem] sm:h-[5.125rem] flex flex-row justify-between items-center bg-white">
        <div className="flex flex-row gap-2 sm:gap-3 items-center">
          {/* <img src={LogoImage} className="w-5 h-5 sm:w-7 sm:h-7 rounded-full" /> */}
          <span className="font-semibold tracking-widest sm:text-lg">
            cjkim.dev
          </span>
        </div>
        <nav className="hidden sm:block">
          <ul className="flex flex-row items-center font-medium">
            {navLinks.map((link, index) => {
              return (
                <li key={`${link}${index}`}>
                  <NavLink label={link} />
                </li>
              );
            })}
            <a className="ml-4 flex items-center primary-button">Resume</a>
          </ul>
        </nav>
        <button
          className="inline-flex w-6 h-6 text-slate-800 bg-white text-center items-center justify-center rounded transition"
          onClick={handleMenuState}
        >
          <span className="sr-only">Menu</span>
          <svg
            className="w-4 h-4 fill-current pointer-events-none"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              className={`origin-center -translate-y-[5px] translate-x-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] ${
                isMenuOpen && "translate-x-0 translate-y-0 rotate-[315deg]"
              }`}
              y="7"
              width="9"
              height="2"
              rx="1"
            ></rect>
            <rect
              className={`origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] ${
                isMenuOpen && "rotate-45"
              }`}
              y="7"
              width="16"
              height="2"
              rx="1"
            ></rect>
            <rect
              className={`origin-center translate-y-[5px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] ${
                isMenuOpen && "translate-y-0 rotate-[135deg]"
              }`}
              y="7"
              width="9"
              height="2"
              rx="1"
            ></rect>
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div
          className="h-full bg-black/50 z-10 fixed top-[3.75rem] left-0 w-full sm:hidden"
          onClick={handleMenuState}
        >
          <span className="h-0.5 w-full bg-gray-50 block"></span>
          <nav className="bg-white p-8" onClick={(e) => e.stopPropagation()}>
            <ul className="flex flex-col font-medium -mt-3 -mb-3">
              {navLinks.map((link, index) => {
                return (
                  <li key={`${link}${index}`}>
                    <NavLink label={link} />
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
