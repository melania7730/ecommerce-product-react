import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import cartIcon from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";
import Cart from "./Cart";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <header className="flex justify-between items-center py-8 px-14 max-w-[1220px] border-b border-slate-300 mx-auto">
      <div className="flex items-center">
        <div className="logo mr-14">
          <img src={logo} alt="sneakers" />
        </div>
        <nav className="hidden md:flex space-x-8 text-gray-500">
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
      <div className="flex items-center space-x-12">
        <button className="relative" onClick={handleCartToggle}>
          <img src={cartIcon} alt="Cart" />
          {isCartOpen && (
            <span className="absolute top-0 right-0 translate-x-2/3 -translate-y-1/2 bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              0
            </span>
          )}
        </button>
        <img
          src={avatar}
          alt="User Avatar"
          className="w-12 h-12 rounded-full"
        />
      </div>
      {isCartOpen && <Cart />}
    </header>
  );
};

export default Header;
