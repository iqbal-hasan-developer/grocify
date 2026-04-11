import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-zinc-100 py-20">
      <div className="flex flex-wrap max-w-350 mx-auto px-10 gap-y-12">
        <div className="flex-1 basis-75">
          {/* logo */}
          <a href="#" className="text-3xl font-bold">
            Gr<span className="text-orange-500">O</span>cify
          </a>

          <p className="text-zinc-600 mt-6 max-w-87.5">
          We make grocery shopping simple and convenient, offering a smooth experience with quality products, fair prices, and reliable service—all in one place.
          </p>

          <p className="text-zinc-800 mt-6">
            &copy; {new Date().getFullYear()} GrOcify. All rights reserved.
          </p>
        </div>

        <ul className="flex-1">
            <li>
                <h5 className="text-zinc-800 text-2xl font-bold">Company</h5>
            </li>
            <li className="mt-6">
                <a href="" className="text-zinc-800 hover:text-orange-500">About</a>
            </li>
            <li className="mt-6">
                <a href="" className="text-zinc-800 hover:text-orange-500">FAQ'S</a>
            </li>
        </ul>

        <ul className="flex-1">
            <li>
                <h5 className="text-zinc-800 text-2xl font-bold">Support</h5>
            </li>
            <li className="mt-6">
                <a href="" className="text-zinc-800 hover:text-orange-500">Support Center</a>
            </li>
            <li className="mt-6">
                <a href="" className="text-zinc-800 hover:text-orange-500">Feedback</a>
            </li>
            <li className="mt-6">
                <a href="" className="text-zinc-800 hover:text-orange-500">Contact Us</a>
            </li>
        </ul>

        <div className="">
            <h5 className="text-zinc-800 text-2xl font-bold">Stay Connected</h5>
            <p className="mt-6 text-zinc-600">
                Questions or feedback? <br /> We'd love to hear from you!
            </p>

            <div className="flex p-1 rounded-lg mt-6 bg-white">
                <input type="email" name="email" id="email" placeholder="Enter your email" className="flex-1 focus:outline-1 outline-orange-500 rounded-lg" />
                <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white w-full p-2 rounded-lg text-2xl hover:to-orange-600 cursor-pointer">
                <IoIosArrowForward />
                </button>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
