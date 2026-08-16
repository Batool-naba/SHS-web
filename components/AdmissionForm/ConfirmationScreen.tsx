import Button from "@/components/Button";

export default function ConfirmationScreen({ applicationId }: { applicationId: string }) {
  return (
    <div className="border border-burgundy bg-ivory p-10 text-center">
      <h3 className="font-serif text-2xl text-charcoal">Application Submitted</h3>
      <p className="mt-4 text-sm text-charcoal/60">
        Your application ID is:
      </p>
      <p className="mt-2 font-serif text-3xl text-burgundy tracking-wide">{applicationId}</p>
      <p className="mt-6 text-sm text-charcoal/60 max-w-md mx-auto">
        This is a demonstration of the SHS online admission system. Your application has not been
        sent to the school office yet — please also contact SHS directly at{" "}
        <span className="font-medium">051-5525585</span> to complete your application.
      </p>
      <Button href="/" variant="secondary" className="mt-8">
        Return Home
      </Button>
    </div>
  );
}
