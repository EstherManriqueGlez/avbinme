import "./MainSubtitle.scss";

interface MainSubtitleProps {
  title: string;
  variant?: "default" | "accent";
  ariaLabel?: string;
}

const MainSubtitle = ({ title, variant = "default", ariaLabel }: MainSubtitleProps) => {
  const className = variant === "accent" ? "main-subtitle main-subtitle--accent" : "main-subtitle";

  return (
    <div className={className} role="region" aria-label={ariaLabel}>
      <h2>{title}</h2>
      <span className="line-title"></span>
    </div>
  );
};

export default MainSubtitle;
