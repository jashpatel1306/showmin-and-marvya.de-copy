import { useState } from "react";
import heroImg from "@/assets/Career/hero-careers.jpg";
// import PrincipleCard from "@/components/PrincipleCard";
// import TeamMember from "@/components/TeamMember";
// import JobCard from "@/components/JobCard";

interface PrincipleCardProps {
    number: string;
    title: string;
    description: string;
  }

  const PrincipleCard = ({ number, title, description }: PrincipleCardProps) => {
    return (
      <div className="group border-t border-border py-8 hover:border-primary/50 transition-colors duration-500">
        <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-body">[{number}]</span>
        <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-foreground mt-4 mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed max-w-lg">{description}</p>
      </div>
    );
  };

const principles = [
  { number: "01", title: "Client Obsession", description: "Every decision starts with the client outcome. We measure success by the transformation we deliver, not the deliverables we produce." },
  { number: "02", title: "Hire & Train Exceptional Talent", description: "We seek AI-native minds combined with seasoned practitioners. Our teams don't just use AI tools—they think in AI-native paradigms." },
  { number: "03", title: "Document to Scale", description: "Excellence in everything we build. We document our work, codify our learnings, and scale our successes systematically." },
  { number: "04", title: "80% Work In 20% Time", description: "Hyper-productivity through AI leverage. We use AI to amplify human capabilities and deliver exponentially more value in less time." },
  { number: "05", title: "Only Ever Be Honest", description: "Unbiased perspective drives genuine transformation. We tell you what you need to hear, not what you want to hear." },
];

const teamMembers = [
  { name: "Alex Johnson", role: "CEO", imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" },
  { name: "Sarah Chen", role: "CTO", imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face" },
  { name: "Marcus Reid", role: "Head of Growth", imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" },
];

const departments = ["All", "Engineering", "Design", "Marketing", "Product", "Operations"];

const jobs = [
  { title: "Senior Frontend Engineer", department: "Engineering", location: "San Francisco, CA", type: "Full-time" },
  { title: "Product Designer", department: "Design", location: "Remote", type: "Full-time" },
  { title: "Growth Marketing Manager", department: "Marketing", location: "New York, NY", type: "Full-time" },
  { title: "Backend Engineer", department: "Engineering", location: "Remote", type: "Full-time" },
  { title: "Senior Product Manager", department: "Product", location: "San Francisco, CA", type: "Full-time" },
  { title: "DevOps Engineer", department: "Engineering", location: "London, UK", type: "Full-time" },
  { title: "UX Researcher", department: "Design", location: "Remote", type: "Contract" },
  { title: "People Operations Lead", department: "Operations", location: "New York, NY", type: "Full-time" },
];

const HeroSection = () => {
  const [activeDept, setActiveDept] = useState("All");
  const filtered = activeDept === "All" ? jobs : jobs.filter((j) => j.department === activeDept);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Team in motion" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-background/30" />
        </div>

        {/* Vertical "Career" label */}
        <div className="absolute left-6 sm:left-10 top-1/2 -translate-y-1/2 hidden sm:block">
          <span className="text-xs tracking-[0.3em] uppercase text-foreground/60 [writing-mode:vertical-lr] rotate-180">[ Career ]</span>
        </div>

        <div className="relative container max-w-6xl py-32 sm:py-40 flex flex-col justify-center min-h-[80vh]">
          {/* Title row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-heading font-normal leading-[1.05] text-foreground shrink-0">
              Work at the edge
            </h1>
            <div className="hidden sm:block flex-1 h-px bg-foreground/30" />
          </div>
          <div className="sm:text-right mt-2 sm:mt-0">
            <span className="text-5xl sm:text-7xl lg:text-[5.5rem] font-heading italic font-normal text-foreground leading-[1.1]">
              of Transformation
            </span>
          </div>

          {/* Bottom row: description left, CTA right */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mt-16 sm:mt-24 gap-8">
            <p className="text-foreground/70 max-w-sm leading-relaxed text-[15px]">
              We are for the pragmatic dreamers. The independent thinkers. These are the bright minds we hire and nurture.
            </p>
            <a href="#join-mission" className="inline-flex px-10 py-3.5 bg-foreground/10 backdrop-blur-sm border border-foreground/20 text-sm font-medium tracking-[0.2em] uppercase text-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 shrink-0">
              See Open Positions
            </a>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 border-b border-border">
        <div className="container max-w-4xl text-center">
          <p className="text-xl sm:text-2xl font-heading italic text-muted-foreground leading-relaxed">
            "How we spend our days is, of course, how we spend our lives."
          </p>
        </div>
      </section>

      {/* Company Section */}
      <section className="py-24">
        <div className="container max-w-6xl">
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">[ The company we're building ]</span>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-foreground mt-6 mb-8 max-w-3xl leading-tight">
            A place where people challenge every assumption to reimagine operations from the ground up.
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed text-lg mb-16">
            We're building a team of makers and thinkers shaping products that millions of people use every day. We value craft, curiosity, and kindness.
          </p>

          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-10 block">[ Our Principles ]</span>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-2">
            {principles.map((p) => (
              <PrincipleCard key={p.number} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Champions Section */}
      {/* <section className="py-24 border-y border-border bg-card">
        <div className="container max-w-5xl text-center">
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">[ We're Looking For Champions ]</span>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-foreground mt-6 mb-8 leading-tight">
            We are looking for champions. <em className="font-normal">Period.</em>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg mb-10">
            Champions are rare, and we are thrilled when we find them. They play for the front of the jersey—driven by a shared mission rather than personal accolades. If you believe you are a champion, we want to get to know you.
          </p>
          <a href="#join-mission" className="inline-flex px-8 py-3 border border-foreground/30 text-sm font-medium tracking-[0.15em] uppercase text-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300">
            See Open Positions
          </a>
        </div>
      </section> */}

      {/* Team */}
      {/* <section className="py-24">
        <div className="container max-w-5xl">
          <div className="flex items-baseline justify-between border-t border-border pt-6 mb-14">
            <span className="text-sm tracking-[0.15em] text-muted-foreground">[The People You'll Work With]</span>
            <span className="text-sm text-muted-foreground hidden sm:block">Meet our solvers, architects, and AI minds</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {teamMembers.map((m) => (
              <TeamMember key={m.name} {...m} />
            ))}
          </div>
        </div>
      </section> */}

      {/* Job Listings */}
      {/* <section id="join-mission" className="py-24 border-t border-border"> */}
        {/* <div className="container max-w-4xl">
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">[ Join the Mission ]</span>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-foreground mt-6 mb-4 leading-tight">
            Open Positions
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            We're always looking for brave souls and curious minds to join our mission.
          </p> */}

          {/* Filter */}
          {/* <div className="flex flex-wrap gap-2 mb-10">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveDept(dept)}
                className={`px-5 py-2 text-sm font-medium tracking-wide transition-all duration-200 border ${
                  activeDept === dept
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                }`}
              >
                {dept}
              </button>
            ))}
          </div> */}

          {/* Jobs */}
          {/* <div>
            {filtered.map((job, i) => (
              <JobCard key={job.title} {...job} index={i} />
            ))}
            {filtered.length === 0 && (
              <p className="text-center text-muted-foreground py-16 font-heading italic text-lg">
                No openings in this department right now. Check back soon.
              </p>
            )}
          </div> */}
        {/* </div> */}
      {/* </section> */}
    </div>
  );
};

export default HeroSection;
