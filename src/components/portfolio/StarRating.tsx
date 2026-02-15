import { Star } from "lucide-react";

interface StarRatingProps {
  count?: number;
}

const StarRating = ({ count = 5 }: StarRatingProps) => {
  return (
    <div className="flex gap-1.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-star text-star" />
      ))}
    </div>
  );
};

export default StarRating;
