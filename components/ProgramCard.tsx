import Link from "next/link";
import type { Program } from "@/lib/data/programs";

export default function ProgramCard({ program }: { program: Program }) {
  return (
    <div className="group border border-charcoal/10 bg-white p-8 shadow-card transition-shadow hover:shadow-cardHover">
      <span className="text-xs font-semibold uppercase tracking-wide text-gold">{program.division}</span>
      <h3 className="mt-1 font-serif text-xl text-charcoal">{program.name}</h3>
      <p className="mt-3 text-sm text-charcoal/60 leading-relaxed">
        {program.description ?? "Details for this program are pending confirmation by SHS."}
      </p>
      <Link
        href={`/academics/${program.slug}`}
        className="mt-6 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-burgundy group-hover:text-burgundy-dark"
      >
        Explore Program →
      </Link>
    </div>
  );
}
