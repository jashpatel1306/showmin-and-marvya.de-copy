import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustedBy from "@/components/TrustedBy";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import ScrollReveal from "@/components/ScrollReveal";
import HeroSection from "@/components/Careers/HeroSection";

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

     <HeroSection />
      {/* <main className="pt-24 md:pt-28">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <ScrollReveal className="mb-6">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Careers
              </p>
            </ScrollReveal>

            <ScrollReveal className="space-y-6" delay={80}>
              <h1 className="section-title">
                Build the next generation of websites with Showmine.
              </h1>
              <p className="text-lg text-muted-foreground">
                We collaborate with ambitious teams across India, the US, the UK, and beyond.
                If you care about thoughtful design, clear communication, and fast, reliable builds,
                you&apos;ll feel at home here.
              </p>
            </ScrollReveal>

            <ScrollReveal className="mt-10 grid gap-6 md:grid-cols-3" delay={140}>
              <div className="rounded-2xl border border-border bg-card p-5">
                <p className="text-xs font-medium text-muted-foreground mb-2">
                  Work style
                </p>
                <p className="text-sm text-foreground">
                  Remote-friendly, async-first collaboration with focused working blocks.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-5">
                <p className="text-xs font-medium text-muted-foreground mb-2">
                  Projects
                </p>
                <p className="text-sm text-foreground">
                  Product teams, agencies, and founders who value long-term partnerships.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-5">
                <p className="text-xs font-medium text-muted-foreground mb-2">
                  Growth
                </p>
                <p className="text-sm text-foreground">
                  Exposure to design, development, SEO, and automation across many industries.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

       
        <section className="py-12 md:py-16 border-t border-border/60 bg-muted/40">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <ScrollReveal className="flex items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                  Current openings
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  No open full-time roles right now, but we&apos;re always happy to meet talented collaborators.
                </p>
              </div>
              <a href="/contact" className="btn-primary whitespace-nowrap text-sm">
                Send your portfolio
              </a>
            </ScrollReveal>

            <ScrollReveal
              className="mt-6 rounded-2xl border border-dashed border-border bg-background/70 px-4 py-6 md:px-6"
              delay={80}
            >
              <p className="text-sm text-muted-foreground">
                Designers, developers, copywriters, and technical marketers who love high-quality execution
                are welcome to reach out. Share a short note about how you like to work and 2–3 projects
                you&apos;re proud of.
              </p>
            </ScrollReveal>
          </div>
        </section>

        
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <ScrollReveal className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
              <div className="space-y-4">
                <h2 className="section-title text-3xl md:text-4xl">
                  How we like to work.
                </h2>
                <p className="text-sm md:text-base text-muted-foreground">
                  We keep meetings light and give ourselves time for deep work. Most collaboration happens
                  in clear written updates, Loom walkthroughs, and well-structured Figma and Notion spaces.
                </p>
                <p className="text-sm md:text-base text-muted-foreground">
                  You&apos;ll spend the majority of your time shipping real work for real clients, not
                  sitting in calls. Clear ownership, calm communication, and reliable delivery matter most.
                </p>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-border bg-card p-5">
                  <p className="text-xs font-medium text-muted-foreground mb-2">
                    What we look for
                  </p>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li>• Strong craft in your discipline</li>
                    <li>• Comfort working async with clients in multiple time zones</li>
                    <li>• Curiosity about performance, UX, and business impact</li>
                    <li>• Friendly, reliable communication</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <TrustedBy />
        <Testimonials />
        <CTA />
      </main> */}

      <Footer />
    </div>
  );
};

export default Careers;

