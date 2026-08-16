import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import PlaceholderBlock from "@/components/PlaceholderBlock";
import Button from "@/components/Button";
import { siteConfig } from "@/lib/data/siteConfig";

export const metadata: Metadata = {
  title: "Admissions",
  description: "Admissions process at Standard Higher Secondary School, Rawalpindi.",
};

const processSteps = [
  { step: "1", title: "Select Program", description: "Choose the academic program you wish to apply to." },
  { step: "2", title: "Review Eligibility", description: "Confirm you meet the eligibility criteria for your chosen program." },
  { step: "3", title: "Submit Application", description: "Complete and submit the admission application." },
  { step: "4", title: "Application Review", description: "The school administration reviews your application." },
  { step: "5", title: "Admission Confirmation", description: "Successful applicants receive confirmation of admission." },
];

const faqs = [
  { q: "What documents are required for admission?", a: null },
  { q: "When do admissions open and close?", a: null },
  { q: "What is the fee structure?", a: null },
];

export default function AdmissionsPage() {
  return (
    <>
      <section className="section-pad bg-charcoal">
        <div className="container-shs">
          <SectionHeading
            eyebrow="Admissions"
            title="Begin Your Journey at SHS"
            description={`Located on ${siteConfig.address}. Call ${siteConfig.phone} for admissions inquiries.`}
            light
          />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shs">
          <SectionHeading eyebrow="Process" title="Admission Process" align="center" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((item) => (
              <div key={item.step} className="border border-charcoal/10 bg-white p-6 shadow-card">
                <span className="font-serif text-3xl text-gold">{item.step}</span>
                <h3 className="mt-3 font-medium text-charcoal">{item.title}</h3>
                <p className="mt-2 text-sm text-charcoal/60">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-ivory">
        <div className="container-shs grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div>
            <h3 className="font-serif text-lg text-charcoal mb-4">Eligibility & Documents</h3>
            <PlaceholderBlock label="Eligibility criteria and required documents to be provided by SHS" />
          </div>
          <div>
            <h3 className="font-serif text-lg text-charcoal mb-4">Admission Dates</h3>
            <PlaceholderBlock label="Admission opening and closing dates to be provided by SHS" />
          </div>
          <div>
            <h3 className="font-serif text-lg text-charcoal mb-4">Fee Information</h3>
            <PlaceholderBlock label="Fee structure to be provided by SHS" />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shs max-w-3xl">
          <SectionHeading eyebrow="FAQs" title="Frequently Asked Questions" />
          <div className="mt-8 space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="border border-charcoal/10 p-6">
                <p className="font-medium text-charcoal">{item.q}</p>
                <p className="mt-2 text-sm italic text-charcoal/50">
                  [Answer to be provided by SHS]
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-burgundy">
        <div className="container-shs text-center">
          <SectionHeading
            eyebrow="Apply"
            title="Start Your Online Application"
            description="Submit your application to SHS in a few simple steps. This is a demonstration of the online system — please also contact the school directly to complete your admission."
            align="center"
            light
          />
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/admissions/apply" variant="ghost">
              Apply Now
            </Button>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center justify-center border border-softwhite/60 px-7 py-3 text-sm font-medium uppercase tracking-wide text-softwhite hover:bg-softwhite hover:text-charcoal transition-colors"
            >
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
