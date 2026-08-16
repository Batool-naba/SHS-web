import Link from "next/link";

export default function AnnouncementBar() {
  return (
    <div className="bg-charcoal text-softwhite text-xs md:text-sm">
      <div className="container-shs flex items-center justify-center gap-3 py-2 text-center">
        <span className="tracking-wide">
          Admissions Open — [Academic Session to be confirmed by SHS]
        </span>
        <Link
          href="/admissions"
          className="font-semibold text-gold underline underline-offset-2 hover:text-gold/80"
        >
          View Admissions
        </Link>
      </div>
    </div>
  );
}
