import React from "react";
import logo from "../assets/images/logo.svg";
import cartIcon from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-white">
      <div className="logo">
        <img src={logo} alt="sneakers" />
      </div>
      <nav className="flex space-x-6">
        <a href="#">Collections</a>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
      <div className="flex items-center space-x-6">
        <button className="relative">
          <img src={cartIcon} alt="Cart" />
          <span className="absolute top-0 right-0 bg-orange-500 text-white rounded-full px-2 text-xs">
            0
          </span>
        </button>
        <img
          src={avatar}
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
