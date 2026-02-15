import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/Services/ServicesSection";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 md:pt-20">
        <ServicesSection />
        {/* <ServicesSection /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Services;
