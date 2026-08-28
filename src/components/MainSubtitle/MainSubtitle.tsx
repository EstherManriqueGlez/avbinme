import { useScrollReveal } from "@/hooks/useScrollReveal";
import "./MainSubtitle.scss";

interface MainSubtitleProps {
  title: string;
  variant?: "default" | "accent";
  ariaLabel?: string;
}

export const MainSubtitle = ({ title, variant = "default", ariaLabel }: MainSubtitleProps) => {
  const className = variant === "accent" ? "main-subtitle main-subtitle--accent" : "main-subtitle";
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={className + " scroll-reveal" + (isVisible ? " scroll-reveal--visible" : "")}
      role="region"
      aria-label={ariaLabel}
    >
      <h2>{title}</h2>
      <span className="line-title"></span>
    </div>
  );
};

