import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/data/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-softwhite">
      <div className="container-shs grid grid-cols-1 gap-10 py-16 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/shs-logo.jpeg"
              alt="Standard Higher Secondary School logo"
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
            <span className="font-serif text-base leading-tight">
              Standard Higher
              <br />
              Secondary School
            </span>
          </div>
          <p className="mt-4 text-sm text-softwhite/60 leading-relaxed">
            {siteConfig.aboutShort.slice(0, 120)}…
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-softwhite/70">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-softwhite transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
            Academics
          </h3>
          <ul className="space-y-2 text-sm text-softwhite/70">
            <li>
              <Link href="/academics" className="hover:text-softwhite transition-colors">
                Programs
              </Link>
            </li>
            <li>
              <Link href="/admissions" className="hover:text-softwhite transition-colors">
                Admissions
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
            Connect
          </h3>
          <ul className="space-y-2 text-sm text-softwhite/70">
            <li>{siteConfig.address}</li>
            <li>
              <a href={`tel:${siteConfig.phone}`} className="hover:text-softwhite transition-colors">
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-softwhite transition-colors"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-softwhite/10">
        <div className="container-shs py-6 text-center text-xs text-softwhite/50">
          © {new Date().getFullYear()} Standard Higher Secondary School. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
