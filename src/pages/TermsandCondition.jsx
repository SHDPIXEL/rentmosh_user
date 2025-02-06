import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-white px-6">
      {/* Full-Width Gradient Header */}
      <div className="flex items-center justify-center left-0 h-30 bg-white border-b border-dashed border-gray-400 py-6 text-center">
        <h2 className="text-3xl font-bold text-red-800">Terms and Conditions</h2>
      </div>

      {/* Content Container */}
      <div className="container mx-auto mt-10 text-gray-700">
        <p className="text-lg font-semibold">
          Welcome to RentMosho! Please read our terms and conditions carefully.
        </p>

        <h3 className="text-xl font-semibold mt-6">1. Introduction</h3>
        <p className="mt-2">
          By accessing and using RentMosho, you agree to be bound by these terms
          and conditions. If you do not agree with any part of these terms, you
          must refrain from using our services.
        </p>

        <h3 className="text-xl font-semibold mt-6">2. User Responsibilities</h3>
        <p className="mt-2">
          Users must provide accurate information when registering and using our
          platform. Any misuse, fraud, or violation of our terms will result in
          suspension or termination of access.
        </p>

        <h3 className="text-xl font-semibold mt-6">3. Rental Agreement</h3>
        <p className="mt-2">
          By renting an item through RentMosho, you agree to return it in the
          same condition as received. Damages or late returns may incur
          additional charges.
        </p>

        <h3 className="text-xl font-semibold mt-6">4. Payment and Fees</h3>
        <p className="mt-2">
          Payments must be made through our approved payment methods. Any
          applicable taxes and fees will be displayed before checkout.
        </p>

        <h3 className="text-xl font-semibold mt-6">5. Cancellation and Refunds</h3>
        <p className="mt-2">
          Cancellations and refunds are subject to our policies. Some rentals
          may have a non-refundable policy based on the provider’s terms.
        </p>

        <h3 className="text-xl font-semibold mt-6">6. Privacy and Data Protection</h3>
        <p className="mt-2">
          We respect your privacy and handle your data in accordance with our
          Privacy Policy.
        </p>

        <h3 className="text-xl font-semibold mt-6">7. Contact Us</h3>
        <p className="mt-2">
          If you have any questions regarding these terms, please reach out to
          us at
          <a href="mailto:support@rentmosho.com" className="text-red-800">
            {" "}support@rentmosho.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
