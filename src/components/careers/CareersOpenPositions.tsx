import { useState } from "react";

interface JobPosition {
  id: string;
  title: string;
  department: "Engineering" | "Product & Design" | "Sales & Marketing";
  location: string;
  type: string;
  description: string;
  tags: string[];
}

const POSITIONS: JobPosition[] = [
  {
    id: "eng-fullstack",
    title: "Senior Full Stack Engineer",
    department: "Engineering",
    location: "Surat, India / Remote",
    type: "Full-time",
    description:
      "Architect and scale high-throughput WhatsApp automation workflows, webhooks, and modern AI dashboard interfaces.",
    tags: ["React", "TypeScript", "Node.js", "WebSockets"],
  },
  {
    id: "eng-ai-systems",
    title: "AI / LLM Systems Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "Build intelligent agent orchestrators, structured RAG pipelines, and real-time conversation state machines for enterprise WhatsApp users.",
    tags: ["Python", "LLMs", "LangChain / LlamaIndex", "Vector DBs"],
  },
  {
    id: "product-designer",
    title: "Lead Product Designer (UI/UX)",
    department: "Product & Design",
    location: "Remote",
    type: "Full-time",
    description:
      "Craft seamless, data-dense interfaces for multi-agent live chat, broadcasting toolkits, and conversation analytics.",
    tags: ["Figma", "Design Systems", "UX Research", "Prototyping"],
  },
  {
    id: "sales-account-exec",
    title: "Enterprise Account Executive",
    department: "Sales & Marketing",
    location: "Hybrid / Remote",
    type: "Full-time",
    description:
      "Drive enterprise WhatsApp AI adoption by partnering with mid-market and enterprise brands across India and global markets.",
    tags: ["B2B SaaS", "Enterprise Sales", "Solution Selling"],
  },
  {
    id: "growth-marketer",
    title: "Growth Marketing Specialist",
    department: "Sales & Marketing",
    location: "Remote",
    type: "Full-time",
    description:
      "Lead performance marketing, content strategy, and partner channel campaigns to accelerate brand adoption.",
    tags: ["Performance Marketing", "Content", "SEO", "Analytics"],
  },
];

const CATEGORIES = ["All", "Engineering", "Product & Design", "Sales & Marketing"] as const;

export function CareersOpenPositions() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [appliedJob, setAppliedJob] = useState<string | null>(null);

  const filteredPositions =
    selectedCategory === "All"
      ? POSITIONS
      : POSITIONS.filter((pos) => pos.department === selectedCategory);

  return (
    <section id="open-positions" className="w-full bg-[#F8FAFC] py-16 sm:py-20 lg:py-24 border-t border-b border-neutral-200/80">
      <div className="w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-full xl:max-w-[1118px] xl:mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#007A5A] uppercase mb-2">
            Open Roles
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#2D2D2D] tracking-tight"
            style={{ fontFamily: '"Geist Mono", monospace' }}
          >
            Explore opportunities at Showmine
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-[600px]">
            We are always looking for passionate builders. Browse current openings below or reach out directly to join us.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-8 sm:mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#042717] text-white shadow-xs"
                  : "bg-white text-neutral-600 hover:text-neutral-900 border border-neutral-200/80 hover:border-neutral-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Job Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {filteredPositions.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl p-5 sm:p-6 border border-neutral-200/80 shadow-2xs hover:shadow-md hover:border-[#007A5A]/40 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold px-2.5 py-1 bg-[#007A5A]/10 text-[#007A5A] rounded-md">
                    {job.department}
                  </span>
                  <span className="text-xs text-neutral-500 font-medium">{job.type}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-[#007A5A] transition-colors mb-2">
                  {job.title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-neutral-500 mb-3">
                  <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {job.location}
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                  {job.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono font-medium px-2 py-0.5 bg-neutral-100 text-neutral-600 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={`mailto:showmineinfotech@gmail.com?subject=Application for ${encodeURIComponent(job.title)}`}
                  onClick={() => setAppliedJob(job.title)}
                  className="inline-flex items-center justify-center w-full py-2.5 px-4 text-xs sm:text-sm font-semibold text-[#007A5A] bg-[#007A5A]/5 hover:bg-[#007A5A] hover:text-white rounded-lg border border-[#007A5A]/30 transition-all duration-200 text-center"
                >
                  {appliedJob === job.title ? "Email Opened ✓" : "Apply Now →"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
