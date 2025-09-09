import Image from "next/image";


export default function StatusQuo() {
  return (
    <section className="bg-white  ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center min-h-screen">
        {/* Left Side - Text */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            The status quo is broken
          </h2>
          <p className="mt-4 text-gray-700 text-sm md:text-base leading-relaxed">
            The traditional processes around homeownership are opaque and stressful.
            Fees aren’t transparent and some are simply outrageous in size.
            Traditional mortgage lending is rife with unnecessary fees and slow,
            painful processes. It’s a system set up to benefit insiders — not you.
            Better.com CEO, Vishal Garg, set out to change that.
          </p>

          <a
            href="#"
            className="inline-block mt-6 px-6 py-3 bg-green-700 text-white text-base font-semibold rounded-md hover:bg-green-800 transition"
          >
            Read Vishal’s story
          </a>
        </div>

        {/* Right Side - Video Thumbnail */}
        <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
          <img
            src="/images/paul.webp" // replace with actual thumbnail
            alt="Vishal Garg"
            className="w-full h-full object-cover"
          />

          {/* Play button overlay */}
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

        </div>
      </div>

       {/* changethnig */}

        <section className="bg-emerald-800 text-white py-20 px-6 m-0">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-start">
          How we’re changing things
        </h2>

        {/* Paragraphs */}
        <p className="mt-6 text-sm text-start  leading-relaxed text-green-50">
          Homeownership is a huge part of our economy. Housing overall is a
          $33 trillion business, and mortgages account for $15 trillion. Yet
          home finance operates in the same way it has for decades — through
          opaque systems and expensive intermediaries whose interests are
          misaligned with consumers’.
        </p>

        <p className="mt-6 text-sm  leading-relaxed text-green-50 text-start">
          That’s why Better.com is redefining the homeownership process from
          the ground up. We’re using technology to make it faster and more
          efficient, and humans to help make it friendly and enjoyable.
        </p>
      </div>

  


        </section>


            {/* partnership */}
      <section className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-2xl font-medium text-gray-900 mb-20">
          Backed by
        </h2>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
          <Image
            src="/logos/softbank.png"
            alt="SoftBank"
            width={140}
            height={40}
            className="object-contain grayscale hover:grayscale-0 transition"
          />
          <Image
            src="/logos/ally.png"
            alt="Ally"
            width={100}
            height={40}
            className="object-contain grayscale hover:grayscale-0 transition"
          />
          <Image
            src="/logos/citi.png"
            alt="Citi"
            width={100}
            height={40}
            className="object-contain grayscale hover:grayscale-0 transition"
          />
          <Image
            src="/logos/pingan.png"
            alt="Ping An Bank"
            width={160}
            height={40}
            className="object-contain grayscale hover:grayscale-0 transition"
          />
          <Image
            src="/logos/goldman.png"
            alt="Goldman Sachs"
            width={140}
            height={40}
            className="object-contain grayscale hover:grayscale-0 transition"
          />
          <Image
            src="/logos/kpcb.png"
            alt="KPCB"
            width={160}
            height={40}
            className="object-contain grayscale hover:grayscale-0 transition"
          />
          <Image
            src="/logos/amex.png"
            alt="American Express"
            width={120}
            height={40}
            className="object-contain grayscale hover:grayscale-0 transition"
          />
        </div>
      </div>
    </section>
    </section>
  );
}
