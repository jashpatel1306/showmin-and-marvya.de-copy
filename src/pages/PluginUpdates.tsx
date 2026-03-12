import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

const PluginUpdates = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <section className="wavy-bg">
          <div className="container mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-10 md:pb-16">
            <div className="max-w-3xl">
              <div className="badge-pill mb-6">
                <span className="inline-flex h-2 w-2 rounded-full bg-[hsl(var(--service-green))]" />
                Maintenance
              </div>
              <h1 className="section-heading text-foreground">Plugin updates</h1>
              <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl">
                Keep your site stable and secure with disciplined plugin updates, compatibility checks, and rollback plans—
                without breaking your design or slowing down your team.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/contact" className="btn-primary">
                  Request maintenance
                </a>
                <a href="/maintenance" className="btn-secondary">
                  Explore maintenance
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background">
          <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="service-card">
                <h3 className="text-lg font-semibold text-foreground">What’s included</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>Plugin/theme updates + version notes</li>
                  <li>Staging checks before production</li>
                  <li>Visual QA for critical pages</li>
                  <li>Security patches & dependency hygiene</li>
                </ul>
              </div>

              <div className="service-card">
                <h3 className="text-lg font-semibold text-foreground">How we reduce risk</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>Backups + rollback plan</li>
                  <li>Compatibility checks (PHP / WP / plugins)</li>
                  <li>Change batching to minimize downtime</li>
                  <li>Monitoring after deploy</li>
                </ul>
              </div>

              <div className="service-card">
                <h3 className="text-lg font-semibold text-foreground">Great for</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>WordPress sites with many plugins</li>
                  <li>Teams who want predictable maintenance</li>
                  <li>Reducing security + stability incidents</li>
                  <li>Keeping performance steady over time</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default PluginUpdates;

