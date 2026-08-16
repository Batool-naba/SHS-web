import type { SchoolEvent } from "@/lib/data/news";

export default function EventCard({ event }: { event: SchoolEvent }) {
  return (
    <div className="border border-charcoal/10 bg-white p-6 shadow-card">
      <span className="text-xs font-semibold uppercase tracking-wide text-gold">{event.date}</span>
      <h3 className="mt-2 font-serif text-lg text-charcoal">{event.title}</h3>
      <p className="mt-2 text-sm text-charcoal/60 leading-relaxed">{event.description}</p>
      <p className="mt-4 text-xs font-medium uppercase tracking-wide text-charcoal/40">
        {event.location}
      </p>
    </div>
  );
}
