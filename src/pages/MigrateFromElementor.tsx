import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MigrateFromElementor = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <h1 className="section-title text-foreground text-center">
          Migrate from Elementor to a faster, easier-to-manage stack
        </h1>
      </main>
      <Footer />
    </div>
  );
};

export default MigrateFromElementor;

