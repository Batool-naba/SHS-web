import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import ProgramCard from "@/components/ProgramCard";
import AchievementCard from "@/components/AchievementCard";
import { siteConfig } from "@/lib/data/siteConfig";
import { programs } from "@/lib/data/programs";
import { achievements } from "@/lib/data/achievements";

const quickInfo = [
  { value: `${siteConfig.yearsOfExcellence}+`, label: "Years of Academic Excellence" },
  { value: String(programs.length), label: "Academic Programs" },
  { value: "FBISE", label: "Affiliated Board" },
  { value: "Co-Curricular", label: "Sports & Student Activities" },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="border-b border-charcoal/10 bg-ivory">
        <div className="container-shs grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
          {quickInfo.map((item) => (
            <div key={item.label} className="text-center">
              <p className="font-serif text-2xl md:text-3xl text-burgundy">{item.value}</p>
              <p className="mt-1 text-xs md:text-sm text-charcoal/60">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shs grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="About SHS"
              title="Standard Higher Secondary School"
              description={siteConfig.aboutShort}
            />
            <Button href="/about" variant="secondary" className="mt-8">
              Read Our Story
            </Button>
          </div>
          <div className="border border-charcoal/10 bg-ivory p-10">
            <h3 className="font-serif text-lg text-charcoal mb-4">Why SHS</h3>
            <ul className="space-y-5">
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

      <section className="section-pad bg-ivory">
        <div className="container-shs">
          <SectionHeading
            eyebrow="Academics"
            title="Academic Programs"
            description="Matriculation at the school level, and Intermediate programs through Standard College for Girls."
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <ProgramCard key={program.slug} program={program} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shs">
          <SectionHeading
            eyebrow="Achievements"
            title="SHS Achievements"
            description="Real, verified milestones from Standard Higher Secondary School."
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement) => (
              <AchievementCard key={achievement.id} achievement={achievement} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-burgundy">
        <div className="container-shs text-center">
          <SectionHeading
            eyebrow="Admissions"
            title="Begin Your Journey at SHS"
            description="Learn about the admission process and take the first step toward joining Standard Higher Secondary School."
            align="center"
            light
          />
          <Button href="/admissions" variant="ghost" className="mt-8">
            View Admissions
          </Button>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shs grid grid-cols-1 gap-10 md:grid-cols-2">
          <SectionHeading
            eyebrow="Contact"
            title="Visit or Reach Out to SHS"
            description={`${siteConfig.address} · ${siteConfig.phone}`}
          />
          <div className="flex md:justify-end">
            <Button href="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
