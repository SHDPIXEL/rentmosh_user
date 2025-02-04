import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { ChevronUp } from "lucide-react";

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
    <footer className="bg-gray-100 text-black/70 py-10 mt-10 px-6 md:px-34 relative">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold">RentMosho</h2>
          <p className="text-gray-500 text-md mt-2 w-full">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        {/* Categories & Quick Links */}
        <div className="flex justify-between gap-10">
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
              <li><a href="/about" className="hover:text-gray-700">About Us</a></li>
              <li><a href="/contact" className="hover:text-gray-700">Contact</a></li>
              <li><a href="/faq" className="hover:text-gray-700">FAQs</a></li>
              <li><a href="/blog" className="hover:text-gray-700">Blog</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media & Policies */}
        <div className="text-right">
          <h3 className="text-xl font-semibold">Stay Connected</h3>
          <div className="flex space-x-4 mt-2 justify-end">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:bg-gray-200 rounded-md p-2 cursor-pointer">
              <FaFacebook size={20} color="#484949" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:bg-gray-200 rounded-md p-2 cursor-pointer">
              <FaInstagram size={20} color="#484949" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:bg-gray-200 rounded-md p-2 cursor-pointer">
              <FaTwitter size={20} color="#484949" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:bg-gray-200 rounded-md p-2 cursor-pointer">
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
      <div className="flex justify-between items-center">
        <div className="text-gray-400 text-sm">
          © {new Date().getFullYear()} RentMosho. All rights reserved.
        </div>
        <div className="text-gray-400 text-sm flex items-center gap-1">
          Developed By{" "}
          <a href="https://www.metamatrixtech.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:underline">
            Metamatrix Technologies
          </a>{" "}|
          <a href="https://shdpixel.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:underline">
            SHDPIXEL
          </a>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-6 bg-gray-600 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110 animate-bounce"
          aria-label="Back to Top"
        >
          <ChevronUp className="w-4 h-4" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
