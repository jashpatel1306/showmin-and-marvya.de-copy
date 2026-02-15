import { ArrowRight } from "lucide-react";

interface FeaturedServiceCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
}

const FeaturedServiceCard = ({ title, description, image, imageAlt, href }: FeaturedServiceCardProps) => {
  return (
    <a
      href={href}
      className="group flex flex-col gap-5 cursor-pointer flex-1 min-w-0"
    >
      <div className="flex flex-col gap-3">
        <p className="text-sm font-semibold tracking-wider uppercase text-primary">
          FEATURED
        </p>
        <div className="flex flex-col gap-1.5">
          <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
          <p className="text-base text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="relative w-full overflow-hidden rounded-xl border border-border" style={{ aspectRatio: "1.90476 / 1" }}>
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
    </a>
  );
};

export default FeaturedServiceCard;
