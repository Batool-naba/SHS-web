import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photo gallery of Standard Higher Secondary School, Rawalpindi.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="section-pad bg-ivory">
        <div className="container-shs">
          <SectionHeading
            eyebrow="Gallery"
            title="Life at SHS"
            description="Authentic photographs from campus, events and student activities will appear here once supplied by the school."
            align="center"
          />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shs">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
