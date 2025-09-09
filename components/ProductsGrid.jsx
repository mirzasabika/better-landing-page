"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";

const productsData = {
  products: [
    {
      title: "How AI Mortgage Lending is Transforming the Home Loan Process",
      description: "",
      image: "/images/p1.webp",
      href: "#",
      span: "col-span-1", // normal card
    },
    {
      title: "One Day Mortgage¹",
      description:
        "Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.¹",
      image: "/images/p2.png",
      href: "#",
      span: "col-span-1 md:col-span-2", // WIDE card
    },
    {
      title: "Better HELOC",
      description:
        "Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit². Access up to 90% of your home equity as cash in as little as 7 days.³",
      image: "/images/p3.png",
      href: "#",
      span: "col-span-1 md:col-span-2", // normal card
    },
    {
      title: "Insurance",
      description: "",
      image: "/images/p4.png",
      href: "#",
      span: "col-span-1", // normal card
    },
  ],
  calculators: [
    {
      title: "Mortgage Calculator",
      description: "Estimate your monthly mortgage payments easily.",
      image: "/images/calculator-mortgage.png",
      href: "#",
      span: "col-span-1 md:col-span-2",
    },
    {
      title: "Affordability Calculator",
      description: "Find out how much home you can afford.",
      image: "/images/calculator-afford.png",
      href: "#",
      span: "col-span-1",
    },
  ],
  guides: [
    {
      title: "First-time Homebuyer Guide",
      description: "Everything you need to know about buying your first home.",
      image: "/images/guide-homebuyer.jpg",
      href: "#",
      span: "col-span-1",
    },
    {
      title: "FAQs",
      description: "Answers to the most common questions about mortgages.",
      image: "/images/faq.jpg",
      href: "#",
      span: "col-span-1 md:col-span-2",
    },
  ],
};

export default function ProductsGrid() {
  const [activeTab, setActiveTab] = useState("products");

  const tabs = [
    { key: "products", label: "Our products" },
    { key: "calculators", label: "Calculators" },
    { key: "guides", label: "Guides & FAQs" },
  ];

  return (
    <section className="bg-white py-16 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Got questions?
            <br /> We’ve got answers
          </h2>

          {/* Tabs */}
          <div className="flex gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`rounded-full px-5 py-2 text-sm md:text-base border font-medium transition
                  ${
                    activeTab === tab.key
                      ? "border-green-700 text-green-700 bg-green-50"
                      : "border-gray-300 text-gray-700 hover:border-green-700 hover:text-green-700"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid with spans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsData[activeTab].map((item, idx) => (
            <div key={idx} className={item.span}>
              <ProductCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
