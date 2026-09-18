import { cn } from "@/lib/utils";

/**
 * Placeholder container for the designer's real ATS screenshots.
 *
 * To use a real screenshot, pass `src`:
 *   <ScreenshotSlot src="/images/sunset-haul.jpg" alt="Sunset haul" />
 * Drop the file in `public/images/` and that's it — nothing else to change.
 */
export function ScreenshotSlot({
  src,
  alt = "",
  label = "Screenshot placeholder",
  hint,
  ratio = "16 / 9",
  className,
  zoomOnHover = false,
}: {
  src?: string;
  alt?: string;
  label?: string;
  hint?: string;
  ratio?: string;
  className?: string;
  zoomOnHover?: boolean;
}) {
  return (
    <div
      style={{ aspectRatio: ratio }}
      className={cn(
        "relative w-full overflow-hidden rounded-sm border border-border bg-secondary",
        className,
      )}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={cn(
            "h-full w-full object-cover transition-transform duration-700 ease-out",
            zoomOnHover && "group-hover:scale-[1.04]",
          )}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center">
          {/* horizon + road hint */}
           <div className="desert-contours pointer-events-none absolute inset-0 bg-dusk opacity-90" />
          <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-border" />
          <div className="pointer-events-none absolute inset-x-[42%] bottom-0 top-1/2 border-x border-dashed border-border/70" />
          <div className="texture-grain-layer pointer-events-none absolute inset-0 opacity-60" />
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="relative h-6 w-6 text-primary"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <circle cx="8.5" cy="10" r="1.5" />
            <path d="m4 17 5-5 4 4 3-2 4 3" />
          </svg>
          <p className="relative font-display text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
            {label}
          </p>
          {hint ? (
            <p className="relative max-w-[22rem] text-xs text-muted-foreground/80">
              {hint}
            </p>
          ) : null}
        </div>
      )}
    </div>
  );
}
