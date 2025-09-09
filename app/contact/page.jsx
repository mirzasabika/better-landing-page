import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function contact() {
  return (
    <div className="relative">
      <Header />
      <div className="max-w-4xl mx-auto py-16 pt-40">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-700">
          You can reach us at <a href="mailto:info@example.com" className="text-green-600">info@example.com</a>
        </p>
      </div>
      <Footer />
    </div>
  );
}
