type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <span
          className={`block text-xs font-semibold tracking-[0.2em] uppercase mb-3 ${
            light ? "text-gold" : "text-burgundy"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-serif text-3xl md:text-4xl leading-tight ${
          light ? "text-softwhite" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-softwhite/80" : "text-charcoal/70"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
