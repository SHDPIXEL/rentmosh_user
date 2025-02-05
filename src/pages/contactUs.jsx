import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="bg-white px-6 md:px-20">
      <div className="flex items-center justify-center left-0 h-30 bg-white border-b border-dashed border-gray-400 py-6 text-center">
        <h2 className="text-3xl font-bold text-red-800">Contact Us</h2>
      </div>

      <div className="container mx-auto mt-6 text-gray-700">
        <p className="text-lg font-semibold">
          Have questions or need assistance? We are here to help! Reach out to
          us for any inquiries regarding our rental services.
        </p>

        <h3 className="text-xl font-semibold mt-6">Customer Support</h3>
        <p className="mt-2">
          Our team is available to assist you with your queries. Whether it’s
          about our rental process, pricing, or furniture options, we’re happy
          to help.
        </p>

        <h3 className="text-xl font-semibold mt-6">Get in Touch</h3>
        <ul className="mt-2">
          <li className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-red-800" />
            Email us at
            <a href="mailto:support@rentmosho.com" className="text-red-800">
              {" "}
              support@rentmosho.com
            </a>
          </li>
          <li className="flex items-center gap-2 mt-2">
            <Phone className="w-5 h-5 text-red-800" />
            Call us at <span className="font-semibold">+91 XXXXXXXXXX</span>
          </li>
          <li className="flex items-start gap-2 mt-2">
            <MapPin className="w-5 h-5 text-red-800 mt-1" />
            <span>
              Visit us at our office: <br />
              <span className="font-semibold">
                123, RentMosho Street, Your City, Your State
              </span>
            </span>
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">Follow Us</h3>
        <p className="mt-2">
          Stay updated with our latest offers and services by following us on
          social media:
        </p>
        <ul className="flex gap-4 mt-2">
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-500 cursor-pointer"
            >
              <FaFacebook size={20} color="#3883ff" />
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-pink-500 cursor-pointer"
            >
              <FaInstagram size={20} color="#f6339a" />
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-400 cursor-pointer"
            >
              <FaTwitter size={20} color="#51a2ff" />
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactUs;
