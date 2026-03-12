import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

const TechnicalSeoAudit = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <section className="wavy-bg">
          <div className="container mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-10 md:pb-16">
            <div className="max-w-3xl">
              <div className="badge-pill mb-6">
                <span className="inline-flex h-2 w-2 rounded-full bg-[hsl(var(--brand-blue))]" />
                Technical SEO audit
              </div>
              <h1 className="section-heading text-foreground">Technical SEO audit</h1>
              <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl">
                A practical, prioritized audit that surfaces crawl, indexation, performance, and structured data issues—then
                turns them into an action plan your team can ship.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/contact" className="btn-primary">
                  Get an audit
                </a>
                <a href="/seo" className="btn-secondary">
                  Explore SEO
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background">
          <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="service-card">
                <h3 className="text-lg font-semibold text-foreground">What we check</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>Crawlability & indexation (robots, sitemaps, canonicals)</li>
                  <li>Core Web Vitals & page performance</li>
                  <li>Redirects, status codes & broken internal links</li>
                  <li>Structured data & SERP enhancements</li>
                  <li>International / pagination patterns (when relevant)</li>
                </ul>
              </div>

              <div className="service-card">
                <h3 className="text-lg font-semibold text-foreground">What you get</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>Audit deck with screenshots and references</li>
                  <li>Prioritized backlog (impact x effort)</li>
                  <li>Quick wins + deeper fixes</li>
                  <li>Optional implementation support</li>
                </ul>
              </div>

              <div className="service-card">
                <h3 className="text-lg font-semibold text-foreground">Best for</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>Sites after a redesign / migration</li>
                  <li>Plateaued organic growth</li>
                  <li>New templates or CMS changes</li>
                  <li>Teams who want a clear roadmap</li>
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

export default TechnicalSeoAudit;

