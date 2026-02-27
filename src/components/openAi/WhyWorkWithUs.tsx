interface ReasonItem {
    title: string;
    description: string;
}

const CheckBadge = () => (
    <svg width="25" height="25" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="checkGrad" x1="0.04" x2="0.96" y1="0" y2="1">
                <stop offset="0" stopColor="hsl(197, 100%, 80%)" />
                <stop offset="1" stopColor="hsl(214, 100%, 53%)" />
            </linearGradient>
        </defs>
        <path
            d="M 6.153 1.192 C 7.314 -0.397 9.686 -0.397 10.847 1.192 C 11.114 1.556 11.562 1.741 12.008 1.672 C 13.953 1.37 15.63 3.047 15.328 4.992 C 15.259 5.438 15.444 5.886 15.809 6.153 C 17.397 7.314 17.397 9.686 15.809 10.847 C 15.444 11.114 15.259 11.562 15.328 12.008 C 15.63 13.953 13.953 15.63 12.008 15.328 C 11.562 15.259 11.114 15.444 10.847 15.808 C 9.686 17.397 7.314 17.397 6.153 15.808 C 5.886 15.444 5.438 15.259 4.992 15.328 C 3.047 15.63 1.37 13.953 1.672 12.008 C 1.741 11.562 1.556 11.114 1.192 10.847 C -0.397 9.686 -0.397 7.314 1.192 6.153 C 1.556 5.886 1.741 5.438 1.672 4.992 C 1.37 3.047 3.047 1.37 4.992 1.672 C 5.438 1.741 5.886 1.556 6.153 1.192 Z M 12.321 6.73 C 12.638 6.384 12.614 5.847 12.268 5.529 C 11.922 5.212 11.385 5.236 11.067 5.582 L 7.882 8.998 L 6.956 8.184 C 6.611 7.867 6.073 7.889 5.755 8.235 C 5.438 8.581 5.461 9.119 5.807 9.436 L 7.358 10.826 C 7.525 10.979 7.745 11.059 7.97 11.049 C 8.195 11.04 8.408 10.941 8.56 10.774 Z"
            fill="url(#checkGrad)"
        />
    </svg>
);

const reasons: ReasonItem[] = [
    {
      title: "Design, development, and AI expertise combined",
      description:
        "We bring together interface design, product development, and hands-on experience with OpenAI—so what you launch is both technically robust and genuinely useful.",
    },
    {
      title: "Practical use over hype",
      description:
        "We prioritize clear, high-value use cases and start focused. The goal isn’t to add AI everywhere, but to meaningfully improve key journeys.",
    },
    {
      title: "Ongoing refinement and support",
      description:
        "After launch, we help review real-world usage, refine prompts, expand capabilities, and ensure the assistant stays aligned with your brand and policies.",
    },
  ];

const WhyWorkWithUs = () => {
    return (
        <section className="w-full bg-gradient-to-b from-secondary to-background py-16 md:py-24">
            <div className="mx-auto max-w-3xl px-4 md:px-6">
                <h2 className="section-title text-foreground text-center mb-12">
                Why work with an OpenAI agency like Showmine
                </h2>
                <div className="flex flex-col">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="flex gap-4 border-b border-border py-6 last:border-b-0"
                        >
                            <CheckBadge />
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
