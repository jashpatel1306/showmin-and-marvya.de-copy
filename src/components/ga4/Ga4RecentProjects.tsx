import { Button } from "@/components/ui/button";
import projectBgOrangeBlue from "@/assets/Ga4/project-bg.jpg";
import projectScreenshot from "@/assets/project-screenshot.webp";
import avatarStuart from "@/assets/avatar-stuart.webp";
import { Star } from "lucide-react";

interface StarRatingProps {
  count?: number;
}

const StarRating = ({ count = 5 }: StarRatingProps) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-5 w-5 fill-star text-star" />
      ))}
    </div>
  );
};

interface ProjectCardProps {
  bgImage: string;
  screenshot: string;
  category: string;
  flag: string;
  description: string;
  testimonial: string;
  avatarImage: string;
  clientName: string;
  clientRole: string;
}

const ProjectCard = ({
  bgImage,
  screenshot,
  category,
  flag,
  description,
  testimonial,
  avatarImage,
  clientName,
  clientRole,
}: ProjectCardProps) => {
  return (
    <div className="rounded-[14px] bg-secondary p-4 md:p-6">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
        {/* Left: Image area */}
        <div className="lg:w-1/2 flex-shrink-0">
          <div className="rounded-[30px] bg-card p-3 h-full">
            <div className="relative rounded-[24px] overflow-hidden aspect-[4/3] h-full">
              <img
                src={bgImage}
                alt="Project background"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center p-4 md:p-6">
                <div className="relative w-full max-w-[92%] rounded border border-foreground/10 shadow-lg">
                  <img
                    src={screenshot}
                    alt="Project screenshot"
                    className="w-full h-auto rounded object-contain bg-card"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="lg:w-1/2 flex flex-col justify-center py-2 lg:py-6 lg:pr-4">
          {/* Category + flag */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-base text-muted-foreground tracking-wide">
              {category}
            </span>
            <div className="w-px h-5 bg-muted-foreground/30" />
            <span className="text-base">{flag}</span>
          </div>

          {/* Description */}
          <h3 className="font-display text-2xl md:text-3xl lg:text-[2rem] font-bold leading-tight text-foreground mb-8">
            {description}
          </h3>

          {/* Stars */}
          <div className="mb-4">
            <StarRating />
          </div>

          {/* Testimonial */}
          <p className="text-base leading-relaxed text-foreground/80 mb-8">
            {testimonial}
          </p>

          {/* Client info */}
          <div className="flex items-center gap-3">
            <img
              src={avatarImage}
              alt={`Photo of ${clientName}`}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-bold text-foreground">{clientName}</p>
              <p className="text-sm text-muted-foreground">{clientRole}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Ga4RecentProjects = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-16 bg-background">
      <h2 className="section-title text-foreground text-center mb-12 md:mb-16">
      Recent analytics and tracking projects
      </h2>
      <div className="space-y-8 mb-14">
          <ProjectCard
            bgImage={projectBgOrangeBlue}
            screenshot={projectScreenshot}
            category="E-commerce"
            flag="🇬🇧"
            description="Ecommerce website design and build for Robert Rose Carpentry."
            testimonial="Showmine's professionalism, expertise, and commitment to customer satisfaction are the best I have experienced for as long as I can remember. Their team is not only highly skilled, but also incredibly passionate about what they do."
            avatarImage={avatarStuart}
            clientName="Stuart Shaw"
            clientRole="Owner at Robert Rose Carpentry"
          />
      </div>
      <div className="flex justify-center">
          <Button
            size="lg"
            className="rounded-lg px-10 bg-blue-500 py-3 text-sm font-semibold shadow-[inset_0_6.75px_13.5px_0_rgba(0,0,0,0.08),inset_0_0.5625px_1.125px_0_rgba(255,255,255,0.34),0_1.125px_2.25px_0_rgba(8,8,8,0.19),0_4px_4.5px_0_rgba(8,8,8,0.05)]"
          >
            View portfolio
        </Button>
      </div>
    </section>
  );
};

export default Ga4RecentProjects;
