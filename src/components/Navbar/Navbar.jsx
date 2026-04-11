import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 10);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    },[])


  return (
    <header className={`bg-white fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'drop-shadow-lg' : ''}`}>
      <nav className="flex justify-between max-w-350 px-10 mx-auto md:h-[14vh] h-[12vh] items-center">
        {/* logo */}
        <Link to="/" className="text-3xl font-bold">
          Gr<span className="text-orange-500">O</span>cify
        </Link>

        {/* Desktop Menu */}
        <ul className="lg:flex items-center gap-x-15 hidden">
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-orange-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Nav Action */}
        <div className="flex items-center gap-x-5">
          {/* input field */}
          <div className="md:flex items-center p-1 border-2 border-orange-500 rounded-full hidden">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Search..."
              className="flex-1 h-[3vh] px-3 focus:outline-none"
            />
            <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl">
              <FaSearch />
            </button>
          </div>

          <a href="#" className="text-zinc-800 text-2xl hover:text-orange-500">
            <FaHeart />
          </a>
          <a href="#" className="text-zinc-800 text-2xl hover:text-orange-500">
            <GiShoppingBag />
          </a>

            {/* Hamburger */}
          <a href="#" className="text-zinc-800 text-3xl hover:text-orange-500 lg:hidden" onClick={toggleMenu}>
          {
            showMenu ? <RiMenu3Line /> : <IoMdMenu />
          }
          </a>
        </div>

        {/* Mobile Menu */}
        <ul className={`flex flex-col md:w-100 md:h-100 gap-y-12 bg-orange-500/25 backdrop-blur-xl rounded-2xl p-10 items-center shadow-2xl gap-x-15 lg:hidden absolute top-30 -left-full transform -translate-x-1/2 ${showMenu ? 'left-1/2' : '-left-full'} transition-all duration-300`}>
          <li>
            <a
              href="#"
              className="md:text-2xl font-semibold tracking-wider text-orange-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="md:text-2xl font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="md:text-2xl font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#"
              className="md:text-2xl font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Contact
            </a>
          </li>
          {/* input field */}
          <li className="flex items-center p-1 border-2 border-orange-500 rounded-full md:hidden">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Search..."
              className="flex-1 h-[3vh] px-3 focus:outline-none"
            />
            <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl">
              <FaSearch />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
