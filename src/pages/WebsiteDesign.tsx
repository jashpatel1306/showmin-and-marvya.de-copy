import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

const WebsiteDesign = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <section className="wavy-bg">
          <div className="container mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-10 md:pb-16">
            <div className="max-w-3xl">
              <div className="badge-pill mb-6">
                <span className="inline-flex h-2 w-2 rounded-full bg-[hsl(var(--service-purple))]" />
                Design
              </div>
              <h1 className="section-heading text-foreground">Website design</h1>
              <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl">
                Modern, conversion-focused website design—built around clear messaging, fast iteration, and a system your
                team can extend confidently.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/contact" className="btn-primary">
                  Chat about design
                </a>
                <a href="/design" className="btn-secondary">
                  Explore design
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background">
          <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="service-card">
                <h3 className="text-lg font-semibold text-foreground">What we design</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>Landing pages & marketing sites</li>
                  <li>Service pages and content templates</li>
                  <li>Design systems (components, tokens, docs)</li>
                  <li>Copy + layout collaboration</li>
                </ul>
              </div>

              <div className="service-card">
                <h3 className="text-lg font-semibold text-foreground">Deliverables</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>Figma files organized for handoff</li>
                  <li>Responsive designs (desktop → mobile)</li>
                  <li>Component specs and states</li>
                  <li>Optional dev-ready build support</li>
                </ul>
              </div>

              <div className="service-card">
                <h3 className="text-lg font-semibold text-foreground">How we work</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>Quick kickoff & direction</li>
                  <li>Weekly iterations (ship, review, refine)</li>
                  <li>Accessible, performant patterns</li>
                  <li>Designed to scale with your team</li>
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

export default WebsiteDesign;

