import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black/70 py-10 mt-10">
      <div className="max-w-[88rem] mx-auto grid grid-cols-1 justify-between md:grid-cols-2">
        <div className="flex justify-between gap-26">
          {/* Company Info (Start) */}
          <div className="order-1 md:order-1 text-left">
            <h2 className="text-xl font-bold">RentMosho</h2>
            <p className="text-gray-500 text-md mt-2 w-60">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          {/* Company Info (Start) */}
          <div className="order-2 md:order-2 text-left">
            <h2 className="text-xl font-semibold">Categories</h2>
            <ul className="mt-2 space-y-2 text-gray-500">
              <li>
                <a href="/furniture" className="hover:text-gray-700">
                  Furniture
                </a>
              </li>
              <li>
                <a href="/electronics" className="hover:text-gray-700">
                  Electronics
                </a>
              </li>
              <li>
                <a href="/appliances" className="hover:text-gray-700">
                  Appliances
                </a>
              </li>
              <li>
                <a href="/books" className="hover:text-gray-700">
                  Books
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links (Center) */}
          <div className="order-3 md:order-3 text-center">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-gray-500">
              <li>
                <a href="/about" className="hover:text-gray-700">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-700">
                  Contact
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-gray-700">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-gray-700">
                  Blog
                </a>
              </li>
              <li>
                <a href="/offers" className="hover:text-gray-700">
                  Offers
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Newsletter (End) */}
        <div className="order-4 md:order-4 text-right">
          <h3 className="text-xl font-semibold text-right">Stay Connected</h3>
          <div className="flex space-x-4 mt-2 justify-end text-right gap-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-gray-200 rounded-md p-1 cursor-pointer"
            >
              <FaFacebook size={20} color="#484949" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-gray-200 rounded-md p-1 cursor-pointer"
            >
              <FaInstagram size={20} color="#484949" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-gray-200 rounded-md p-1 cursor-pointer"
            >
              <FaTwitter size={20} color="#484949" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-gray-200 rounded-md p-1 cursor-pointer"
            >
              <FaLinkedin size={20} color="#484949" />
            </a>
          </div>

          <h3 className="text-xl font-semibold mt-4">Conditions</h3>
          <div className="flex space-x-4 mt-2 justify-end text-right gap-4">
            <ul className="flex mt-2 text-md space-y-2 text-gray-500 gap-4">
              <li>
                <a href="/privacy-policy" className="hover:text-gray-700">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-condition" className="hover:text-gray-700">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/rental-agreement" className="hover:text-gray-700">
                  Rental Agreement
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-[88rem] mx-auto border-t-2 border-dashed border-gray-300 my-6"></div>{" "}
      <div className="flex justify-between mt-8 px-26">
        <div className="text-gray-400 text-sm">
          © {new Date().getFullYear()} RentMosho. All rights reserved.
        </div>
        <div className="text-gray-400 text-sm flex items-center gap-1">
          © MADE BY <span className="text-red-500">❤️</span> WITH SHDPIXEL IN
          <img
            src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
            alt="India Flag"
            className="w-5 h-5 rounded-md"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
