import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WelcomeScreen from "@/components/WelcomeScreen";

export default function StartPage() {
  return (
    <div className="relative">
      <WelcomeScreen/>
      <Footer />
    </div>
  );
}
