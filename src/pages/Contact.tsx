import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 md:pt-20">
        <section className="max-w-3xl mx-auto px-6 md:px-8 py-16 md:py-24">
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Contact us
          </h1>
          <p className="text-muted-foreground text-base md:text-lg mb-10">
            Have a project in mind or want to work together? Get in touch and we&apos;ll get back to you soon.
          </p>

          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-y min-h-[120px]"
              />
            </div>
            <button
              type="button"
              className="btn-primary px-6 py-3 rounded-lg text-sm font-medium"
            >
              Send message
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
