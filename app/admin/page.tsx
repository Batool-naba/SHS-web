import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import AdminStatCard from "@/components/AdminStatCard";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

const stats = [
  { label: "Applications", value: 86 },
  { label: "Students", value: 940 },
  { label: "News", value: 12 },
  { label: "Events", value: 8 },
  { label: "Gallery", value: 245 },
];

const managementLinks = [
  "Manage Applications",
  "Manage Students",
  "Manage News",
  "Manage Events",
  "Manage Gallery",
  "Manage Announcements",
  "Manage Programs",
  "Manage Faculty",
  "Manage Achievements",
];

export default function AdminPage() {
  return (
    <>
      <section className="section-pad bg-charcoal">
        <div className="container-shs">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <SectionHeading eyebrow="Admin" title="SHS Administration" light />
            <span className="border border-gold/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-gold">
              Demo Data — Not Connected
            </span>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shs">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {stats.map((stat) => (
              <AdminStatCard key={stat.label} label={stat.label} value={stat.value} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-ivory">
        <div className="container-shs">
          <SectionHeading eyebrow="Content Management" title="Manage SHS Content" />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {managementLinks.map((label) => (
              <div
                key={label}
                className="flex items-center justify-between border border-charcoal/10 bg-white p-5"
              >
                <span className="text-sm font-medium text-charcoal">{label}</span>
                <span className="text-xs font-semibold uppercase tracking-wide text-charcoal/40">
                  Coming Soon
                </span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-charcoal/50">
            This dashboard is a visual demonstration only. Authentication and live content
            management will be enabled once the site is connected to a backend (Supabase).
          </p>
        </div>
      </section>
    </>
  );
}
