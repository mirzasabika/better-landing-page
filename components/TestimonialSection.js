"use client";
import { useState } from "react";
import Image from "next/image";

export default function TestimonialSection() {
  const testimonials = {
    Paul: {
      image: "/images/paul.webp",
      quote:
        "Better made the process so smooth. I couldn’t believe how fast and easy it was!",
      name: "Paul — Better Mortgage customer",
    },
    Amanda: {
      image: "/images/amanda.webp",
      quote:
        "The rates were amazing and the experience was seamless. Highly recommend Better!",
      name: "Amanda — Better Mortgage customer",
    },
    Tiara: {
      image: "/images/tiara.webp",
      quote:
        "I know that 100% I'm coming back to Better because I've always had such a great experience.",
      name: "Tiara — Better Mortgage customer",
    },
  };

  const [active, setActive] = useState("Tiara");

  return (
    <section className="bg-[#fafafa] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left: Testimonial Image/Video */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden md:w-[400px] md:h-[600px] shadow-lg">
            <Image
              src={testimonials[active].image}
              alt={active}
              width={400}
              height={600}
              className="rounded-2xl object-cover w-full h-full"
            />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white rounded-full p-3 sm:p-4 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 sm:h-10 sm:w-10 text-green-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>

            {/* Quote Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
              <p className="text-base sm:text-lg font-medium">
                “{testimonials[active].quote}”
              </p>
              <p className="mt-2 text-xs sm:text-sm text-gray-300">
                {testimonials[active].name}
              </p>
            </div>
          </div>

          {/* Customer Selector Buttons */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mt-6">
            {Object.keys(testimonials).map((person) => (
              <button
                key={person}
                onClick={() => setActive(person)}
                className={`px-4 sm:px-5 py-2 rounded-full border transition font-medium text-sm sm:text-base ${
                  active === person
                    ? "border-2 border-green-700 text-green-700"
                    : "border text-gray-700 hover:bg-gray-100"
                }`}
              >
                {person}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Text Section */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-7xl font-bold text-gray-900 leading-tight">
            Find out why <br className="hidden sm:block" /> we’re better.
          </h2>

          <button className="mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-green-900 text-white rounded-full text-base sm:text-lg font-medium hover:bg-green-800 transition">
            See all our stories
          </button>

          {/* Trustpilot rating */}
          <div className="mt-6 flex items-center justify-center lg:justify-start space-x-2 text-sm sm:text-base text-gray-700">
            <span className="text-green-600 font-bold">★</span>
            <span className="font-semibold">Trustpilot</span>
            <span>Excellent</span>
            <span className="font-semibold text-gray-900">4.4 out of 5</span>
          </div>
        </div>
      </div>
    </section>
  );
}
