import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

const CustomAiInterface = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <section className="wavy-bg">
          <div className="container mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-10 md:pb-16">
            <div className="max-w-3xl">
              <div className="badge-pill mb-6">
                <span className="inline-flex h-2 w-2 rounded-full bg-[hsl(var(--brand-teal))]" />
                AI & Automation
              </div>
              <h1 className="section-heading text-foreground">Custom AI interface</h1>
              <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl">
                Ship a secure, branded AI experience for your team or customers—connected to your tools, guarded by
                permissions, and designed for real workflows (not demos).
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/contact" className="btn-primary">
                  Discuss your AI UI
                </a>
                <a href="/ai-automation" className="btn-secondary">
                  Explore AI & automation
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background">
          <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="service-card">
                <h3 className="text-lg font-semibold text-foreground">Common features</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>Chat + task-based UI (forms, actions, approvals)</li>
                  <li>Upload & search your docs (RAG)</li>
                  <li>Role-based access & audit trails</li>
                  <li>Tool integrations (CRM, email, Slack, Notion, etc.)</li>
                  <li>Human-in-the-loop review flows</li>
                </ul>
              </div>

              <div className="service-card">
                <h3 className="text-lg font-semibold text-foreground">How we build</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>Fast prototype → usable MVP</li>
                  <li>Design system + responsive UI</li>
                  <li>Guardrails, prompts, and eval checks</li>
                  <li>Analytics + feedback loops</li>
                </ul>
              </div>

              <div className="service-card">
                <h3 className="text-lg font-semibold text-foreground">Ideal use cases</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>Internal copilots for ops, sales, support</li>
                  <li>Customer-facing AI assistants</li>
                  <li>Search and answer across knowledge bases</li>
                  <li>Automating repetitive workflows</li>
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

export default CustomAiInterface;

