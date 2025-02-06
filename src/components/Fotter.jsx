import React, { useState, useEffect } from "react";
import RentmoshLogo from "../assets/images/Rentmosh-logo.png";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-100 text-black/70 py-10 px-6 md:px-20 lg:px-34 relative md:mt-20 mt-10">
      <div className="max-w-[1500px] mx-auto w-full">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center md:text-left ">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex justify-center md:justify-start mb-10">
              <img src={RentmoshLogo} alt="RentMosh Logo" className="h-8" />
            </Link>
            <p className="text-gray-500 text-md mt-2">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>

          {/* Categories & Quick Links */}
          <div className="flex flex-col md:flex-row justify-center md:justify-between gap-10">
            <div>
              <h2 className="text-xl font-semibold">Categories</h2>
              <ul className="mt-2 space-y-2 text-gray-500">
                <li><a href="/furniture" className="hover:text-gray-700">Furniture</a></li>
                <li><a href="/electronics" className="hover:text-gray-700">Electronics</a></li>
                <li><a href="/appliances" className="hover:text-gray-700">Appliances</a></li>
                <li><a href="/books" className="hover:text-gray-700">Books</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Quick Links</h3>
              <ul className="mt-2 space-y-2 text-gray-500">
                <li><a href="/aboutUs" className="hover:text-gray-700">About Us</a></li>
                <li><a href="/contactUs" className="hover:text-gray-700">Contact Us</a></li>
                <li><a href="/faq" className="hover:text-gray-700">FAQs</a></li>
                <li><a href="/blog" className="hover:text-gray-700">Blog</a></li>
              </ul>
            </div>
          </div>

          {/* Social Media & Policies */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-semibold">Stay Connected</h3>
            <div className="flex justify-center md:justify-end space-x-4 mt-2">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:bg-gray-200 rounded-md p-2">
                <FaFacebook size={20} color="#484949" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:bg-gray-200 rounded-md p-2">
                <FaInstagram size={20} color="#484949" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:bg-gray-200 rounded-md p-2">
                <FaTwitter size={20} color="#484949" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:bg-gray-200 rounded-md p-2">
                <FaLinkedin size={20} color="#484949" />
              </a>
            </div>

            <div className="mt-5">
              <ul className="text-md space-y-2 text-gray-500">
                <li><a href="/privacy-policy" className="hover:text-gray-700">Privacy Policy</a></li>
                <li><a href="/terms-condition" className="hover:text-gray-700">Terms & Conditions</a></li>
                <li><a href="/rental-agreement" className="hover:text-gray-700">Rental Agreement</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="max-w-[88rem] mx-auto border-t-2 border-dashed border-gray-300 my-6"></div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center text-center">
          <div className="text-sm">
            <span className="text-gray-400 mr-1">© {new Date().getFullYear()}</span>
            <span className="text-red-800">RentMosh </span>
            <span className="text-gray-400">| All rights reserved.</span>
          </div>
          <div className="text-gray-400 text-sm flex flex-col md:flex-row items-center gap-1 mt-3 md:mt-0">
            Developed By{" "}
            <a href="https://www.metamatrixtech.com/" target="_blank" rel="noopener noreferrer" className="text-red-800 hover:underline">
              Metamatrix Technologies
            </a>
            <span className="hidden md:inline">|</span>
            <a href="https://shdpixel.com/" target="_blank" rel="noopener noreferrer" className="text-red-800 hover:underline">
              SHDPIXEL
            </a>
          </div>
        </div>

      </div>

      {/* Floating Back to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-red-800 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110 animate-bounce"
          aria-label="Back to Top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
