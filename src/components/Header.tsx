import { Search, Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/Company/showmine.png";

const navLinks = [
  { label: "Products", href: "/Products" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Careers", href: "/Careers" },
  { label: "Contact", href: "/contact" },

];

const categories = [
  { label: "All Services", href: "/services" },
  { label: "Design", href: "/design" },
  { label: "Development", href: "/development" },
  { label: "SEO", href: "/seo" },
  { label: "Maintenance", href: "/maintenance" },
  { label: "Copywriting", href: "/copywriting" },
  { label: "AI & Automation", href: "/ai-automation" },
];

const coreServices = [
  { label: "Website design", href: "/services/web-design" },
  { label: "Wordpress development", href: "/services/wordpress-development" },
  { label: "Technical SEO audit", href: "/services/technical-seo-audit" },
  { label: "Website speed improvements", href: "/services/website-speed-improvements" },
];

const trendingServices = [
  { label: "Backlinks", href: "/services/backlinks" },
  { label: "Framer development", href: "/services/framer-development" },
  { label: "Figma to Webflow", href: "/services/figma-to-webflow-development" },
  { label: "Schema markup", href: "/services/schema-markup" },
];

const buildWithTools = [
  { label: "Figma", href: "/figma-agency", logo: "https://framerusercontent.com/images/QJeOyFsAINyEooCkrGJZocdpyws.svg" },
  { label: "Webflow", href: "/webflow-agency", logo: "https://framerusercontent.com/images/EN8DKbXvlTDjkkycAxucWV0MGu0.svg" },
  { label: "Shopify", href: "/migrate-from-shopify", logo: "https://framerusercontent.com/images/WawXoAkLznIt1qE3lnbA4P0rT4E.svg" },
  { label: "Framer", href: "/framer-agency", logo: "https://framerusercontent.com/images/erQVobGVFVG48u0pk5nhWEk.svg" },
];

const migrateFromPlatforms = [
  { label: "Elementor", href: "/migrate-from-elementor", logo: "https://framerusercontent.com/images/eqpEGeKSLARhkT9TEXHzi0afzOg.png" },
  { label: "Wix", href: "/migrate-from-wix", logo: "https://framerusercontent.com/images/SBYGH9Sf8fo7J6lSjz1L1CSpuXo.png" },
  { label: "Squarespace", href: "/migrate-from-squarespace", logo: "https://framerusercontent.com/images/ccihYk5he2Y5poYp1ksaCFuL7TM.png" },
  { label: "GoDaddy", href: "/migrate-from-godaddy", logo: "https://framerusercontent.com/images/Z8W94ryrykoNgi2qsSI7ysZv0K8.png" },
  { label: "Shopify", href: "/migrate-from-shopify", logo: "https://framerusercontent.com/images/WawXoAkLznIt1qE3lnbA4P0rT4E.svg" },
];

const measureAutomateTools = [
  { label: "Google Analytics", href: "/ga4", logo: "https://framerusercontent.com/images/2YP1tgbRkcWQuT2CFeOQY9aSPw.svg" },
  { label: "Make", href: "/make", logo: "https://framerusercontent.com/images/iHzAl2ihHbNJD720rjMN64DR2M.png" },
  { label: "GoHighLevel", href: "/gohighlevel", logo: "https://framerusercontent.com/images/6fATZT1GEyTNZnlbQkBTrVNEqhU.png" },
  { label: "OpenAI", href: "/openai", logo: "https://framerusercontent.com/images/329cv9LAcRfZMJLpHqFVgKOEg.png" },
  { label: "HubSpot", href: "/hubspot", logo: "https://framerusercontent.com/images/HZPn0onTTSg8Bu8wNEdWv8Hqs1o.png" },
];


const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [stackOpen, setStackOpen] = useState(false);

  const closeAllDropdowns = () => {
    setServicesOpen(false);
    setStackOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
      >
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg">
                <img
                  src={logo}
                  alt=""
                  className="" />
              </div>
              <span className="text-xl font-semibold text-foreground">Showmine</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {/* Services Button */}
              <div className="relative">
                <button
                  onClick={() => {
                    setStackOpen(false);
                    setServicesOpen(!servicesOpen);
                  }}
                  className="px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground hover:bg-muted rounded-lg"
                >
                  Services
                </button>
              </div>

              {/* Stack Button */}
              <div className="relative">
                <button
                  onClick={() => {
                    setServicesOpen(false);
                    setStackOpen(!stackOpen);
                  }}
                  className="px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground hover:bg-muted rounded-lg"
                >
                  Stack
                </button>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground hover:bg-muted rounded-lg"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Section */}
            <div className="hidden md:flex items-center gap-4">
              {/* Search Field */}
              <div className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full border border-border hover:border-foreground/20">
                <Search className="h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search for a service..."
                  className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-40"
                />
              </div>
              <ThemeToggle />
              {/* Theme Toggle */}

              {/* CTA Button */}
              <a href="#contact" className="btn-primary">
                Get started
              </a>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-border bg-background">
              <nav className="container py-4 flex flex-col gap-1">
                <button
                  onClick={() => {
                    closeAllDropdowns();
                    setServicesOpen(!servicesOpen);
                  }}
                  className="px-4 py-3 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground hover:bg-muted rounded-lg text-left"
                >
                  Services
                </button>
                <button
                  onClick={() => {
                    closeAllDropdowns();
                    setStackOpen(!stackOpen);
                  }}
                  className="px-4 py-3 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground hover:bg-muted rounded-lg text-left"
                >
                  Stack
                </button>
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="px-4 py-3 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground hover:bg-muted rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                {/* <div className="pt-4 px-4">
              <Button variant="cta" className="w-full">
                Get started
              </Button>
            </div> */}
              </nav>
            </div>
          )}
        </header>

        {/* Services Dropdown */}
        {servicesOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              onClick={() => setServicesOpen(false)}
            />
            <div className="fixed top-16 left-0 right-0 z-50 bg-muted border-b border-border">
              <div className="container py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-4">Categories</h3>
                    <div className="flex flex-col gap-1">
                      {categories.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          className="text-sm font-semibold text-primary hover:underline py-1"
                          onClick={closeAllDropdowns}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-4">Core services</h3>
                    <div className="flex flex-col gap-1">
                      {coreServices.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          className="text-sm font-medium text-foreground hover:text-primary py-1 transition-colors"
                          onClick={closeAllDropdowns}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-4">Trending services</h3>
                    <div className="flex flex-col gap-1">
                      {trendingServices.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          className="text-sm font-medium text-foreground hover:text-primary py-1 transition-colors"
                          onClick={closeAllDropdowns}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-4">Need help?</h3>
                    <Link
                      to="/get-started"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-background transition-colors"
                      onClick={closeAllDropdowns}
                    >
                      <div className="w-10 h-10 rounded-full bg-muted-foreground/20 overflow-hidden">
                        <img
                          src="https://framerusercontent.com/images/xOGD0lDVZK04t8dA6aXkcwU5LQY.png?width=1024&height=1024"
                          alt="Zac"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          <span className="text-sm font-medium text-foreground">Book a call</span>
                          <ArrowUpRight className="h-3 w-3 text-foreground" />
                        </div>
                        <span className="text-xs text-muted-foreground">Speak to Jash</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Stack Dropdown */}
        {stackOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              onClick={() => setStackOpen(false)}
            />
            <div className="fixed top-16 left-0 right-0 z-50 bg-muted border-b border-border">
              <div className="container py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {/* We build with */}
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-4">We build with</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {buildWithTools.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-background transition-colors"
                          onClick={closeAllDropdowns}
                        >
                          <div className="w-10 h-10 flex items-center justify-center">
                            <img src={item.logo} alt={item.label} className="max-w-full max-h-full object-contain" />
                          </div>
                          <span className="text-sm font-medium text-foreground">{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Migrate from */}
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-4">Migrate from</h3>
                    <div className="flex flex-col gap-1">
                      {migrateFromPlatforms.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          className="flex items-center gap-3 py-2 hover:bg-background rounded-lg px-2 transition-colors"
                          onClick={closeAllDropdowns}
                        >
                          <div className="w-6 h-6 flex items-center justify-center">
                            <img src={item.logo} alt={item.label} className="max-w-full max-h-full object-contain" />
                          </div>
                          <span className="text-sm font-medium text-foreground">{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Measure & automate */}
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-4">Measure & automate</h3>
                    <div className="flex flex-col gap-1">
                      {measureAutomateTools.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          className="flex items-center gap-3 py-2 hover:bg-background rounded-lg px-2 transition-colors"
                          onClick={closeAllDropdowns}
                        >
                          <span className="text-sm font-medium text-foreground">{item.label}</span>
                          <div className="w-5 h-5 flex items-center justify-center">
                            <img src={item.logo} alt={item.label} className="max-w-full max-h-full object-contain" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Need Help */}
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-4">Need help?</h3>
                    <Link
                      to="/get-started"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-background transition-colors"
                      onClick={closeAllDropdowns}
                    >
                      <div className="w-10 h-10 rounded-full bg-muted-foreground/20 overflow-hidden">
                        <img
                          src="https://framerusercontent.com/images/xOGD0lDVZK04t8dA6aXkcwU5LQY.png"
                          alt="Zac"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          <span className="text-sm font-medium text-foreground">Book a call</span>
                          <ArrowUpRight className="h-3 w-3 text-foreground" />
                        </div>
                        <span className="text-xs text-muted-foreground">Speak to Jash</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </motion.header>
    </>
  );
};

export default Header;
