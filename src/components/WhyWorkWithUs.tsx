
interface ReasonItem {
  title: string;
  description: string;
}

const CheckBadge = ({ className = "" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 35 35"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="checkGradient" x1="0.04" x2="0.96" y1="0" y2="1">
        <stop offset="0" stopColor="hsl(var(--primary-light))" />
        <stop offset="1" stopColor="hsl(var(--primary))" />
      </linearGradient>
    </defs>
    <path
      d="M 12.667 2.453 C 15.059 -0.818 19.941 -0.818 22.333 2.453 C 22.882 3.204 23.803 3.585 24.722 3.443 C 28.726 2.821 32.179 6.274 31.557 10.278 C 31.415 11.196 31.796 12.118 32.547 12.667 C 35.818 15.059 35.818 19.941 32.547 22.333 C 31.796 22.882 31.415 23.803 31.557 24.722 C 32.179 28.726 28.726 32.179 24.722 31.557 C 23.803 31.415 22.882 31.796 22.333 32.547 C 19.941 35.818 15.059 35.818 12.667 32.547 C 12.118 31.796 11.196 31.415 10.278 31.557 C 6.274 32.179 2.821 28.726 3.443 24.722 C 3.585 23.803 3.204 22.882 2.453 22.333 C -0.818 19.941 -0.818 15.059 2.453 12.667 C 3.204 12.118 3.585 11.196 3.443 10.278 C 2.821 6.274 6.274 2.821 10.278 3.443 C 11.196 3.585 12.118 3.204 12.667 2.453 Z M 25.366 13.857 C 26.019 13.144 25.971 12.037 25.258 11.384 C 24.546 10.731 23.439 10.779 22.786 11.492 L 16.227 18.526 L 14.322 16.849 C 13.61 16.196 12.503 16.243 11.85 16.955 C 11.196 17.667 11.243 18.774 11.955 19.427 L 15.15 22.289 C 15.492 22.603 15.945 22.768 16.408 22.748 C 16.872 22.728 17.31 22.525 17.623 22.182 Z"
      fill="url(#checkGradient)"
    />
  </svg>
);

const reasons: ReasonItem[] = [
  {
    title: "Experience across Webflow and Shopify",
    description:
      "We design and build Webflow sites and understand how Shopify stores work, so we can create a joined-up experience across the two.",
  },
  {
    title: "Content and campaigns first",
    description:
      "We focus on the pages and journeys that matter for marketing and sales, not just copying a theme into a different tool.",
  },
  {
    title: "SEO and stability in mind",
    description:
      "We handle redirects, tracking, and rollout carefully so you keep your search visibility and do not confuse returning visitors.",
  },
];

const WhyWorkWithUs = () => {
  return (
    <section className="w-full bg-gradient-to-b from-secondary to-background py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="mb-14 text-center text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
          Why work with Showmine on Shopify + Webflow
        </h2>

        <div className="flex flex-col">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex gap-4 border-b border-border py-8 last:border-b"
            >
              <CheckBadge className="mt-0.5 h-8 w-8 flex-shrink-0" />
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-foreground">
                  {reason.title}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
