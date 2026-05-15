import type { Availability } from "@/lib/types";

export function AvailabilityBadge({ availability }: { availability: Availability }) {
  const copy = availability.original
    ? availability.print
      ? "Original y prints disponibles"
      : "Original disponible"
    : availability.print
      ? "Print disponible"
      : "Consultar disponibilidad";

  return (
    <span className="inline-flex rounded-full border border-ink/10 bg-porcelain/70 px-3 py-1 text-[0.64rem] uppercase tracking-[0.28em] text-ash">
      {copy}
    </span>
  );
}
