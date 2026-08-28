import "./Card.scss";

interface CardProps {
  image: string;
  imageAlt: string;
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  variant?: "standard" | "certification";
}

export const Card = ({
  image,
  imageAlt,
  title,
  description,
  actionLabel,
  onAction,
  variant = "standard",
}: CardProps) => {
  const className =
    variant === "certification" ? "card card--certification" : "card";

  return (
    <div className={className}>
      <div className="card__image">
        <img src={image} alt={imageAlt} />
      </div>
      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        {description && <p className="card__text">{description}</p>}
        {actionLabel && onAction && (
          <div className="card__action">
            <button type="button" onClick={onAction}>
              {actionLabel}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

