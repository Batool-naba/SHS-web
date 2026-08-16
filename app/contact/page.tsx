import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import PlaceholderBlock from "@/components/PlaceholderBlock";
import { siteConfig } from "@/lib/data/siteConfig";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Standard Higher Secondary School, Mughalabad Road, Rawalpindi.",
};

export default function ContactPage() {
  return (
    <>
      <section className="section-pad bg-ivory">
        <div className="container-shs">
          <SectionHeading
            eyebrow="Contact"
            title="Get in Touch with SHS"
            description="We welcome inquiries from prospective students, parents and the community."
          />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shs grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h3 className="font-serif text-lg text-charcoal mb-6">Contact Information</h3>
            <ul className="space-y-4 text-sm text-charcoal/70">
              <li>
                <span className="block text-xs font-semibold uppercase tracking-wide text-charcoal/40">Address</span>
                {siteConfig.address}
              </li>
              <li>
                <span className="block text-xs font-semibold uppercase tracking-wide text-charcoal/40">Phone</span>
                <a href={`tel:${siteConfig.phone}`} className="hover:text-burgundy">{siteConfig.phone}</a>
              </li>
              {siteConfig.additionalContacts.map((contact) => (
                <li key={contact.label}>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-charcoal/40">
                    {contact.label}
                  </span>
                  {contact.value}
                </li>
              ))}
              <li>
                <span className="block text-xs font-semibold uppercase tracking-wide text-charcoal/40">Email</span>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-burgundy">{siteConfig.email}</a>
              </li>
              <li>
                <span className="block text-xs font-semibold uppercase tracking-wide text-charcoal/40">School Timings</span>
                <span className="italic text-charcoal/40">[Timings to be provided by SHS]</span>
              </li>
              <li>
                <span className="block text-xs font-semibold uppercase tracking-wide text-charcoal/40">Social Media</span>
                <a
                  href={siteConfig.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-burgundy"
                >
                  Facebook
                </a>
              </li>
            </ul>

            <div className="mt-8 aspect-video w-full overflow-hidden border border-charcoal/10">
              <iframe
                title="SHS Location Map"
                src="https://www.google.com/maps?q=Mughalabad+Road,+Rawalpindi&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg text-charcoal mb-6">Send a Message</h3>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section-pad bg-ivory">
        <div className="container-shs">
          <h3 className="font-serif text-lg text-charcoal mb-4 text-center">Testimonials</h3>
          <PlaceholderBlock label="Verified parent/student testimonial to be added" />
        </div>
      </section>
    </>
  );
}
