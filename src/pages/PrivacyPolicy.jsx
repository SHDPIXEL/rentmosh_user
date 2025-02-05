import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-white px-6 md:px-20">
      <div className="flex items-center justify-center left-0 h-30 bg-white border-b border-dashed border-gray-400 py-6 text-center">
        <h2 className="text-3xl font-bold text-red-800">Privacy Policy</h2>
      </div>

      <div className="container mx-auto mt-6 text-gray-700">
        <p className="text-lg font-semibold">
          We’re RentMosho, an online rental solution for your furnishing needs.
        </p>
        <p className="mt-4">
          <span className="text-red-800 font-semibold">RentMosho</span> is a
          platform designed to provide easy access to rental furniture,
          electronics, and more. We prioritize your privacy and ensure that your
          personal data is protected.
        </p>

        <h3 className="text-xl font-semibold mt-6">
          1. Collection of Personal Information
        </h3>
        <p className="mt-2">
          We may collect and store information you provide while interacting
          with our website. This may include details such as your name, contact
          details, and activity on our site.
        </p>

        <h3 className="text-xl font-semibold mt-6">
          2. Information Collected from Third Parties
        </h3>
        <p className="mt-2">
          We may gather additional details from third-party services to improve
          your experience and offer tailored services.
        </p>

        <h3 className="text-xl font-semibold mt-6">
          3. Information Stored on Your Device
        </h3>
        <p className="mt-2">
          To enhance user experience, we may place small data files known as
          cookies on your device.
        </p>

        <h3 className="text-xl font-semibold mt-6">
          4. Use of Personal Information
        </h3>
        <p className="mt-2">
          Your personal information is used strictly for service improvement,
          personalized recommendations, and legal compliance.
        </p>

        <h3 className="text-xl font-semibold mt-6">5. Security Measures</h3>
        <p className="mt-2">
          We implement strong security measures to protect your data from
          unauthorized access, loss, or misuse.
        </p>

        <h3 className="text-xl font-semibold mt-6">6. Contact Us</h3>
        <p className="mt-2">
          If you have any questions regarding this policy, feel free to reach
          out to us at
          <a href="mailto:support@rentmosho.com" className="text-red-800">
            {" "}
            support@rentmosho.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
