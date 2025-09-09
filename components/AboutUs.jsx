
import StatusQuo from "./StatusQuo";
import Timeline from "./Timeline";


export default function AboutUs() {
  return (
    <section className="bg-white ">
      {/* Section heading */}
      <div className="max-w-5xl mx-auto text-center mb-16 min-h-screen flex flex-col justify-center">
        <p className="text-green-700 font-medium text-4xl">Our Mission</p>
        <h2 className="mt-4 text-2xl sm:text-3xl md:text-[44.5px] font-semibold text-gray-900 leading-snug ">
        We’re making homeownership simpler, faster — and most importantly, more accessible for all Americans.
        </h2>
      </div>

      <StatusQuo/>
      <Timeline/>
    </section>
  );
}
