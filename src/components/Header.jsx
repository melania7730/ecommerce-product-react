import React from "react";
import Logo from "../assets/images/logo.svg";
import Avatar from "../assets/images/image-avatar.png";
import IconCart from "../assets/images/icon-cart.jsx";
import IconMenu from "../assets/images/icon-menu.jsx";

const Header = ({ toggleCart, cartItemCount }) => {
  return (
    <header className="flex justify-between items-center px-6 h-[4.3rem] lg:py-14 lg:px-14 lg:max-w-[1220px] border-b border-opacity-10 mx-auto">
      <div className="flex items-center">
        <div className="lg:hidden mr-4">
          <IconMenu />
        </div>
        <div className="flex items-center gap-x-14">
          <img src={Logo} alt="Logo" className="logo" />
          <nav className="hidden md:flex gap-x-8 text-gray-500">
            <a href="#" className="hover:text-black">
              Collections
            </a>
            <a href="#" className="hover:text-black">
              Men
            </a>
            <a href="#" className="hover:text-black">
              Women
            </a>
            <a href="#" className="hover:text-black">
              About
            </a>
            <a href="#" className="hover:text-black">
              Contact
            </a>
          </nav>
        </div>
      </div>

      <div className="flex items-center gap-x-6 lg:gap-x-12">
        <button className="relative" onClick={toggleCart}>
          <IconCart className="fill-dark-grayish-blue" />
          {cartItemCount > 0 && (
            <span className="absolute top-0 right-0 translate-x-2/3 -translate-y-1/2 bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {cartItemCount}
            </span>
          )}
        </button>
        <img
          className="w-6 lg:w-[3.1rem] h-6 lg:h-[3.1rem] rounded-full"
          src={Avatar}
          alt="avatar"
        />
      </div>
    </header>
  );
};

export default Header;
