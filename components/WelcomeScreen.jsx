// app/components/WelcomeScreen.tsx
"use client";
import { useState } from "react";
import { Home, Phone, DollarSign, Landmark } from "lucide-react";

export default function WelcomeScreen() {
  const [selected, setSelected] = useState("Refinancing my mortgage");

  const options = [
    { label: "Buying a home", icon: <Home className="w-6 h-6" /> },
    { label: "Refinancing my mortgage", icon: <Landmark className="w-6 h-6" /> },
    { label: "Get cash from my home", icon: <DollarSign className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top Bar */}
      <header className="flex justify-between items-center px-6 py-4 border-b">
        {/* Logo */}
        <div className="text-green-700 font-bold text-lg">
          Better <span className="font-normal">Mortgage</span>
        </div>

        {/* Help button */}
        <div className="flex items-center space-x-2 text-sm text-gray-700 bg-green-50 px-4 py-2 rounded-full shadow-sm">
          <Phone className="w-4 h-4 text-green-600" />
          <span>
            Need help? Call <span className="font-medium">415-523-8837</span>
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center text-center px-4 py-12">
        {/* Floating Icon */}
        <div className="relative mb-8">
          <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg" />
          <div className="absolute inset-0 rounded-full bg-green-500 blur-xl opacity-60" />
          <Home className="absolute inset-0 m-auto text-white w-6 h-6" />
        </div>

        {/* Greeting */}
        <h1 className="text-3xl font-bold mb-2 text-black">Hi, I'm Betsy!</h1>
        <p className="text-xl mb-8 text-black">What can I help you with?</p>

        {/* Options */}
        <div className="flex flex-col space-y-4 w-full max-w-md text-black">
          {options.map((opt) => (
            <button
              key={opt.label}
              onClick={() => setSelected(opt.label)}
              className={`flex items-center space-x-3 px-4 py-4 rounded-md border text-left transition w-full justify-start ${
                selected === opt.label
                  ? "border-2 border-green-600 bg-white"
                  : "border border-gray-300 hover:border-green-600"
              }`}
            >
              <div className="text-green-600">{opt.icon}</div>
              <span className="font-medium">{opt.label}</span>
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="flex justify-center space-x-16 mt-12 text-black">
          <div>
            <p className="text-4xl font-bold">$100B</p>
            <p className="text-gray-600 text-sm">
              home loans funded entirely online
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold">400K</p>
            <p className="text-gray-600 text-sm">
              Customers who chose a Better Mortgage
            </p>
          </div>
        </div>

        {/* Feature Box */}
        <div className="bg-green-50 rounded-lg p-6 mt-10 max-w-md w-full text-left">
          <p className="text-gray-700 mb-3 ">After a few questions, you'll unlock:</p>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex items-center space-x-2">
              <span className="text-green-600">✔</span>
              <span>Custom mortgage rates</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-600">✔</span>
              <span>Exclusive offers</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-600">✔</span>
              <span>A personalized dashboard</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
