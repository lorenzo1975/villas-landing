import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  tone?: "default" | "inverted";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  tone = "default"
}: SectionHeadingProps) {
  const isInverted = tone === "inverted";

  return (
    <div
      className={cn(
        "mx-auto max-w-3xl space-y-6",
        align === "center" && "text-center",
        isInverted ? "text-secondary-foreground" : "text-foreground",
        className
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "text-[0.7rem] font-semibold uppercase tracking-[0.45em]",
            isInverted ? "text-secondary-foreground/70" : "text-primary/80"
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "text-lg sm:text-xl",
            isInverted ? "text-secondary-foreground/80" : "text-foreground/70"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
