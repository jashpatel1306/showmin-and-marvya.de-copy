import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PortfolioWork from "@/components/portfolio/PortfolioWork";
import Testimonials from "@/components/Testimonials";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 md:pt-20">
        <PortfolioWork />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
