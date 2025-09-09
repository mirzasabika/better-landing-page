// app/components/CompanyTimeline.tsx
"use client";
import React from "react";

const timeline = [
  {
    year: "2014",
    text: "After Vishal Garg’s first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all.",
  },
  {
    year: "2015",
    text: "Better Mortgage funds its first mortgage loan entirely online (without a single phone call!).",
  },
  {
    year: "2016",
    text: "Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors.",
  },
  {
    year: "2017",
    text: "Better expands into the real estate market with Better Real Estate.",
  },
   {
    year: "2018",
    text: "Better Mortgage partners with Ally Bank to build Ally powered by Better.",
  },
   {
    year: "2019",
    text: "Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers.",
  },
    {
    year: "2022",
    text: "Better Mortgage becomes the first fintech to fund $100B home loans entirely online.",
  },
    {
    year: "2023",
    text: "Better Mortgage launches One Day Mortgage¹: The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours vs. typical industry process of 30+ days.",
  },
    {
    year:"",
    text: "Better Mortgage launches the fully digital 3-day HELOC².",
  },
    {
    year:"",
    text: "Better Mortgage launches One Day Verified Approval Letter.",
  },
    {
    year: "Today",
    text: "You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.",
    
  },

];

export default function Timeline() {

  return (
    <div className="flex flex-col items-center py-12 px-4 md:px-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-black">
        Company timeline
      </h2>

      <div className="relative w-full max-w-4xl">
        {/* Center vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-300 -translate-x-1/2" />

        <div className="space-y-16">
          {timeline.map((item, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col md:flex-row items-center ${
                idx % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Only show bubble if year is not empty */}
              {item.year && (
                <div className="absolute left-1/2 -translate-x-1/2 bg-green-600 text-white font-bold rounded-4xl w-18 h-10 flex items-center justify-center shadow-md z-10">
                  {item.year}
                </div>
              )}

              {/* Card */}
              <div
                className={`bg-gray-100 shadow-md rounded-lg p-5 w-full md:w-5/12 mt-10 md:mt-0 ${
                  idx % 2 === 0 ? "md:mr-auto md:text-left" : "md:ml-auto  md:text-left"
                }`}
              >
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {item.text}
                </p>

                 {/*  Show button only in the last card */}
                {idx === timeline.length - 1 && (
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 mt-10 rounded-lg shadow-md transition">
                    Get Start
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
