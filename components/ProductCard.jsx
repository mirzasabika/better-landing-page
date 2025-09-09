import Image from "next/image";

export default function ProductCard({ title, description, image, href }) {
  return (
    <article className="bg-green-50 rounded-xl p-6 flex flex-col justify-between hover:shadow-lg transition">
      {/* Title + description */}
      <div>
        <h3 className="text-lg md:text-xl font-semibold text-emerald-900">
          {title}
        </h3>
        {description && (
          <p className="mt-2 text-sm text-gray-700 leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* Bottom row: button + image */}
      <div className="mt-4 flex items-center justify-between">
        <a
          href={href}
          className="w-10 h-10 rounded-full border border-emerald-700 flex items-center justify-center hover:bg-emerald-700 hover:text-white text-emerald-800 transition"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12h14M13 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        {image && (
          <div className="w-32 h-40 sm:w-40 sm:h-34 rounded-lg overflow-hidden bg-gray-100">
            <div className="relative w-full h-full">
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 640px) 100vw, 180px"
                className="object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
