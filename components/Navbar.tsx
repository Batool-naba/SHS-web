"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/lib/data/siteConfig";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-softwhite/95 backdrop-blur border-b border-charcoal/10">
      <div className="container-shs flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/shs-logo.jpeg"
            alt="Standard Higher Secondary School logo"
            width={48}
            height={48}
            className="rounded-full object-cover"
            priority
          />
          <span className="font-serif text-lg leading-tight text-charcoal hidden sm:block">
            Standard Higher
            <br />
            Secondary School
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-charcoal/80 hover:text-burgundy transition-colors"
            >
              {link.label.toUpperCase()}
            </Link>
          ))}
          <Link
            href="/admissions/apply"
            className="bg-burgundy text-softwhite px-6 py-2.5 text-sm font-semibold tracking-wide uppercase hover:bg-burgundy-dark transition-colors"
          >
            Apply Now
          </Link>
        </nav>

        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className={`block h-0.5 w-6 bg-charcoal transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-charcoal transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-charcoal transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-charcoal/10 bg-softwhite">
          <div className="container-shs flex flex-col py-4">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium tracking-wide text-charcoal/80 hover:text-burgundy border-b border-charcoal/5 last:border-none"
              >
                {link.label.toUpperCase()}
              </Link>
            ))}
            <Link
              href="/admissions/apply"
              onClick={() => setOpen(false)}
              className="mt-4 bg-burgundy text-softwhite px-6 py-3 text-center text-sm font-semibold tracking-wide uppercase"
            >
              Apply Now
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
