import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#014C36] text-white min-h-screen flex flex-col justify-center items-center px-6 text-center relative pt-32">
      {/* Hero Content */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-8xl font-bold leading-tight ">
          The first{" "} <br/>
          <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
            AI-powered  
          </span>{" "}
            Mortgage
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-200">
          Our tech unlocks lower rates, higher chances of approval, <br className="hidden md:block" />
          and a lightning-fast process from approval to closing. Over $100 billion funded.
        </p>
        <button className="mt-8 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
          Start my pre-approval
        </button>
        <p className="mt-3 text-sm text-gray-300 flex justify-center items-center gap-2">
          ⏱ 3 min | No hard credit check
        </p>
      </div>

      {/* Phone Mockup Image */}
      <div className="relative mt-16 flex justify-center">
          <Image
          src="/images/ai-powered-fico.png"   // <-- make sure this file is inside public/images/
          alt="Phone mockup"
          width={600}
          height={800}
          className="drop-shadow-2xl"
        />
      </div>
    </section>
  );
}
