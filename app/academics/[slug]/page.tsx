import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SectionHeading from "@/components/SectionHeading";
import PlaceholderBlock from "@/components/PlaceholderBlock";
import Button from "@/components/Button";
import { programs } from "@/lib/data/programs";

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const program = programs.find((p) => p.slug === params.slug);
  return { title: program?.name ?? "Program" };
}

export default function ProgramDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const program = programs.find((p) => p.slug === params.slug);
  if (!program) notFound();

  return (
    <>
      <section className="section-pad bg-charcoal">
        <div className="container-shs">
          <SectionHeading eyebrow="Program" title={program.name} light />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shs grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-serif text-lg text-charcoal mb-3">Overview</h3>
              {program.description ? (
                <p className="text-charcoal/70 leading-relaxed">{program.description}</p>
              ) : (
                <PlaceholderBlock label="Program overview to be provided by SHS" />
              )}
            </div>
            <div>
              <h3 className="font-serif text-lg text-charcoal mb-3">Subjects</h3>
              {program.subjects && program.subjects.length > 0 ? (
                <ul className="grid grid-cols-2 gap-2 text-sm text-charcoal/70">
                  {program.subjects.map((s) => (
                    <li key={s} className="border-l-2 border-gold pl-3">{s}</li>
                  ))}
                </ul>
              ) : (
                <PlaceholderBlock label="Subject list to be provided by SHS" />
              )}
            </div>
            <div>
              <h3 className="font-serif text-lg text-charcoal mb-3">Future Pathways</h3>
              {program.futurePathways ? (
                <p className="text-charcoal/70 leading-relaxed">{program.futurePathways}</p>
              ) : (
                <PlaceholderBlock label="Future pathways information to be provided by SHS" />
              )}
            </div>
          </div>

          <aside className="border border-charcoal/10 bg-ivory p-8 h-fit">
            <h3 className="font-serif text-lg text-charcoal mb-2">Ready to Apply?</h3>
            <p className="text-sm text-charcoal/60 mb-6">
              Start your application to SHS today.
            </p>
            <Button href="/admissions/apply" className="w-full">
              Apply Now
            </Button>
          </aside>
        </div>
      </section>
    </>
  );
}
