type PlaceholderBlockProps = {
  label?: string;
  className?: string;
};

export default function PlaceholderBlock({
  label = "Information to be provided by SHS",
  className = "",
}: PlaceholderBlockProps) {
  return (
    <div
      className={`border border-dashed border-charcoal/25 bg-ivory/60 px-6 py-8 text-center ${className}`}
    >
      <p className="text-sm italic text-charcoal/50">[{label}]</p>
    </div>
  );
}
