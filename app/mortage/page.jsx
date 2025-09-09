import Header from "@/components/Header";
import MortgageCalculator from "@/components/MortgageCalculator";
import Footer from "@/components/Footer";

export default function mortgage() {
  return (
    <div className="relative">
      <Header />
      <MortgageCalculator />
      <Footer />
    </div>
  );
}
