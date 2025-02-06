import React from "react";

const RentalAgreement = () => {
  return (
    <div className="bg-white px-6">
      <div className="flex items-center justify-center left-0 h-30 bg-white border-b border-dashed border-gray-400 py-6 text-center">
        <h2 className="text-3xl font-bold text-red-800">Rental Agreement</h2>
      </div>

      <div className="container mx-auto mt-6 text-gray-700">
        <p className="text-lg font-semibold">
          Welcome to RentMosho! This Rental Agreement outlines the terms and
          conditions for renting furniture and other items from our platform.
        </p>

        <h3 className="text-xl font-semibold mt-6">1. Agreement to Terms</h3>
        <p className="mt-2">
          By renting products from RentMosho, you agree to abide by these terms
          and conditions throughout the rental period.
        </p>

        <h3 className="text-xl font-semibold mt-6">2. Rental Duration</h3>
        <p className="mt-2">
          The minimum rental period is specified for each item. Extensions can
          be requested, subject to availability.
        </p>

        <h3 className="text-xl font-semibold mt-6">3. Security Deposit</h3>
        <p className="mt-2">
          Some products may require a refundable security deposit, which will
          be returned upon successful return of the rented item in good
          condition.
        </p>

        <h3 className="text-xl font-semibold mt-6">4. Care & Maintenance</h3>
        <p className="mt-2">
          Renters are responsible for maintaining the rented items in good
          condition. Any damage beyond normal wear and tear may result in
          additional charges.
        </p>

        <h3 className="text-xl font-semibold mt-6">5. Return & Pickup</h3>
        <p className="mt-2">
          Items must be returned at the end of the rental period. Failure to
          return items on time may result in late fees.
        </p>

        <h3 className="text-xl font-semibold mt-6">6. Termination</h3>
        <p className="mt-2">
          RentMosho reserves the right to terminate the rental agreement if the
          renter violates any terms outlined in this agreement.
        </p>

        <h3 className="text-xl font-semibold mt-6">7. Contact Us</h3>
        <p className="mt-2">
          For any questions or clarifications, reach out to us at
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

export default RentalAgreement;