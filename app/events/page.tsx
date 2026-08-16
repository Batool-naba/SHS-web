import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import EventCard from "@/components/EventCard";
import { events } from "@/lib/data/news";

export const metadata: Metadata = {
  title: "Upcoming Events",
  description: "Upcoming events at Standard Higher Secondary School, Rawalpindi.",
};

export default function EventsPage() {
  return (
    <>
      <section className="section-pad bg-ivory">
        <div className="container-shs">
          <SectionHeading
            eyebrow="Events"
            title="Upcoming Events"
            description="School functions, celebrations and academic events at SHS."
            align="center"
          />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shs grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </>
  );
}
