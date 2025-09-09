"use client";
import { useState } from "react";

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(60000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [zipCode, setZipCode] = useState("10007");
  const [loanYears, setLoanYears] = useState(30);

  const principal = homePrice - downPayment;
  const monthlyRate = interestRate / 100 / 12;
  const totalMonths = loanYears * 12;
  const monthlyPayment =
    (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -totalMonths));

  return (
   <>
   
    <div className="min-h-screen bg-[#f1f6f2] py-20 flex flex-col items-center mt-10">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-start w-full md:pl-64 pl-3 leading-snug">
        Estimate your monthly <br /> mortgage payments
      </h1>

      {/* Calculator Card */}
      <div className="bg-white rounded-lg shadow p-8 w-full max-w-5xl flex flex-col md:flex-row justify-between gap-8">
        {/* Left Inputs */}
        <div className="grid grid-cols-2 gap-4 flex-1">
          {/* Home Price */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">Home price</label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-gray-600">$</span>
              <input
                type="number"
                value={homePrice}
                onChange={(e) => setHomePrice(Number(e.target.value))}
                className="w-full border rounded-md pl-7 pr-3 py-2 text-gray-900"
              />
            </div>
          </div>

          {/* Down Payment */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">Down payment</label>
            <div className="flex">
              <div className="relative flex-1">
                <span className="absolute left-3 top-2.5 text-gray-600">$</span>
                <input
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full border rounded-l-md pl-7 pr-3 py-2 text-gray-900"
                />
              </div>
              <span className="border rounded-r-md px-3 py-2 bg-gray-50 text-gray-700">
                {((downPayment / homePrice) * 100).toFixed(0)}%
              </span>
            </div>
          </div>

          {/* Loan Length */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">Length of loan</label>
            <select
              value={loanYears}
              onChange={(e) => setLoanYears(Number(e.target.value))}
              className="w-full border rounded-md px-3 py-2 text-gray-900"
            >
              <option value={15}>15 years</option>
              <option value={20}>20 years</option>
              <option value={30}>30 years</option>
            </select>
          </div>

          {/* Interest Rate */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">Interest rate</label>
            <div className="relative">
              <input
                type="number"
                step="0.01"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full border rounded-md pl-3 pr-8 py-2 text-gray-900"
              />
              <span className="absolute right-3 top-2.5 text-gray-600">%</span>
            </div>
          </div>

          {/* Zip Code */}
          <div className="col-span-2">
            <label className="block text-sm text-gray-700 mb-1">ZIP code</label>
            <input
              type="text"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="w-full border rounded-md px-3 py-2 text-gray-900"
            />
          </div>

          {/* Slider */}
          <div className="col-span-2 mt-2">
            <input
              type="range"
              min={0}
              max={homePrice}
              step={1000}
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              className="w-full accent-green-600"
            />
          </div>
        </div>

        {/* Right Results */}
        <div className="flex flex-col justify-center items-start md:w-64 border-t md:border-t-0 md:border-l pt-6 md:pt-0 md:pl-6">
          <p className="text-sm text-gray-600">Monthly payment</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">
            ${monthlyPayment.toFixed(0)}/mo
          </p>
          <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-md">
            Get pre-approved
          </button>
        </div>
      </div>

      {/* Breakdown Section */}
      <div className="w-full max-w-5xl mt-12">
        <h2 className="text-base font-medium text-gray-800 mb-6">
          Monthly payment breakdown
        </h2>

        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Left Bar */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="w-3/4 bg-green-600 rounded-full text-white text-center py-4 font-medium">
              100%
            </div>
          </div>

          {/* Right Breakdown */}
          <div className="md:w-1/2 space-y-3">
            <p className="text-2xl font-bold text-gray-900">
              ${monthlyPayment.toFixed(0)}/mo
            </p>

            <div className="flex justify-between text-sm">
              <span className="text-green-600 font-medium">Principal & interest</span>
              <span>${monthlyPayment.toFixed(0)}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-blue-600 font-medium">Property taxes</span>
              <input type="number" value={0} className="w-20 border rounded px-2 text-right" readOnly />
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-indigo-600 font-medium">Homeowners insurance</span>
              <input type="number" value={0} className="w-20 border rounded px-2 text-right" readOnly />
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-yellow-600 font-medium">HOA fees</span>
              <input type="number" value={0} className="w-20 border rounded px-2 text-right" readOnly />
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-red-600 font-medium">Utilities</span>
              <span>$0/mo</span>
            </div>

            <button className="mt-6 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md text-sm text-gray-700">
              Copy estimate link
            </button>
          </div>
        </div>
      </div>
    </div>


     <section className="bg-white py-16">
      {/* Steps Section */}
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center mb-10 text-black">
          Simple steps to get pre-approved
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="bg-green-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-green-600 text-4xl font-bold mb-2">1</h3>
            <h4 className="font-semibold text-lg mb-2 text-black">Share a few details</h4>
            <p className="text-gray-600 text-sm">
              Tell us about your income, credit, and home goals—it takes as
              little as 3 minutes and won’t affect your credit score.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-green-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-green-600 text-4xl font-bold mb-2">2</h3>
            <h4 className="font-semibold text-lg mb-2 text-black">See your homebuying budget</h4>
            <p className="text-gray-600 text-sm">
              In minutes, we’ll show you exactly how much you can get
              pre-approved for—so you know your price range before you shop.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-green-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-green-600 text-4xl font-bold mb-2">3</h3>
            <h4 className="font-semibold text-lg mb-2 text-black">Get your pre-approval letter</h4>
            <p className="text-gray-600 text-sm">
              Download your letter instantly and start touring homes with
              confidence (and a stronger offer in hand).
            </p>
          </div>
        </div>
      </div>

      <hr className="mt-20" />

      {/* Call to Action */}
      <div className="max-w-3xl mx-auto text-center mt-20 px-6">
        <h2 className="text-2xl md:text-5xl font-semibold mb-6 text-black">
          Check your homebuying power
        </h2>
        <button className="bg-green-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-green-700 transition">
          See what I qualify for
        </button>
        <p className="text-gray-500 text-sm mt-4">
          ...in as little as 3 minutes — no credit impact
        </p>
      </div>
    </section>
   
   
   
   
   
   
   
   
   
   </>
  );
}
