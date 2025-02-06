import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    { id: 1, name: "Sharwari J", city: "Pune", review: "Vikas and Prabhu were very polite and helpful in communication. And efficiently delivered our electronics.", image: "https://d3juy0zp6vqec8.cloudfront.net/images/google_review/sharwari_j.webp", rating: 5 },
    { id: 2, name: "Rahul M", city: "Mumbai", review: "Great service! The team was very responsive and ensured timely delivery. Highly recommend them!", image: "https://randomuser.me/api/portraits/men/2.jpg", rating: 4 },
    { id: 3, name: "Anjali S", city: "Bangalore", review: "The quality of the products is excellent. Very satisfied with the overall experience.", image: "https://randomuser.me/api/portraits/women/3.jpg", rating: 5 },
    { id: 4, name: "Karan P", city: "Delhi", review: "Had a smooth experience with their customer support. Will definitely use their services again.", image: "https://randomuser.me/api/portraits/men/4.jpg", rating: 4 },
    { id: 5, name: "Simran K", city: "Chennai", review: "Very easy to use service, and the delivery was quick! Great experience overall.", image: "https://randomuser.me/api/portraits/women/5.jpg", rating: 5 },
    { id: 6, name: "Amit T", city: "Hyderabad", review: "Affordable and reliable service. Happy with my purchase.", image: "https://randomuser.me/api/portraits/men/6.jpg", rating: 4 },
  ];

  const getSlidesToShow = () => {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 4;
  };

  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());
  
  useEffect(() => {
    const handleResize = () => setSlidesToShow(getSlidesToShow());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const groupedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += slidesToShow) {
    groupedTestimonials.push(testimonials.slice(i, i + slidesToShow));
  }

  const totalSlides = groupedTestimonials.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const nextSlide = () => setCurrentIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
  const prevSlide = () => setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));

  return (
    <div className="relative w-full mx-auto mb-5">
      <div className="overflow-hidden rounded-xl bg-gray-100 shadow-sm p-6 relative">
        <div className="flex transition-transform duration-600 ease-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {groupedTestimonials.map((group, slideIndex) => (
            <div key={slideIndex} className="flex w-full flex-shrink-0">
              {group.map((testimonial) => (
                <div key={testimonial.id} className="w-full sm:w-1/2 lg:w-1/4 p-4 flex flex-col items-center text-center space-y-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md" />
                  <p className="text-gray-700 text-xs italic">"{testimonial.review}"</p>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-xs text-gray-500">{testimonial.city}</p>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, index) => (
                      <img key={index} src="https://d3juy0zp6vqec8.cloudfront.net/images/icons/star-icon.svg" alt={`rating-icon${index}`} className="w-4 h-4" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors duration-300">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors duration-300">
          <ChevronRight className="w-6 h-6" />
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentIndex === index ? "bg-gray-900" : "bg-gray-400"}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
