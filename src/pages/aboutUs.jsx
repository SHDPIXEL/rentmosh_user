import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-white px-6 md:px-20">
      <div className="flex items-center justify-center left-0 h-30 bg-white border-b border-dashed border-gray-400 py-6 text-center">
        <h2 className="text-3xl font-bold text-red-800">About Us</h2>
      </div>

      <div className="container mx-auto mt-6 text-gray-700">
        <p className="text-lg font-semibold">
          Welcome to RentMosho! We are dedicated to providing high-quality
          rental furniture and home essentials to enhance your living space.
        </p>

        <h3 className="text-xl font-semibold mt-6">Our Mission</h3>
        <p className="mt-2">
          Our mission is to make premium furniture accessible and affordable
          through flexible rental solutions. We aim to provide convenience,
          affordability, and quality to our customers.
        </p>

        <h3 className="text-xl font-semibold mt-6">Why Choose Us?</h3>
        <p className="mt-2">
          At RentMosho, we prioritize customer satisfaction with:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>High-quality and well-maintained furniture</li>
          <li>Flexible rental plans</li>
          <li>Seamless delivery and pickup services</li>
          <li>Affordable pricing with no hidden costs</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">Our Commitment</h3>
        <p className="mt-2">
          We are committed to offering a hassle-free rental experience,
          ensuring that every piece of furniture meets our quality standards
          before reaching your home.
        </p>

        <h3 className="text-xl font-semibold mt-6">Contact Us</h3>
        <p className="mt-2">
          If you have any questions or need assistance, feel free to reach out
          to us at
          <a href="mailto:support@rentmosho.com" className="text-red-800">
            {" "}support@rentmosho.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
