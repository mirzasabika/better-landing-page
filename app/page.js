
import TestimonialSection from "@/components/TestimonialSection";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductsGrid from "@/components/ProductsGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <TestimonialSection/>
      <ProductsGrid/>

      <Footer/>
    </div>
  );
}
