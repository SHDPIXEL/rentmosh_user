import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const BookedPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const transactionId = location.state?.transactionId || "N/A";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
        <h1 className="text-2xl font-bold text-gray-900 mt-4">Order Placed!</h1>
        <p className="text-gray-600">
          Thank you for your order. Your transaction is successful.
        </p>

        <div className="mt-4 text-gray-700">
          <p>
            <strong>Transaction ID:</strong> {transactionId}
          </p>
          <p>
            <strong>Estimated Delivery:</strong> 3-5 Business Days
          </p>
        </div>

        {/* Centered Back to Home Button */}
        <div className="flex justify-center w-full mt-6">
          <button
            onClick={() => navigate("/")}
            className="bg-red-800 text-white py-2 px-6 rounded-lg hover:bg-red-700 flex items-center space-x-2 transition duration-300"
          >
            <span>Back to Home</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookedPage;
