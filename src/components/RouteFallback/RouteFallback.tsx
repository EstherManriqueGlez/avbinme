import "./RouteFallback.scss";

export const RouteFallback = () => {
  return (
    <div className="route-fallback" role="status" aria-live="polite">
      <span className="route-fallback__spinner" aria-hidden="true"></span>
      <span className="route-fallback__label">Cargando…</span>
    </div>
  );
};
