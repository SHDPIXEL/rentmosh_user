import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "How do I rent furniture from RentCo?",
    answer:
      "Renting furniture with RentCo is a breeze! Simply choose your desired product, select a rental period, complete the verification process, and we’ll deliver it right to your door. It's that simple!",
  },
  {
    id: 2,
    question: "What is the minimum rental period?",
    answer:
      "The minimum rental period is 3 months. You can choose from 3, 6, 9, or 12-month options based on your needs.",
  },
  {
    id: 3,
    question: "Can I get a product preview before renting?",
    answer:
      "Yes, we offer a detailed product catalog with real pictures. You can also visit our showroom for a closer look at the products.",
  },
  {
    id: 4,
    question: "What happens after my rental period ends?",
    answer:
      "Once your rental period is over, you have the option to renew your subscription, purchase the product, or return it. Our team will guide you through the process.",
  },
  {
    id: 5,
    question: "Are there cancellation fees?",
    answer:
      "There are no cancellation fees before delivery. However, if you cancel within 48 hours of delivery, early termination charges may apply.",
  },
  {
    id: 6,
    question: "Can I return products after delivery?",
    answer:
      "Yes, you can return the products within 7 days of delivery. For any damaged or unsatisfactory products, we offer a full refund or replacement.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section py-8 px-4">
      <div className="faq-list space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={faq.id}
            className="faq-item bg-white border-b border-gray-300 rounded-md p-4"
          >
            <div
              className="faq-question flex justify-between items-center cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="text-xl font-semibold text-gray-700">
                {faq.question}
              </h3>
              <svg
                className={`transition-transform transform ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 4v16m8-8H4" />
              </svg>
            </div>
            {activeIndex === index && (
              <p
                className={`faq-answer text-gray-600 mt-4 ${
                  activeIndex === index ? "bg-gray-100 p-4 rounded-lg" : ""
                }`}
              >
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
