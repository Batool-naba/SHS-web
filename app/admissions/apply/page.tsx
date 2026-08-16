import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import AdmissionForm from "@/components/AdmissionForm/AdmissionForm";

export const metadata: Metadata = {
  title: "Apply Now",
  description: "Submit your application to Standard Higher Secondary School, Rawalpindi.",
};

export default function ApplyPage() {
  return (
    <>
      <section className="section-pad bg-ivory">
        <div className="container-shs">
          <SectionHeading
            eyebrow="Admissions"
            title="Online Application"
            description="Complete the steps below to apply to Standard Higher Secondary School."
            align="center"
          />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shs">
          <AdmissionForm />
        </div>
      </section>
    </>
  );
}
