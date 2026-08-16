import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import PlaceholderBlock from "@/components/PlaceholderBlock";
import { siteConfig } from "@/lib/data/siteConfig";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Standard Higher Secondary School, Mughalabad Road, Rawalpindi.",
};

const journeySteps = [
  { label: "Foundation", year: String(siteConfig.foundingYear) },
  { label: "Growth", year: "[Year to be confirmed by SHS]" },
  { label: "Academic Development", year: "[Year to be confirmed by SHS]" },
  { label: "Community", year: "[Year to be confirmed by SHS]" },
  { label: "Today", year: `${siteConfig.yearsOfExcellence} Years of Excellence` },
  { label: "The Future", year: "" },
];

export default function AboutPage() {
  return (
    <>
      <section className="section-pad bg-ivory">
        <div className="container-shs">
          <SectionHeading
            eyebrow="About SHS"
            title="About Standard Higher Secondary School"
            description={siteConfig.aboutShort}
          />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shs">
          <SectionHeading eyebrow="Our Journey" title="Our Journey" align="center" />
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            {journeySteps.map((step, i) => (
              <div key={step.label} className="flex items-center gap-4">
                <div className="border border-burgundy px-5 py-3 text-center">
                  <p className="text-sm font-medium text-charcoal">{step.label}</p>
                  {step.year && <p className="text-xs text-charcoal/40 mt-1">{step.year}</p>}
                </div>
                {i < journeySteps.length - 1 && (
                  <span className="text-burgundy/40 hidden sm:inline">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-ivory">
        <div className="container-shs grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Leadership" title="Message from the Principal" />
            <div className="mt-8 flex gap-6 border border-charcoal/10 bg-white p-6 shadow-card">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-gold/50">
                <Image
                  src={siteConfig.principal.image}
                  alt={siteConfig.principal.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <p className="font-serif text-lg text-charcoal">{siteConfig.principal.name}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-burgundy">
                  {siteConfig.principal.title}
                </p>
                <p className="mt-3 text-sm text-charcoal/70 leading-relaxed italic">
                  “{siteConfig.principal.message}”
                </p>
              </div>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Values" title="Our Educational Philosophy" />
            <ul className="mt-8 space-y-5">
              {siteConfig.whyShs.map((item) => (
                <li key={item.title} className="border-l-2 border-gold pl-4">
                  <p className="font-medium text-charcoal">{item.title}</p>
                  <p className="text-sm text-charcoal/60 mt-1">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shs">
          <SectionHeading eyebrow="Alumni" title="Our Alumni" align="center" />
          <PlaceholderBlock
            label="Alumni stories and achievements to be provided by SHS"
            className="mt-8"
          />
        </div>
      </section>
    </>
  );
}
