import { useEffect, useRef, useState } from "react";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number; // ms between each word
  duration?: number; // ms per word animation
  once?: boolean;
}

const SplitText = ({
  text,
  className = "",
  delay = 60,
  duration = 600,
  once = true,
}: SplitTextProps) => {
  const words = text.split(" ");
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <span ref={ref} className={`inline ${className}`} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="inline-block overflow-hidden"
          style={{ marginRight: i < words.length - 1 ? "0.28em" : undefined }}
        >
          <span
            className="inline-block"
            style={{
              transform: visible ? "translateY(0)" : "translateY(110%)",
              opacity: visible ? 1 : 0,
              transition: `transform ${duration}ms cubic-bezier(0.22,1,0.36,1), opacity ${duration * 0.6}ms ease`,
              transitionDelay: `${i * delay}ms`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </span>
  );
};

export default SplitText;
