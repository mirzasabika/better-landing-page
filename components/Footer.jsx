import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#fdfdfb] border-t border-gray-200 py-12 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1 - Logo + description + services */}
        <div>
          <h2 className="text-2xl font-bold text-green-800">Better</h2>
          <p className="mt-2 text-sm text-gray-700">
            Better is a family of companies serving all your homeownership needs.
          </p>

          <div className="mt-6 space-y-4">
            <div>
              <h3 className="text-green-800 font-semibold">Better Mortgage</h3>
              <p className="text-sm text-gray-600">
                We can’t wait to say “Welcome home.” Apply 100% online, with expert customer support.
              </p>
            </div>
            <div>
              <h3 className="text-green-800 font-semibold">Better Real Estate</h3>
              <p className="text-sm text-gray-600">
                Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.
              </p>
            </div>
            <div>
              <h3 className="text-green-800 font-semibold">Better Cover</h3>
              <p className="text-sm text-gray-600">
                Shop, bundle, and save on insurance coverage for home, auto, life, and more.
              </p>
            </div>
            <div>
              <h3 className="text-green-800 font-semibold">Better Inspect</h3>
              <p className="text-sm text-gray-600">
                Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee.
              </p>
            </div>
            <div>
              <h3 className="text-green-800 font-semibold">Better Settlement Services</h3>
              <p className="text-sm text-gray-600">
                Get transparent rates when you shop for title insurance all in one convenient place.
              </p>
            </div>
          </div>
        </div>

        {/* Column 2 - Resources */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Home affordability calculator</li>
            <li>Mortgage calculator</li>
            <li>Free mortgage calculator</li>
            <li>Mortgage calculator with taxes</li>
            <li>Mortgage calculator with PMI</li>
            <li>Rent vs buy calculator</li>
            <li>HELOC payment calculator</li>
            <li>HELOC vs cash-out refinance calculator</li>
            <li>Buy a home</li>
            <li>Sell a home</li>
            <li>Get home inspection</li>
          </ul>
        </div>

        {/* Column 3 - Company */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>About Us</li>
            <li>Careers</li>
            <li>Media</li>
            <li>Partner With Us</li>
            <li>Learning center</li>
            <li>FAQs</li>
            <li>Investor Relations</li>
          </ul>
        </div>

        {/* Column 4 - Contact + Legal */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-700 mb-6">
            <li>hello@better.com</li>
            <li>415-523-8837</li>
            <li>FAQ</li>
            <li>Glossary</li>
          </ul>

          <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>NMLS Consumer Access</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Disclosures & Licensing</li>
            <li>Affiliated Business</li>
            <li>Browser Disclaimer</li>
          </ul>
        </div>
      </div>

     
    </footer>
  );
}
