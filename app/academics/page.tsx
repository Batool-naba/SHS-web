import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ProgramCard from "@/components/ProgramCard";
import { programs } from "@/lib/data/programs";

export const metadata: Metadata = {
  title: "Academics",
  description: "Academic programs at Standard Higher Secondary School, Rawalpindi.",
};

export default function AcademicsPage() {
  return (
    <>
      <section className="section-pad bg-ivory">
        <div className="container-shs">
          <SectionHeading
            eyebrow="Academics"
            title="Academic Programs"
            description="SHS offers Matriculation at the school level, and Intermediate programs through Standard College for Girls."
          />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shs">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <ProgramCard key={program.slug} program={program} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
